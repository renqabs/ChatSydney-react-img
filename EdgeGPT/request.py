import os
import uuid
from datetime import datetime
from typing import Union

from .conversation_style import CONVERSATION_STYLE_TYPE
from .conversation_style import ConversationStyle
from .utilities import get_location_hint_from_locale
from .utilities import get_ran_hex
from .utilities import guess_locale


class ChatHubRequest:
    def __init__(
        self,
        conversation_signature: str,
        client_id: str,
        conversation_id: str,
        invocation_id: int = 3,
        blobId: str = None,
    ) -> None:
        self.struct: dict = {}

        self.client_id: str = client_id
        self.conversation_id: str = conversation_id
        self.conversation_signature: str = conversation_signature
        self.invocation_id: int = invocation_id
        self.blobId: str = blobId

    def update(
        self,
        prompt: str,
        conversation_style: CONVERSATION_STYLE_TYPE,
        webpage_context: Union[str, None] = None,
        search_result: bool = False,
        locale: str = guess_locale(),
        enable_gpt4turbo: bool = False,
    ) -> None:
        options = [
            "deepleo",
            "enable_debug_commands",
            "disable_emoji_spoken_text",
            "enablemm",
        ]
        if conversation_style:
            if not isinstance(conversation_style, ConversationStyle):
                conversation_style = getattr(ConversationStyle, conversation_style)
            options = conversation_style.value.copy()
        message_id = str(uuid.uuid4())
        # Get the current local time
        now_local = datetime.now()

        # Get the current UTC time
        now_utc = datetime.utcnow()

        # Calculate the time difference between local and UTC time
        timezone_offset = now_local - now_utc

        # Get the offset in hours and minutes
        offset_hours = int(timezone_offset.total_seconds() // 3600)
        offset_minutes = int((timezone_offset.total_seconds() % 3600) // 60)

        # Format the offset as a string
        offset_string = f"{offset_hours:+03d}:{offset_minutes:02d}"

        # Get current time
        timestamp = datetime.now().strftime("%Y-%m-%dT%H:%M:%S") + offset_string

        # disable search
        if not search_result:
            options.insert(-1, "nosearchall")
        # enable gpt-4-turbo
        if enable_gpt4turbo:
            options.insert(-1, "gpt4tmncnp")
        self.struct = {
            "arguments": [
                {
                    "source": "cib",
                    "optionsSets": options,
                    "allowedMessageTypes": [
                        "ActionRequest",
                        "Chat",
                        "ConfirmationCard",
                        "Context",
                        "InternalSearchQuery",
                        "InternalSearchResult",
                        "Disengaged",
                        "InternalLoaderMessage",
                        "Progress",
                        "RenderCardRequest",
                        "RenderContentRequest",
                        "AdsQuery",
                        "SemanticSerp",
                        "GenerateContentQuery",
                        "SearchQuery",
                        "GeneratedCode",
                        "InternalTasksMessage"
                    ],
                    "sliceIds": [],
                    "verbosity": "verbose",
                    "scenario": "SERP",
                    "traceId": get_ran_hex(32),
                    "gptId": "copilot",
                    "isStartOfSession": self.invocation_id == 3,
                    "requestId": message_id,
                    "message": {
                        "locale": locale,
                        "market": locale,
                        "region": locale[-2:],  # en-US -> US
                        "locationHints": get_location_hint_from_locale(locale),
                        "userIpAddress": "",
                        "timestamp": timestamp,
                        "author": "user",
                        "inputMethod": "Keyboard",
                        "text": prompt,
                        "messageType": "Chat",
                        "messageId": message_id,
                        "requestId": message_id,
                    },
                    "tone": conversation_style.name.capitalize(),  # Make first letter uppercase
                    "spokenTextMode": "None",
                    "conversationId": self.conversation_id,
                    "participant": {
                        "id": self.client_id,
                    },
                },
            ],
            "invocationId": str(self.invocation_id),
            "target": "chat",
            "type": 4,
        }
        if self.blobId:
            self.struct["arguments"][0]["message"]["imageUrl"] = "https://www.bing.com/images/blob?bcid=" + self.blobId
        if self.conversation_signature:
            self.struct["arguments"][0]["conversation_signature"] = self.conversation_signature
        if webpage_context:
            self.struct["arguments"][0]["previousMessages"] = [
                {
                    "author": "system",
                    "description": webpage_context,
                    "contextType": "WebPage",
                    "messageType": "Context",
                    # "messageId": "discover-web--page-ping-mriduna-----",
                },
            ]
        self.invocation_id += 1
        # print(timestamp)

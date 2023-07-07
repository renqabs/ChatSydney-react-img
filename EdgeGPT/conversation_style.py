from enum import Enum

try:
    from typing import Union, Literal
except ImportError:
    from typing_extensions import Literal
from typing import Optional


class ConversationStyle(Enum):
    creative = [
        "nlu_direct_response_filter",
        "deepleo",
        "disable_emoji_spoken_text",
        "responsible_ai_policy_235",
        "enablemm",
        "iycapbing",
        "iyxapbing",
        "rai271",
        "prtime2t",
        "smartname",
        "enbsnptrc",
        "dv3sugg",
        "iyoloxap",
        "iyoloneutral",
        "h3imaginative",
        "saharagenconv5",
        "dsblhlthcrd",
        "clgalileo",
        "gencontentv3",
    ]
    balanced = [
        "nlu_direct_response_filter",
        "deepleo",
        "disable_emoji_spoken_text",
        "responsible_ai_policy_235",
        "enablemm",
        "galileo",
        "saharagenconv5",
        "objopinion",
        "dsblhlthcrd",
        "dv3sugg",
        "autosave",
    ]
    precise = [
        "nlu_direct_response_filter",
        "deepleo",
        "disable_emoji_spoken_text",
        "responsible_ai_policy_235",
        "enablemm",
        "h3precise",
        "objopinion",
        "dsblhlthcrd",
        "dv3sugg",
        "autosave",
        "clgalileo",
        "gencontentv3",
    ]


CONVERSATION_STYLE_TYPE = Optional[
    Union[ConversationStyle, Literal["creative", "balanced", "precise"]]
]

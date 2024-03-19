from enum import Enum

try:
    from typing import Union, Literal
except ImportError:
    from typing_extensions import Literal
from typing import Optional


class ConversationStyle(Enum):
    creative = [
        "deepleo",
        "disable_emoji_spoken_text",
        "dv3sugg",
        "autosave",
        "iyxapbing",
        "iycapbing",
        "h3imaginative",
        "clgalileo",
        "gencontentv3",
        "nojbfedge"
    ]
    balanced = [
        "deepleo",
        "disable_emoji_spoken_text",
        "dv3sugg",
        "autosave",
        "iyxapbing",
        "iycapbing",
        "clgalileo",
        "saharagenconv5",
        "nojbfedge"
    ]
    precise = [
        "deepleo",
        "disable_emoji_spoken_text",
        "dv3sugg",
        "autosave",
        "iyxapbing",
        "iycapbing",
        "h3precise",
        "clgalileo",
        "gencontentv3",
        "nojbfedge"
    ]


CONVERSATION_STYLE_TYPE = Optional[
    Union[ConversationStyle, Literal["creative", "balanced", "precise"]]
]

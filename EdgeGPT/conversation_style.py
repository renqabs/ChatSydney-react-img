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
        "dv3sugg",
        "autosave",
        "iyxapbing",
        "iycapbing",
        "h3imaginative",
        "clgalileo",
        "gencontentv3",
        "logprobsc",
        "bof108t525",
        "log2sph",
        "iwusrprmpt",
        "iyjbexp",
        "loccnt",
        "dv3suggtrim",
        "eredirecturl",
        "nojbfedge",
    ]
    balanced = [
        "nlu_direct_response_filter",
        "deepleo",
        "disable_emoji_spoken_text",
        "responsible_ai_policy_235",
        "enablemm",
        "dv3sugg",
        "autosave",
        "iyxapbing",
        "iycapbing",
        "galileo",
        "logprobsc",
        "bof108t525",
        "log2sph",
        "iwusrprmpt",
        "iyjbexp",
        "loccnt",
        "dv3suggtrim",
        "eredirecturl",
        "saharagenconv5",
        "nojbfedge",
    ]
    precise = [
        "nlu_direct_response_filter",
        "deepleo",
        "disable_emoji_spoken_text",
        "responsible_ai_policy_235",
        "enablemm",
        "dv3sugg",
        "autosave",
        "iyxapbing",
        "iycapbing",
        "h3precise",
        "logprobsc",
        "bof108t525",
        "log2sph",
        "iwusrprmpt",
        "iyjbexp",
        "loccnt",
        "dv3suggtrim",
        "eredirecturl",
        "clgalileo",
        "gencontentv3",
        "nojbfedge"
    ]


CONVERSATION_STYLE_TYPE = Optional[
    Union[ConversationStyle, Literal["creative", "balanced", "precise"]]
]

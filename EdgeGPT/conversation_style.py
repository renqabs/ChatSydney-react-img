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
        "iyxapbing",
        "iycapbing",
        "h3imaginative",
        "clgalileo",
        "gencontentv3",
        "fluxsrtrunc",
        "fluxtrunc",
        "fluxv1",
        "rai278",
        "replaceurl",
        "iyoloexp",
        "udt4upm5gnd",
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
        "gcccomp",
        "agicert",
        "iyjbexp",
        "izusrprmpt",
        "eredirecturl",
        "saharagenconv5",
        "fluxhint",
        "glfluxv13",
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
        "gcccomp",
        "agicert",
        "iyjbexp",
        "izusrprmpt",
        "eredirecturl",
        "clgalileo",
        "gencontentv3",
        "fluxhint",
        "fluxv13",
        "nojbfedge"
    ]


CONVERSATION_STYLE_TYPE = Optional[
    Union[ConversationStyle, Literal["creative", "balanced", "precise"]]
]

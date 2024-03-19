import random
import uuid
#from .ip_rand import get_random_ip
DELIMITER = "\x1e"

# Generate random IP between range 13.104.0.0/14
# f"13.{random.randint(104, 107)}.{random.randint(0, 255)}.{random.randint(0, 255)}"
# FORWARDED_IP = get_random_ip()

HEADERS = {
    "host":"sydney.bing.com",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "accept-encoding": "gzip, deflate, br",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    # "x-forwarded-for": FORWARDED_IP,
    "origin": "https://www.bing.com",
    "referer": "https://www.bing.com/search?q=Bing+AI",
    "user-agent": "Mozilla/5.0 (Linux; Android 7.1.1; OPPO R11t) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Mobile Safari/537.36 EdgA/108.0.1462.4",
}

HEADERS_INIT_CONVER = {
    "accept": "application/json",
    "accept-language": "en-US;q=0.9",
    "sec-ch-ua": '"Not?A_Brand";v="8", "Chromium";v="108", "Microsoft Edge";v="108"',
    "sec-ch-ua-arch": '',
    "sec-ch-ua-bitness": '"64"',
    "sec-ch-ua-full-version": '"108.0.1462.48"',
    "sec-ch-ua-full-version-list": '"Not)A;Brand";v="24.0.0.0", "Microsoft Edge";v="116.0.1938.43", "Chromium";v="116.0.5845.62"',
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-model": '"OPPO R11t"',
    "sec-ch-ua-platform": '"Android"',
    "sec-ch-ua-platform-version": '"7.1.1"',
    "user-agent": "Mozilla/5.0 (Linux; Android 7.1.1; OPPO R11t) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Mobile Safari/537.36 EdgA/108.0.1462.4",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-ms-client-request-id": str(uuid.uuid4()),
    "x-ms-useragent": "azsdk-js-api-client-factory/1.0.0-beta.1 core-rest-pipeline/1.12.3 OS/Android",
    "referer": "https://www.bing.com/search?q=Bing+AI",
    # "x-forwarded-for": FORWARDED_IP,
}



HEADER_IMG_UPLOAD = {
    "sec-ch-ua": '"Not)A;Brand";v="24", "Microsoft Edge";v="116", "Chromium";v="116",',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 Edg/116.0.0.0",
    'referer': 'https://www.bing.com/search?q=Bing+AI',
    # "x-forwarded-for": FORWARDED_IP,
}
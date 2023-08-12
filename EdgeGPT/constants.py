import random
import uuid

DELIMITER = "\x1e"


# Generate random IP between range 13.104.0.0/14
FORWARDED_IP = f"13.{random.randint(104, 107)}.{random.randint(0, 255)}.{random.randint(0, 255)}"

HEADERS = {
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "accept-encoding": "gzip, deflate, br",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "x-forwarded-for": FORWARDED_IP,
    "origin": "https://www.bing.com",
    "referer": "https://www.bing.com/search?q=Bing+AI",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 Edg/116.0.0.0",
}

HEADERS_INIT_CONVER = {
    "accept": "application/json",
    "accept-language": "en-US;q=0.9",
    "sec-ch-ua": '"Not)A;Brand";v="24", "Microsoft Edge";v="116", "Chromium";v="116",',
    "sec-ch-ua-arch": '"x86"',
    "sec-ch-ua-bitness": '"64"',
    "sec-ch-ua-full-version": '"116.0.1938.43"',
    "sec-ch-ua-full-version-list": '"Not)A;Brand";v="24.0.0.0", "Microsoft Edge";v="116.0.1938.43", "Chromium";v="116.0.5845.62"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-model": '""',
    "sec-ch-ua-platform": '"Windows"',
    "sec-ch-ua-platform-version": '"15.0.0"',
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 Edg/116.0.0.0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-ms-client-request-id": str(uuid.uuid4()),
    "x-ms-useragent": "azsdk-js-api-client-factory/1.0.0-beta.1 core-rest-pipeline/1.10.3 OS/Windows",
    "referer": "https://www.bing.com/search?q=Bing+AI",
    "x-forwarded-for": FORWARDED_IP,
}



HEADER_IMG_UPLOAD = {
    'referer': 'https://www.bing.com/search?q=Bing+AI',
}

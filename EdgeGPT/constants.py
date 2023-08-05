import random
import uuid

DELIMITER = "\x1e"


# Generate random IP between range 13.104.0.0/14
FORWARDED_IP = f"13.{random.randint(104, 107)}.{random.randint(0, 255)}.{random.randint(0, 255)}"

HEADERS = {
    "accept": "application/json",
    "accept-language": "en-US;q=0.9",
    "accept-encoding": "gzip, deflate, br, zsdch",
    "content-type": "application/json",
    "sec-ch-ua": '"Not/A)Brand";v="99", "Microsoft Edge";v="115", "Chromium";v="115"',
    "sec-ch-ua-arch": '"x86"',
    "sec-ch-ua-bitness": '"64"',
    "sec-ch-ua-full-version": '"115.0.1901.188"',
    "sec-ch-ua-full-version-list": '"Not/A)Brand";v="99.0.0.0", "Microsoft Edge";v="115.0.1901.188", "Chromium";v="115.0.5790.114"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-model": "",
    "sec-ch-ua-platform": '"Windows"',
    "sec-ch-ua-platform-version": '"15.0.0"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "sec-ms-gec-version": "1-115.0.1901.188",
    "x-ms-client-request-id": str(uuid.uuid4()),
    "x-ms-useragent": "azsdk-js-api-client-factory/1.0.0-beta.1 core-rest-pipeline/1.10.3 OS/Windows",
    "Referer": "https://www.bing.com/search?",
    "Referrer-Policy": "origin-when-cross-origin",
    "x-forwarded-for": FORWARDED_IP,
}

HEADERS_INIT_CONVER = {
    "authority": "www.bing.com",
    "accept": "application/json",
    "accept-language": "en-US;q=0.9",
    "cache-control": "max-age=0",
    "sec-ch-ua": '"Not/A)Brand";v="99", "Microsoft Edge";v="115", "Chromium";v="115"',
    "sec-ch-ua-arch": '"x86"',
    "sec-ch-ua-bitness": '"64"',
    "sec-ch-ua-full-version": '"115.0.1901.188"',
    "sec-ch-ua-full-version-list": '"Not/A)Brand";v="99.0.0.0", "Microsoft Edge";v="115.0.1901.188", "Chromium";v="115.0.5790.114"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-model": '""',
    "sec-ch-ua-platform": '"Windows"',
    "sec-ch-ua-platform-version": '"15.0.0"',
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.188",
    "x-edge-shopping-flag": "1",
    "x-forwarded-for": FORWARDED_IP,
}

HEADER_IMG_UPLOAD = {
    'referer': 'https://www.bing.com/search?q=Bing+AI&showconv=1&FORM=hpcodx',
}

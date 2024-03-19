from enum import Enum

try:
    from typing import Union, Literal
except ImportError:
    from typing_extensions import Literal
from typing import Optional


class LocationHint(Enum):
    USA = {
        "locale": "en-US",
        "LocationHint": [
            {
                "SourceType": 1,
                "RegionType": 2,
                "Center": {
                    "Latitude": 34.0536909,
                    "Longitude": -118.242766,
                },
                "Radius": 24902,
                "Name": "United States",
                "Accuracy": 24902,
                "FDConfidence": 0,
                "CountryName": "United States",
                "CountryConfidence": 9,
                "PopulatedPlaceConfidence": 0,
                "UtcOffset": 8,
                "Dma": 0
            },
        ],
    }
    CHINA = {
        "locale": "zh-CN",
        "LocationHint": [
            {
                "SourceType": 1,
                "RegionType": 2,
                "Center": {
                    "Latitude": 39.9042,
                    "Longitude": 116.4074,
                },
                "Radius": 24902,
                "Name": "China",
                "Accuracy": 24902,
                "FDConfidence": 0,
                "CountryName": "China",
                "CountryConfidence": 9,
                "PopulatedPlaceConfidence": 0,
                "UtcOffset": 8,
                "Dma": 0
            },
        ],
    }
    EU = {
        "locale": "en-IE",
        "LocationHint": [
            {

                "SourceType": 1,
                "RegionType": 2,
                "Center": {
                    "Latitude": 59.9139,
                    "Longitude": 10.7522,
                },
                "Radius": 24902,
                "Name": "Norway",
                "Accuracy": 24902,
                "FDConfidence": 0,
                "CountryName": "Norway",
                "CountryConfidence": 8,
                "PopulatedPlaceConfidence": 0,
                "UtcOffset": 1,
                "Dma": 0
            },
        ],
    }
    UK = {
        "locale": "en-GB",
        "LocationHint": [
            {
                "SourceType": 1,
                "RegionType": 2,
                "Center": {
                    "Latitude": 51.5074,
                    "Longitude": -0.1278,
                },
                "Radius": 24902,
                "Name": "United Kingdom",
                "Accuracy": 24902,
                "FDConfidence": 0,
                "CountryName": "United Kingdom",
                "CountryConfidence": 8,
                "PopulatedPlaceConfidence": 0,
                "UtcOffset": 0,
                "Dma": 0
            },
        ],
    }


LOCATION_HINT_TYPES = Optional[Union[LocationHint, Literal["USA", "CHINA", "EU", "UK"]]]
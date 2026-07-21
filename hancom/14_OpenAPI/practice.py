# • 알라딘 Open API 신청: https://blog.aladin.co.kr/openapi/popup/6695306
# • API 문서(구글 Docs): https://docs.google.com/document/d/1mX-WxuoGs8Hy-QalhHcvuV17n50uGI2Sg_GHofgiePE
import requests
# from ultralytics import YOLO
# import cv2
import dotenv
import os
# import urllib.request
# import json
# import pandas as pd

dotenv.load_dotenv(".env")
CLIENT_ID = os.getenv("CLIENT_ID")
CLIENT_SECRET = os.getenv("CLIENT_SECRET")
url = "https://openapi.naver.com/v1/search/news.json"

headers = {
    "X-Naver-Client-Id": CLIENT_ID,
    "X-Naver-Client-Secret": CLIENT_SECRET
}
params = {
    "query": "인공지능",
    "display": 5,
    "sort": "date"
}

res = requests.get(url, headers=headers, params=params)
# print(res)
for item in res.json()["items"]:
    print(item["title"], "|", item["pubDate"])

#---
# dotenv.load_dotenv()
# KAKAO_API_KEY = os.getenv("KAKAO_API_KEY")
# url = "https://dapi.kakao.com/v2/local/search/keyword.json"

# headers = {"Authorization": f"KakaoAK {KAKAO_API_KEY}"}
# params = {
#     "query": "강남역 카페",
#     "size": 5
# }
# res = requests.get(url, headers=headers, params=params)
# # print(res)
# places = res.json()["documents"]
# for p in places:
#     print(p["place_name"], "|", p["address_name"])

#---
# dotenv.load_dotenv()
# ITS_API_KEY = os.getenv("ITS_API_KEY")

# Type = "its"
# minX, maxX = 120.958388, 127.021698
# minY, maxY = 30.556610, 37.699621
# getType = "json"

# url_cctv = (
#     f"https://openapi.its.go.kr:9443/cctvInfo"
#     f"?apiKey={ITS_API_KEY}&type={Type}&cctvType=1"
#     f"&minX={minX}&maxX={maxX}"
#     f"&minY={minY}&maxY={maxY}&getType={getType}"
# )

# res = urllib.request.urlopen(url_cctv)
# # json_str = res.read().decode("utf-8")
# # data = json.loads(json_str)
# data = json.loads(res.read().decode("utf-8"))
# # print(data)
# cctv_play = pd.json_normalize(data["response"]["data"])

# test_url = cctv_play["cctvurl"][0]

# cap = cv2.VideoCapture(test_url)
# model = YOLO("models/yolo11n.pt")

# while cap.isOpened():
#     success, frame = cap.read()
#     if not success:
#         print("CCTV URL 확인 또는 접근 확인해주세요.")
#         break

#     results = model(frame)
#     annotated_frame = results[0].plot()

#     cv2.namedWindow("CCTV", cv2.WINDOW_NORMAL)
#     cv2.resizeWindow("CCTV", 800, 600)
#     cv2.imshow("CCTV", annotated_frame)

#     if cv2.waitKey(1) & 0xFF == ord("q"):
#         print("q키를 눌러서 종료")
#         break
# cap.release()
# cv2.destroyAllWindows()

#---
# dotenv.load_dotenv()
# FORE_API_KEY = os.getenv("FORE_API_KEY")
# url = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst"

# params = {
#     "serviceKey": FORE_API_KEY,
#     "numOfRows": 100,
#     "pageNo": 1,
#     "dataType": "JSON",
#     "base_date": "20260721",
#     "base_time": "1200",
#     "nx": 60,
#     "ny": 127
# }

# res = requests.get(url, params=params)
# # print(res.status_code)
# # print(res.text)
# items = res.json()["response"]["body"]["items"]["item"]
# for item in items:
#     print(item["category"], item["fcstValue"])


#---
# dotenv.load_dotenv()
# TTB_API_KEY = os.getenv("TTB_API_KEY")
# url = "https://www.aladin.co.kr/ttb/api/ItemList.aspx"

# params = {
#     "ttbkey": TTB_API_KEY,
#     "QueryType": "Bestseller",  # Bestseller / NewAll / NewSpecial
#     "MaxResults": 10,
#     "SearchTarget": "Book",
#     "output": "js",
#     "Version": "20131101"
# }

# res = requests.get(url, params=params)
# data = res.json()
# for item in data["item"]:
#     print(item["title"], "|", item["author"])
#---

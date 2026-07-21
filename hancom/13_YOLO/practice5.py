from dotenv import load_dotenv
import os
# from ultralytics import YOLO
# import cv2

# # 1. 비디오/스트림 경로 설정
# cap = cv2.VideoCapture("http://210.99.70.120:1935/live/cctv009.stream/playlist.m3u8")

# # 2. 모델 로드
# model = YOLO("models/yolo11n.pt")

# # 3. 프레임 처리
# while cap.isOpened():
#     success, frame = cap.read()
#     if not success:
#         print("프레임 읽기 실패 . . .")
#         break

#     # 객체 추적 수행
#     results = model.track(frame, persist=True, conf=0.6)
#     # persist=True → 이전 프레임 정보 유지

#     # 추적 결과 시각화
#     annotated_frame = results[0].plot()

#     # 결과 화면 조절
#     cv2.namedWindow("YOLO_TRACKING", cv2.WINDOW_NORMAL)
#     cv2.imshow("YOLO_TRACKING", annotated_frame)

#     if cv2.waitKey(1) & 0xFF == ord('q'):
#         print("q키를 눌러서 종료")
#         break

# # 4. 자원 해제
# cap.release()
# cv2.destroyAllWindows()

# from ultralytics import solutions
# import cv2

# # 1. 비디오 경로 설정
# video_path = "http://210.99.70.120:1935/live/cctv009.stream/playlist.m3u8"
# cap = cv2.VideoCapture(video_path)

# # 2. 모델 로드 및 Heatmap 객체 생성
# heatmap = solutions.Heatmap(
#     model="models/yolo11n.pt",
#     show=True,
#     colormap=cv2.COLORMAP_MAGMA  # 색상 지도 (MAGMA = 보라~노랑)
# )

# # 3. 비디오 프레임 처리
# while cap.isOpened():
#     success, frame = cap.read()
#     if not success:
#         print("비디오 읽기 실패 . . .")
#         break

#     # 누적 히트맵 갱신 (인스턴스 직접 호출)
#     results = heatmap(frame)

#     if cv2.waitKey(1) & 0xFF == ord('q'):
#         print("q키를 눌러서 종료")
#         break

# # 4. 자원 해제
# cap.release()
# cv2.destroyAllWindows()

from ultralytics import solutions
import cv2

stream_url = "http://210.99.70.120:1935/live/cctv009.stream/playlist.m3u8"
cap = cv2.VideoCapture(stream_url)
assert cap.isOpened(), "CCTV URL 확인 또는 접근 확인해주세요."

from_email = "dd0220ndd0220@gmail.com"
load_dotenv(".env")
password = os.getenv("GOOGLE_APP_PASSWORD")
to_email = "wjdsdd0220@gmail.com"

google_alarm = solutions.SecurityAlarm(
    model="models/yolo11n.pt",
    show=True,
    records=1,
    classes=[5]
)
google_alarm.authenticate(from_email, password, to_email)

while cap.isOpened():
    success, frame = cap.read()
    if not success:
        print("CCTV URL 확인 또는 접근 확인해주세요.")
        break

    result =google_alarm(frame)

    if result.email_sent:
        print("이메일 전송 완료")
        break

    if cv2.waitKey(1) & 0xFF == ord('q'):
        print("q키를 눌러서 종료")
        break
cap.release()
cv2.destroyAllWindows()

# ---
# blur_on = True
# blurrer = solutions.ObjectBlurrer(
#     model="models/yolo11n.pt",
#     show=True,
#     blur_ratio = 0.2
# )

# while cap.isOpened():
#     success, frame = cap.read()
#     if not success:
#         print("CCTV URL 확인 또는 접근 확인해주세요.")
#         break

#     if blur_on:
#         blurrer(frame)
#     else :
#         cv2.imshow("Ultralytics Solutions", frame)

#     key = cv2.waitKey(1) & 0xFF
#     if key == ord('q'):
#         print("q키를 눌러서 종료")
#         break
#     if key == ord('b'):
#         blur_on = not blur_on
#         print(f"블러링 상태: {blur_on}")
    
#---
# distance = solutions.DistanceCalculation(
#     model = "models/yolo11n.pt",
#     show = True,
# )
# while cap.isOpened():
#     success, frame = cap.read()
#     if not success:
#         print("CCTV URL 확인 또는 접근 확인해주세요.")
#         break

#     # distance(frame)
#     results = distance.process(frame)
#     pixel_distance = results.pixels_distance

#     if pixel_distance is None or pixel_distance == 0:
#         print("Distance : ---, Status : No two objects selected")
#         continue
    
#     if pixel_distance >= 150:
#         status = "SAFE"
#     elif pixel_distance >= 100:
#         status = "Warning"
#     else:
#         status = "DANGER"

#     print(f"Distance : {pixel_distance}, Status : {status}")

#     if cv2.waitKey(1) & 0xFF == ord('q'):
#         print("q키를 눌러서 종료")
#         break
# cap.release()

#---
# region_points = {
#     "region-01" : [(60, 460), (580, 460), (500, 160), (220, 160)]
# }

# region_monitor = solutions.RegionCounter(
#     model = "models/yolo11n.pt",
#     show = True,
#     region = region_points,
#     conf = 0.1
# )

# points = []
# region_monitor = None
# def mouse_callback(event, x, y, flags, param):
#     if event == cv2.EVENT_LBUTTONDOWN:
#         points.append((x, y))
#         print(f"좌표 추가: ({x}, {y})")

# cv2.namedWindow("GET_X_Y", cv2.WINDOW_NORMAL)
# cv2.resizeWindow("GET_X_Y", 640, 480)
# cv2.setMouseCallback("GET_X_Y", mouse_callback)

# while cap.isOpened():
#     success, frame = cap.read()
#     if not success:
#         print("CCTV URL 확인 또는 접근 확인해주세요.")
#         break

#     re_frame = cv2.resize(frame, (640, 480))

#     # cv2.imshow("GET_X_Y", re_frame)
#     # region_monitor(re_frame)

#     if len(points) == 4 :
#         region_monitor = solutions.RegionCounter(
#             model = "models/yolo11n.pt",
#             show = True,
#             region = points,
#             conf = 0.1
#         )
#         points.clear()


#     if region_monitor is None:
#         cv2.imshow("GET_X_Y", re_frame)
#     else:
#         region_monitor(re_frame)

#     if cv2.waitKey(1) & 0xFF == ord('q'):
#         print("q키를 눌러서 종료")
#         break
# cap.release()
# cv2.destroyAllWindows()

# ---

# count_points = [(60, 260), (580, 260)]

# counter = solutions.ObjectCounter(
#     model = "models/yolo11n.pt",
#     show = True,
#     region = count_points
# )

# while cap.isOpened():
#     success, frame = cap.read()
#     if not success:
#         print("CCTV URL 확인 또는 접근 확인해주세요.")
#         break

#     re_frame = cv2.resize(frame, (640, 480))

#     counter(re_frame)

#     if cv2.waitKey(1) & 0xFF == ord('q'):
#         print("q키를 눌러서 종료")
#         break
# cap.release()

#---

# speed = solutions.SpeedEstimator(
#     model = "models/yolo11n.pt",
#     show = True,
#     max_speed = 120,
#     meter_per_pixel = 0.197,
#     classes = [2],
#     line_width = 3
# )

# while cap.isOpened():
#     success, frame = cap.read()
#     if not success:
#         print("CCTV URL 확인 또는 접근 확인해주세요.")
#         break

#     speed(frame)

#     if cv2.waitKey(5) & 0xFF == ord('q'):
#         print("q키를 눌러서 종료")
#         break
# cap.release()

#---
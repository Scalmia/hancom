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

from ultralytics import solutions
import cv2

# 1. 비디오 경로 설정
video_path = "http://210.99.70.120:1935/live/cctv009.stream/playlist.m3u8"
cap = cv2.VideoCapture(video_path)

# 2. 모델 로드 및 Heatmap 객체 생성
heatmap = solutions.Heatmap(
    model="models/yolo11n.pt",
    show=True,
    colormap=cv2.COLORMAP_MAGMA  # 색상 지도 (MAGMA = 보라~노랑)
)

# 3. 비디오 프레임 처리
while cap.isOpened():
    success, frame = cap.read()
    if not success:
        print("비디오 읽기 실패 . . .")
        break

    # 누적 히트맵 갱신 (인스턴스 직접 호출)
    results = heatmap(frame)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        print("q키를 눌러서 종료")
        break

# 4. 자원 해제
cap.release()
cv2.destroyAllWindows()
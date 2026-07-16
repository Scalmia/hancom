import cv2  # OpenCV — 영상 처리·그리기 라이브러리

# 1. CCTV 스트리밍 URL 설정
stream_url = "http://210.99.70.120:1935/live/cctv009.stream/playlist.m3u8"

cap = cv2.VideoCapture(stream_url)  # URL을 넣어 영상 스트림 객체 생성

# 3. 실시간 프레임 처리
while cap.isOpened():   # 스트림이 열려 있는 동안 반복
    success, frame = cap.read()   # 프레임 한 장 읽기
    if not success:
        print("읽기 실패 또는 스트림 종료입니다.")
        break

    # 3-5. 표시할 값 (아래 YOLO 탐지 결과로 교체 가능)
    count = 500                    # 감지된 객체 수 (예시 값)
    status = "Safe"                # 상태 문자열 (예: Safe / Warning)
    color = (255, 0, 0)            # 글자색을 BGR 순서대로 파랑

    # 3-6. 문자 정보 화면에 표시
    cv2.putText(
        frame,
        f"Detected : {count}, {status}",
        (10, 30),
        cv2.FONT_HERSHEY_SIMPLEX,
        1,
        color,
        2,
        cv2.LINE_AA
    )

    # 3-7. OpenCV 창으로 표시
    cv2.imshow("CCTV Detection", frame)

    # 3-8. q 키 눌러서 종료
    if cv2.waitKey(1) & 0xFF == ord('q'):
        print('q 키를 눌러서 종료합니다.')
        break

# 4. 자원 해제
cap.release()
cv2.destroyAllWindows()
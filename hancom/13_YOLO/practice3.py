import cv2  # OpenCV - 영상·이미지 처리 라이브러리

# CCTV 스트림 주소 (UTIC에서 발급된 m3u8 재생 목록 URL)
stream_url = "https://cctvsec.ktict.co.kr/60214/20s19AFhOtQU4rRIYfS0VMoxFSXDIO3bFeQbZCIJZw3Rx4g1AK5USL+yALY9wZI4"

# 웹캠 번호 대신 URL을 넣으면 네트워크 영상으로 열림
cap = cv2.VideoCapture(stream_url)

while cap.isOpened():  # 스트림이 정상 열려 있는 동안 반복
    success, frame = cap.read()  # 프레임 한 장 읽기 (success=True/False, frame=이미지)
    if not success:
        print("CCTV URL 확인 또는 접근 확인해주세요.")  # 읽기 실패 -> 루프 종료
        break

    cv2.imshow("CCTV URL", frame)  # 창에 프레임 표시 (창 제목="CCTV URL")

    # 'q' 키 누르면 종료 (waitKey 없으면 영상 안 보임)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        print("q키를 눌러서 종료")  # q 키 입력 시 루프 종료
        break

cap.release()  # 스트림 자원 해제
cv2.destroyAllWindows()  # 모든 OpenCV 창 닫기
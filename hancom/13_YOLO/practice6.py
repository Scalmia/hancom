#---

# from ultralytics import SAM
# from ultralytics import FastSAM
# import time
# import cv2

# model = FastSAM("models/FastSAM-s.pt")
# print(f"{model.names} 모델 로드 완료")

# path = "images/input_params.jpg"

# start_time = time.time()

# results = model(path, device="cuda:0", texts="flower")

# output_image = results[0].plot()

# cv2.imwrite("images/output_params.jpg", output_image)
# print(f"예측 결과 이미지가 잘 저장 되었습니다. images/output_params.jpg")

# end_time = time.time()
# elapsed_time = end_time - start_time

# print(f"예측 완료. 소요 시간: {elapsed_time:.2f}초")

#---

# from sahi import AutoDetectionModel
# from sahi.predict import get_sliced_prediction
# from sahi.predict import get_prediction

# detection_model = AutoDetectionModel.from_pretrained(
#     model_type="ultralytics",
#     model_path="models/yolo11n.pt",
#     confidence_threshold=0.3
# )
# detection_model = AutoDetectionModel.from_pretrained(
#     model_type="ultralytics",
#     model_path="models/yolo11n.pt",
#     confidence_threshold=0.4
# )

# result = get_prediction(
#     "demo_data/small-vehicles1.jpeg",
#     detection_model
# )

# result = get_sliced_prediction(
#     "demo_data/small-vehicles1.jpeg",
#     detection_model,
#     slice_height=200,
#     slice_width=200,
#     overlap_height_ratio=0.1,
#     overlap_width_ratio=0.1
# )

# result.export_visuals(export_dir="demo_data/output")
# print(f"탐지 수 : {len(result.object_prediction_list)}")
# 작은 차량 이미지 (멀리서 찍은 도로)
# download_from_url(
#     "https://raw.githubusercontent.com/obss/sahi/main/demo/demo_data/small-vehicles1.jpeg",
#     "demo_data/small-vehicles1.jpeg",
# )

# # 항공 촬영 지형 이미지
# download_from_url(
#     "https://raw.githubusercontent.com/obss/sahi/main/demo/demo_data/terrain2.png",
#     "demo_data/terrain2.png",
# )
# from ultralytics import YOLO
# import cv2

# model = YOLO("yolo11n-cls.pt")

# results = model("sample.jpg")

# result_image = results[0].plot()

# output_image_path = "output_classified.jpg"
# cv2.imwrite(output_image_path, result_image)
# print(f"예측 결과 이미지가 잘 저장 되었습니다. {output_image_path}")

# from ultralytics import YOLO
# import cv2

# model = YOLO("yolo11n.pt")

# results = model("sample.jpg")

# result_image = results[0].plot()

# output_image_path = "output_detected.jpg"
# cv2.imwrite(output_image_path, result_image)
# print(f"예측 결과 이미지가 잘 저장 되었습니다. {output_image_path}")

# from ultralytics import YOLO
# import cv2

# model = YOLO("yolo11n-pose.pt")

# results = model("sample_pose.jpg")

# result_image = results[0].plot()

# output_image_path = "output_pose.jpg"
# cv2.imwrite(output_image_path, result_image)
# print(f"예측 결과 이미지가 잘 저장 되었습니다. {output_image_path}")

from ultralytics import YOLO
import cv2

model = YOLO("yolo11n-seg.pt")

results = model("sample.jpg")

result_image = results[0].plot()

output_image_path = "output_seg.jpg"
cv2.imwrite(output_image_path, result_image)
print(f"예측 결과 이미지가 잘 저장 되었습니다. {output_image_path}")
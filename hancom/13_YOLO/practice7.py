from ultralytics import solutions

inf = solutions.Inference(model="models/yolo11n.pt")
inf.inference()

import gradio as gr
from deep_translator import GoogleTranslator
from ultralytics import YOLO

model = YOLO("models/yolov8n.pt")

def det_image(image):
    results = model.predict(image)
    annotated_frame = results[0].plot()
    return annotated_frame

gr.Interface(
    fn=det_image,
    inputs=gr.Image(type="numpy"),
    outputs=gr.Image()
).launch()

# def greet(name):
#     return f"Hello {name}!"

# def trans(text):
#     translated_text = GoogleTranslator(source='en', target='ko').translate(text)
#     return translated_text

# gr.Interface(fn=trans, inputs="text", outputs="text").launch()
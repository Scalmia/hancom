import streamlit as st
from ultralytics import YOLO
import cv2
import pandas as pd
import plotly.express as px
import time

# st.set_page_config(layout="wide")
# st.title("Practice")
col1, col2 = st.columns(2)
with col1 :
    frame_placeholder = st.empty()

with col2 :
    chart_placeholder = st.empty()

cap = cv2.VideoCapture("http://210.99.70.120:1935/live/cctv009.stream/playlist.m3u8")

@st.cache_resource
def load_model():
    return YOLO("models/yolov8n.pt")

model = load_model()

while cap.isOpened():
    success, frame = cap.read()
    if not success:
        print("접어라")
        st.warning("카메라 연결 실패")
        break

    results = model(frame)
    annotated_frame = results[0].plot()

    labels = [model.names[int(cls)] for cls in results[0].boxes.cls]

    if labels :
        df_count = pd.DataFrame({"Object": labels})
        df_count = df_count.value_counts().reset_index(name='Count')

        fig = px.bar(
            df_count,
            x='Object',
            y='Count',
            title='Object Detection Count',
            color='Object',
            text='Count'
        )
    else :
        fig = px.bar(
            x=[],
            y=[],
            title='Object Detection Count',
            color_discrete_sequence=['#636EFA']
        )


    frame_placeholder.image(annotated_frame, channels="BGR")
    chart_placeholder.plotly_chart(fig, use_container_width=True, key=f"chart_{time.time()}")

    # if cv2.waitKey(1) & 0xFF == ord('q'):
    #     print("이기고자라")
    #     break
cap.release()
cv2.destroyAllWindows()


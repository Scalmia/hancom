from datasets import load_dataset
from PIL import Image
import os

target_classes = {"happy": "Happy", "sad": "Sad", "neutral": "Normal"}
images_per_class = 100
split_ratio = {"train": 70, "val": 15, "test": 15}

base_dir = "images/dataset"

print("데이터셋 다운로드 중...")
ds = load_dataset("abhilash88/fer2013-enhanced", split="train")

for emotion_key, folder_name in target_classes.items():
    filtered = ds.filter(lambda row: row["emotion_name"] == emotion_key)
    filtered = filtered.select(range(images_per_class))

    start = 0
    for split_name, count in split_ratio.items():
        subset = filtered.select(range(start, start + count))
        start += count

        save_dir = os.path.join(base_dir, split_name, folder_name)
        os.makedirs(save_dir, exist_ok=True)

        for i, row in enumerate(subset):
            pixels = row["image"]
            img = Image.new("L", (48, 48))
            img.putdata([p for row_px in pixels for p in row_px])
            img.save(os.path.join(save_dir, f"{folder_name.lower()}_{i:03d}.jpg"))

        print(f"{folder_name}/{split_name}: {count}장 저장 완료")

print("데이터셋 준비 완료.")
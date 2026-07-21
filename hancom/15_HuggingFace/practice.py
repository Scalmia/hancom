from huggingface_hub import InferenceClient
import dotenv
import os

dotenv.load_dotenv()
HF_TOKEN = os.getenv("HF_TOKEN")

client = InferenceClient(api_key=HF_TOKEN, provider="auto")

answer = input("이미지를 묘사해주세요 : ")

image = client.text_to_image(
    answer,
    model="black-forest-labs/FLUX.1-schnell",
)

image.save("output.jpg")

#---
# answer = input("질문을 입력하세요: ")

# completion = client.chat.completions.create(
#     model="deepseek-ai/DeepSeek-V4-Flash:novita",
#     messages=[{"role": "user", "content": answer}],
# )
# print(completion.choices[0].message)
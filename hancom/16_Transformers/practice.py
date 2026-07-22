# from sentence_transformers import SentenceTransformer, util
from transformers import pipeline
from deep_translator import GoogleTranslator

def trans(sentence):
    translated = GoogleTranslator(source='en', target='ko').translate(sentence)
    return translated

summarizer = pipeline("summarization", model="t5-small")

text = """
The James Webb Space Telescope, launched in December 2021, has fundamentally changed how astronomers study the early universe. Unlike its predecessor, the Hubble Space Telescope, Webb observes primarily in infrared light, allowing it to see through cosmic dust clouds and detect light from galaxies that formed just a few hundred million years after the Big Bang. Its enormous 6.5-meter primary mirror, made of eighteen hexagonal gold-coated beryllium segments, gives it far greater light-gathering power than any previous space telescope. Positioned at the second Lagrange point, nearly 1.5 million kilometers from Earth, Webb operates in extreme cold to keep its instruments sensitive enough to detect faint infrared signals. Since becoming operational, it has captured detailed images of distant exoplanet atmospheres, star-forming regions, and galaxies far older than scientists previously believed possible, forcing many researchers to reconsider existing models of how galaxies form.
"""

summary = summarizer(text)
sum_text = summary[0]['summary_text']
print(f"Summary: {sum_text}")

translated_summary = trans(sum_text)
print(f"Translated Summary: {translated_summary}")

#---
# summarizer = pipeline("summarization", model="t5-small")
# text = """
# The James Webb Space Telescope, launched in December 2021, has fundamentally changed how astronomers study the early universe. Unlike its predecessor, the Hubble Space Telescope, Webb observes primarily in infrared light, allowing it to see through cosmic dust clouds and detect light from galaxies that formed just a few hundred million years after the Big Bang. Its enormous 6.5-meter primary mirror, made of eighteen hexagonal gold-coated beryllium segments, gives it far greater light-gathering power than any previous space telescope. Positioned at the second Lagrange point, nearly 1.5 million kilometers from Earth, Webb operates in extreme cold to keep its instruments sensitive enough to detect faint infrared signals. Since becoming operational, it has captured detailed images of distant exoplanet atmospheres, star-forming regions, and galaxies far older than scientists previously believed possible, forcing many researchers to reconsider existing models of how galaxies form.
# """
# summary = summarizer(text, max_length=130, min_length=30, do_sample=False)

# sum_text = summary[0]['summary_text']
# print(f"Summary: {sum_text}")

#---
# generator = pipeline("text-generation", model="gpt2")

# answer = input("Ask a question: ")
# result = generator(
#     answer, max_new_tokens=100,
#     num_return_sequences=1,
#     do_sample=True,
#     temperature=0.8,
#     repetition_penalty=1.2)

# print(result[0]['generated_text'])

#---
# classifier = pipeline("sentiment-analysis")

# text = "The food was amazing, but the service was terrible."ㅆ
# result = classifier(text)

# print(f"Sentiment: {result[0]['label']}, Score: {result[0]['score']:.4f}")

#---
# model = SentenceTransformer('all-MiniLM-L6-v2')
# sentences = ["The dog runs on the street.", "A dog is running down the beach."]

# emb1 = model.encode(sentences[0], convert_to_tensor=True)
# emb2 = model.encode(sentences[1], convert_to_tensor=True)
# similarity = util.pytorch_cos_sim(emb1, emb2)

# print(f"Similarity score: {similarity.item():.4f}")
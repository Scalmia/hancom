from PIL import Image, ImageEnhance, ImageFilter, ImageDraw, ImageOps
import numpy as np
import os

save_dir = "./output"
os.makedirs(save_dir, exist_ok=True)

img = Image.new("RGB", (300, 200), color=(240, 240, 240))
draw = ImageDraw.Draw(img)
draw.rectangle([20, 20, 130, 100], outline=(200, 60, 60), fill=(230, 120, 120), width=3)
draw.ellipse([150, 20, 260, 100], outline=(60, 100, 200), fill=(120, 160, 230), width=3)
draw.line([20, 150, 280, 150], fill=(60, 160, 60), width=4)
draw.text((20, 160), "PIL practice", fill=(20, 20, 20))
img.save(f"{save_dir}/01_base.png")

print("=== 기본 정보 ===")
print("크기(size):", img.size)
print("가로(width):", img.width, "세로(height):", img.height)
print("모드(mode):", img.mode)
print("포맷(format):", img.format)

print("=== 기본 변형 ===")
rotated = img.rotate(45)
rotated.save(f"{save_dir}/02_rotated.png")

resized = img.resize((150, 100))
resized.save(f"{save_dir}/03_resized.png")

cropped = img.crop((0, 0, 150, 100))
cropped.save(f"{save_dir}/04_cropped.png")

thumb = img.copy() # 원본을 바꿔버림.
thumb.thumbnail((80, 80))
thumb.save(f"{save_dir}/05_thumbnail.png")
print("thumbnail 결과 크기:", thumb.size)

print("=== ImageEnhance (밝기/대비/채도/선명도) ===")
bright = ImageEnhance.Brightness(img).enhance(1.6)
bright.save(f"{save_dir}/06_bright.png")

contrast = ImageEnhance.Contrast(img).enhance(1.8)
contrast.save(f"{save_dir}/07_contrast.png")

color = ImageEnhance.Color(img).enhance(0.2)
color.save(f"{save_dir}/08_color.png")

sharp = ImageEnhance.Sharpness(img).enhance(3.0)
sharp.save(f"{save_dir}/09_sharp.png")

print("=== ImageFilter (필터) ===")
blurred = img.filter(ImageFilter.GaussianBlur(radius=4))
blurred.save(f"{save_dir}/10_blurred.png")

contour = img.filter(ImageFilter.CONTOUR)
contour.save(f"{save_dir}/11_contour.png")

edge = img.filter(ImageFilter.EDGE_ENHANCE)
edge.save(f"{save_dir}/12_edge_enhance.png")

print("=== ImageOps ===")
mirrored = ImageOps.mirror(img)
mirrored.save(f"{save_dir}/13_mirrored.png")

flipped = ImageOps.flip(img)
flipped.save(f"{save_dir}/14_flipped.png")

grayscale = ImageOps.grayscale(img)
grayscale.save(f"{save_dir}/15_grayscale.png")

inverted = ImageOps.invert(img.convert("RGB"))
inverted.save(f"{save_dir}/16_inverted.png")

print("=== 픽셀 단위 접근 ===")
pixel = img.getpixel((25, 25))
print("(25,25) 픽셀 색상:", pixel)

img_copy = img.copy()
img_copy.putpixel((0, 0), (255, 0, 0))
print("(0,0) 픽셀을 빨간색으로 변경 후:", img_copy.getpixel((0, 0)))

print("=== numpy 배열 변환 ===")
arr = np.array(img)
print("numpy 배열 shape:", arr.shape)

back_to_img = Image.fromarray(arr)
back_to_img.save(f"{save_dir}/17_from_array.png")

print(f"\n모든 결과 이미지가 {save_dir} 폴더에 저장되었습니다.")
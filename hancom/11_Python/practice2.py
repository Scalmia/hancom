with open("sample.txt", "w") as f:
    f.write("Hello, file!")

print("with 블록 끝난 직후 f.closed:", f.closed)

with open("sample.txt", "r") as f2:
    content = f2.read()
    print("파일 내용:", content)

print("두 번째 with 블록도 끝난 직후 f2.closed:", f2.closed)


square = lambda x: x ** 2
print("square(5) =", square(5))

students = [{"name": "Alice", "age": 25}, {"name": "Bob", "age": 20}]
sorted_students = sorted(students, key=lambda s: s["age"])
print("나이순 정렬:", sorted_students)

numbers = [1, 2, 3, 4, 5]
doubled = list(map(lambda x: x * 2, numbers))
print("2배:", doubled)

evens = list(filter(lambda x: x % 2 == 0, numbers))
print("짝수만:", evens)
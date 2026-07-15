import pyfiglet
from termcolor import colored


# print(pyfiglet.figlet_format("Hello"))
# print(pyfiglet.figlet_format("Hi", font="slant"))

# print(colored("Hello, World!", "red"))
# print(colored("Success!", "green", attrs=["bold"]))
# print(colored("Warning", "yellow", "on_red"))

art = pyfiglet.figlet_format("Cool", font="slant")
print(colored(art, "cyan"))

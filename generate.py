import json
from jinja2 import Environment, FileSystemLoader
import os

env = Environment(loader=FileSystemLoader("templates"))
template = env.get_template("main.html")

for lang in ["en", "ko"]:
    with open(f"content/{lang}.json", encoding="utf-8") as f:
        data = json.load(f)

    output = template.render(**data)

    with open(f"output/{lang}.html", "w", encoding="utf-8") as f:
        f.write(output)

    print(f"{lang}.html 생성 완료!")

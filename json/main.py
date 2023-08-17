import requests
import json

url = "https://mapi.mobilelegends.com/hero/list?language=en"

response = requests.get(url)

if response.status_code == 200:
    data = response.json()
    heroes = data.get("data", [])

    modified_heroes = []

    for hero in heroes:
        modified_hero = {
            "name": hero.get("name", ""),
            "heroid": hero.get("heroid", ""),
            "imgURL": hero.get("key", ""),
            "historia": ""  # Agrega aquí la historia correspondiente para cada héroe
        }

        modified_heroes.append(modified_hero)

    with open("heroes.json", "w") as json_file:
        json.dump(modified_heroes, json_file, indent=4)

    print("Archivo JSON creado exitosamente.")
else:
    print("Error en la solicitud:", response.status_code)

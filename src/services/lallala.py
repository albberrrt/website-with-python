import requests

nome = "Albert"

url = "http://localhost:3000/home"
data = { 'name': nome }

response = requests.post(url, json=data)

print(response.text)
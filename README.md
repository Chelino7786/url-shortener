# URL Shortener

Acortador de URLs construido con Node.js y Express. Genera códigos cortos para URLs largas, redirige automáticamente al visitante y lleva un contador de visitas.

## Tecnologías
- Node.js
- Express

## Instalación

1. Clona el repositorio
   git clone https://github.com/Chelino7786/url-shortener.git

2. Instala las dependencias
   npm install

3. Corre el servidor
   node server.js

El servidor corre en http://localhost:3000

## Endpoints

| Método | URL | Descripción |
|--------|-----|-------------|
| POST | /shorten | Recibe una URL larga y devuelve un código corto |
| GET | /urls | Muestra todas las URLs guardadas |
| GET /:code | Redirige a la URL original |

## Ejemplo de uso

Acortar una URL:
POST /shorten
Content-Type: application/json

{
  "url": "https://www.google.com/maps/place/guatemala"
}

Respuesta:
{
  "code": "abc123",
  "short": "http://localhost:3000/abc123",
  "original": "https://www.google.com/maps/place/guatemala"
}

Visitar la URL corta:
GET http://localhost:3000/abc123
El servidor redirige automáticamente a la URL original y suma una visita al contador.
```

Guarda con `Ctrl+S` y luego corre estos comandos en la terminal:
```
git add README.md
```
```
git commit -m "docs: add README"
```
```
git push

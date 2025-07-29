# 📝 NoteCLI API

A simple Notes REST API built with `TypeScript`, `Express.js`, and `Node.js`.

---

## 🚀 Features

- Create, read, update, and delete notes (CRUD)
- Built with TypeScript and Express
- Organized route/controller structure
- JSON-based API

---

## 📦 Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

---

## 📁 API Structure

```
src/
├── controllers/
│   └── notes.controller.ts
├── services/
│   └── notes.service.ts
├── routes/
│   └── notes.routes.ts
├── types/
│   └── note.ts
├── data/
│   └── notes.json
├── app.ts
├── index.ts
```

---

## 📄 API Endpoints

Base URL: `http://localhost:3000/api`

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/notes`     | Get all notes     |
| GET    | `/notes/:id` | Get a single note |
| POST   | `/notes`     | Create a new note |
| PUT    | `/notes/:id` | Update a note     |
| DELETE | `/notes/:id` | Delete a note     |

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/deepsoumya617/NoteCLI-API.git

# Navigate to the folder
cd notes-api

# Install dependencies
pnpm install

# Run the server
# In development
pnpm run dev

# Or compile and run
pnpm run build
pnpm start
```

## 📬 Sample Request (CURL)

```bash
curl -X POST http://localhost:3000/api/notes \
  -H "Content-Type: application/json" \
  -d '{"title": "My Note", "content": "This is a test note."}'
```

## 🧪 Sample Notes

```bash
{
  "title": "First Note",
  "content": "This is the content of the first note"
}
```

---

## 🤝 Contributing

Pull requests are welcome!  
If you find a bug or want to add a new feature, feel free to open an issue or submit a PR.

---

## 🌟 Acknowledgements

If you find this useful, consider giving it a ⭐ on [GitHub](https://github.com/deepsoumya617/NoteCLI-API)!

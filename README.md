
#  🚀 MCP Server Tester

A lightweight and efficient web tool to **test MCP server connectivity** and validate installation codes. Built using **Node.js**, **Express**, and **EJS**, this tool helps developers and system admins verify if their MCP Server setup is functional.

[🔗 View on GitHub](https://github.com/nandkumar1000/MCP-Server-Tester)

---

##  📖 Overview

**MCP Server Tester** allows you to enter an MCP server installation code and check if the server is responding correctly. It’s perfect for quick diagnostics and debugging MCP server deployments.

---

##  🧠 About the Project

This project was created to solve a simple problem: how to quickly verify whether an MCP server is working with a given installation code. Instead of using Postman or CLI tools, you now have a dedicated web interface to test everything with ease.

---

## ⚙️ Tech Stack

| Tech         | Description                      |
|--------------|----------------------------------|
| 🟢 Node.js    | JavaScript runtime environment   |
| ⚡ Express.js | Backend web framework            |
| 📄 EJS        | Templating engine for HTML       |
| 🌐 Axios      | For making HTTP requests         |
| 🎨 CSS        | Custom styling for UI/UX         |

---

##  💡 Use Cases

- ✅ Test MCP server installation codes
- 🔁 Validate API response from an MCP server
- ⚙️ Debug server setup during development
- 🔍 Ensure MCP server connectivity before production

---

## ✨ Features

- 🔗 Simple form to enter and test installation codes
- ✅ Clear success/failure messages with formatted responses
- 🎯 Fully responsive layout for desktop and mobile
- 💬 Semantic and accessible UI with clean code structure
- 📁 Clean MVC architecture (Controllers, Routes, Views)

---

## 🚀 How to Use

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/nandkumar1000/MCP-Server-Tester.git
cd MCP-Server-Tester
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the Server

- For development (auto-reload with nodemon):

```bash
npm run dev
```

- For production:

```bash
npm start
```

### 4️⃣ Access the App

Open your browser and go to:

```
http://localhost:5000
```

---

## 📁 Project Structure

```
MCP-Server-Tester/
│
├── controllers/           # Logic to handle server testing
│   └── testController.js
│
├── routes/                # Express routes
│   └── index.js
│
├── views/                 # EJS templates
│   ├── index.ejs
│   ├── result.ejs
│   └── partials/
│       ├── header.ejs
│       └── footer.ejs
│
├── public/                # Static CSS files
│   └── css/
│       └── styles.css
│
├── server.js              # App entry point
├── package.json           # Project metadata and scripts
└── .env                   #  Environment variables
```

---

## 🧑‍💻 About the Author

Hi, I’m **Nand Kumar Sahu** 👋  
A passionate **Full Stack Web Developer** with a love for clean UI and scalable backend systems. I enjoy building tools that solve real-world problems.

- 💼 [LinkedIn](https://www.linkedin.com/in/nandkumarsahu1234/)
- 💻 [GitHub](https://github.com/nandkumar1000)
- 📫 Email: `nandkumarsahu.dev@gmail.com`

---

## 📌 Conclusion

**MCP Server Tester** is a no-fuss utility tool that simplifies the process of validating your MCP server. Whether you're a developer or a tester, this tool saves time and makes testing more intuitive.

---

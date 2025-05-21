# 📚 QuoteSpace

**QuoteSpace** is a React-based web app for viewing, liking, submitting, and searching inspirational quotes. Users can interact with each quote and explore quotes by various authors using an intuitive and dynamic interface.

---

## 🚀 Live Demo

_Coming Soon..._

---

## 🧠 Features

- 🔁 Toggle between compact and expanded quote views
- ❤️ Like and increment quote likes
- 🧑 Search quotes by author in real-time
- 📝 Submit new quotes with live input handling
- 📱 Responsive and styled with custom CSS
- 🧭 Client-side routing with React Router
- 🧩 Modular, component-based architecture

---

## 🛠️ Built With

- **React**
- **React Router**
- **JavaScript (ES6+)**
- **CSS**
- **JSON Server** (development API)

---

## 📂 Project Structure

quotespace/
├── public/
├── src/
│ ├── components/
│ │ ├── AppRoutes.jsx
│ │ ├── QuotCard.jsx
│ │ ├── QuotList.jsx
│ │ └── NavBar.jsx
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── Search.jsx
│ │ ├── Form.jsx
│ │ └── ErrorPage.jsx
│ ├── App.css
│ ├── index.css
│ └── index.js
├── db.json (backend quotes data - if using json-server)
├── navBar.css
└── README.md




---

## 🖼️ Screenshots

_Coming soon_

---

## 🧪 Getting Started

Follow these instructions to get a local copy up and running.

### Prerequisites

- Node.js and npm
- `json-server` (for backend simulation)

### Installation

1. Clone the repository:

```
git clone https://github.com/your-username/quotespace.git
cd quotespace
Install dependencies:



npm install
Start the backend server (you can use json-server for mock data):



npx json-server --watch db.json --port 3001
Start the frontend:



npm start
Open http://localhost:3000 to view it in your browser.

🔎 Routes
Route	Description
/	Home page displaying quotes
/search	Search quotes by author
/form	Submit a new quote
*	Error page (Page Not Found)

📬 Components Summary
Component	Purpose
QuotCard	Displays individual quote with toggle & like
QuotList	Maps all quotes into QuotCard components
Search	Filters and displays quotes by author
Form	Adds new quotes via form
Home	Main quote display page
NavBar	Navigation links using react-router-dom
ErrorPage	Renders on unmatched routes

🔧 Future Enhancements
🔐 Add user authentication for personalized quote lists

💬 Add categories or tags for quotes

🎨 Allow users to select a theme (dark/light)

🌍 Add internationalization support

🗳 Sort quotes by most liked

👩‍💻 Author
Layla Esna
🧑‍💻 Developer & UI/UX Enthusiast
📧 [Your Email or Portfolio Link Here]

📄 License
This project is open source and available under the MIT License.

🙌 Acknowledgements
React

React Router

JSON Server

Font styles & creative class names were crafted for a dynamic feel






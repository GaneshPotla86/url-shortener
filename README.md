# 🔗 URL Shortener (Node.js + Express + MongoDB)

A simple URL Shortener application built using **Node.js, Express.js, MongoDB, and NanoID**.
This project allows users to convert long URLs into short URLs and track analytics such as total clicks and visit timestamps.

---

## 🚀 Features

* Generate short URLs from long URLs
* Redirect short URL to original URL
* Track number of clicks
* Store visit history with timestamps
* REST API based architecture
* MongoDB database integration
* Unique short IDs generated using NanoID

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* NanoID

---

## 📂 Project Structure

```
url-shortener/
│
├── controllers/
│   └── url.js
│
├── models/
│   └── url.js
│
├── routes/
│   └── url.js
│
├── connection.js
├── index.js
└── package.json
```

---

## ⚙️ Installation

Clone the repository:

```
git clone https://github.com/your-username/url-shortener.git
```

Navigate to project folder:

```
cd url-shortener
```

Install dependencies:

```
npm install
```

Start the server:

```
npm start
```

Server runs on:

```
http://localhost:8001
```

---

## 📌 API Endpoints

### Create Short URL

POST `/url`

Request Body:

```
{
  "url": "https://example.com"
}
```

Response:

```
{
  "id": "shortId"
}
```

---

### Redirect to Original URL

GET `/:shortId`

Automatically redirects to original URL.

Example:

```
http://localhost:8001/abcd1234
```

---

### Get Analytics Data

GET `/url/analytics/:shortId`

Response:

```
{
  "totalClicks": 5,
  "analytics": [
    { "timestamp": 1710000000000 }
  ]
}
```

---

## 📊 Database Schema

Each shortened URL stores:

* shortId
* redirectURL
* visitHistory (timestamps)
* createdAt
* updatedAt

---

## 🎯 Future Improvements

* Custom short URLs support
* User authentication
* Frontend UI integration
* Deployment support (Render / Railway / Vercel)
* Expiration time for URLs

---

## 👨‍💻 Author

Ganesh Potla

Built as part of Node.js backend learning project 🚀

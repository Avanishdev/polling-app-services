# Backend API Documentation

## 📌 Project Overview

This backend is developed using **Node.js, Express, and MongoDB (via Mongoose)** to handle API requests efficiently. It provides RESTful endpoints for managing polls and votes.

## 🚀 Installation & Setup

### 1️⃣ **Clone the Repository**

```sh
git clone https://github.com/your-username/polling-app-services.git
cd polling-app-services
```

### 2️⃣ **Install Dependencies**

```sh
npm install
```

### 3️⃣ **Environment Variables**

Create a `.env` file in the root directory with:

```env
PORT=8080
MONGO_URI=<your-mongo-url>
FRONTEND_URL=<your-frontend-url>
```

### 4️⃣ **Start the Server**

```sh
npm start
```

The API will run on `http://localhost:8080/`

---

# Frontend Documentation

## 📌 Project Overview

This frontend is developed using **React.js, Vite, and Tailwind CSS (via Socket.io)** to design efficiently. It provides responsive UI for managing polls and votes.

## 🚀 Installation & Setup

### 1️⃣ **Clone the Repository**

```sh
git clone https://github.com/Avanishdev/polling-app-frontend.git
cd polling-app-frontend
```

### **Git checkout branch master**

```sh
git checkout origin master
```

```sh
git pull origin master
```

### 2️⃣ **Install Dependencies**

```sh
npm install
```

### 3️⃣ **Environment Variables**

Create a `.env` file in the root directory with:

```env
VITE_API_URL=<your-backend-url>
```

### 4️⃣ **Start the Server**

```sh
npm run dev
```

The API will run on `http://localhost:5173/`

---

## 📌 API Endpoints

### 🟢 **Poll Management**

#### ** Create a Poll** (Authenticated)

```http
POST /api/v1/polls
```

**Request Body:**

```json
{
  "question": "What's your favorite programming language?",
  "options": [
    { "text": "JavaScript", "votes": 0 },
    { "text": "Python", "votes": 0 },
    { "text": "Java", "votes": 0 }
  ]
}
```

**Response:**

```json
{
  "question": "What's your favorite programming language?",
  "options": [
    {
      "text": "JavaScript",
      "votes": 0,
      "_id": "67b63c90fbe007498393f5bd"
    },
    {
      "text": "Python",
      "votes": 0,
      "_id": "67b63c90fbe007498393f5be"
    },
    {
      "text": "Java",
      "votes": 0,
      "_id": "67b63c90fbe007498393f5bf"
    }
  ],
  "_id": "67b63c90fbe007498393f5bc",
  "createdAt": "2025-02-19T20:18:24.537Z",
  "__v": 0
}
```

#### ** Get All Polls**

```http
GET /api/v1/polls
```

**Response:**

```json
[
  {
    "_id": "67b3a649a4adb3d022d8264e",
    "question": "What is your favorite programming language?",
    "options": [
      {
        "text": "JavaScript",
        "votes": 0,
        "_id": "67b3a649a4adb3d022d8264f"
      },
      {
        "text": "Python",
        "votes": 0,
        "_id": "67b3a649a4adb3d022d82650"
      },
      {
        "text": "Java",
        "votes": 0,
        "_id": "67b3a649a4adb3d022d82651"
      },
      {
        "text": "C++",
        "votes": 0,
        "_id": "67b3a649a4adb3d022d82652"
      }
    ],
    "createdAt": "2025-02-17T21:12:41.682Z",
    "__v": 0
  },
  {
    "_id": "67b3a67ba4adb3d022d82673",
    "question": "What is your favorite sport?",
    "options": [
      {
        "text": "Football",
        "votes": 0,
        "_id": "67b3a67ba4adb3d022d82674"
      },
      {
        "text": "Basketball",
        "votes": 0,
        "_id": "67b3a67ba4adb3d022d82675"
      },
      {
        "text": "Cricket",
        "votes": 0,
        "_id": "67b3a67ba4adb3d022d82676"
      },
      {
        "text": "Tennis",
        "votes": 0,
        "_id": "67b3a67ba4adb3d022d82677"
      }
    ],
    "createdAt": "2025-02-17T21:13:31.706Z",
    "__v": 0
  },
  {
    "_id": "67b3a6a9a4adb3d022d826a8",
    "question": "What is your favorite movie genre?",
    "options": [
      {
        "text": "Action",
        "votes": 0,
        "_id": "67b3a6a9a4adb3d022d826a9"
      },
      {
        "text": "Comedy",
        "votes": 0,
        "_id": "67b3a6a9a4adb3d022d826aa"
      },
      {
        "text": "Drama",
        "votes": 0,
        "_id": "67b3a6a9a4adb3d022d826ab"
      },
      {
        "text": "Horror",
        "votes": 0,
        "_id": "67b3a6a9a4adb3d022d826ac"
      }
    ],
    "createdAt": "2025-02-17T21:14:17.316Z",
    "__v": 0
  },
  {
    "_id": "67b3a6d5a4adb3d022d826ed",
    "question": "Which programming paradigm do you prefer?",
    "options": [
      {
        "text": "Object-Oriented Programming",
        "votes": 0,
        "_id": "67b3a6d5a4adb3d022d826ee"
      },
      {
        "text": "Functional Programming",
        "votes": 0,
        "_id": "67b3a6d5a4adb3d022d826ef"
      },
      {
        "text": "Procedural Programming",
        "votes": 0,
        "_id": "67b3a6d5a4adb3d022d826f0"
      },
      {
        "text": "Logic Programming",
        "votes": 0,
        "_id": "67b3a6d5a4adb3d022d826f1"
      }
    ],
    "createdAt": "2025-02-17T21:15:01.457Z",
    "__v": 0
  },
  {
    "_id": "67b6332bdc9776a607d2d8eb",
    "question": "What is your favourite app?",
    "options": [
      {
        "text": "Instagram",
        "votes": 1,
        "_id": "67b6332bdc9776a607d2d8ec"
      },
      {
        "text": "LinkedIn",
        "votes": 1,
        "_id": "67b6332bdc9776a607d2d8ed"
      },
      {
        "text": "Twitter",
        "votes": 2,
        "_id": "67b6332bdc9776a607d2d8ee"
      }
    ],
    "createdAt": "2025-02-19T19:38:19.427Z",
    "__v": 0
  },
  {
    "_id": "67b63c90fbe007498393f5bc",
    "question": "What's your favorite programming language?",
    "options": [
      {
        "text": "JavaScript",
        "votes": 0,
        "_id": "67b63c90fbe007498393f5bd"
      },
      {
        "text": "Python",
        "votes": 0,
        "_id": "67b63c90fbe007498393f5be"
      },
      {
        "text": "Java",
        "votes": 0,
        "_id": "67b63c90fbe007498393f5bf"
      }
    ],
    "createdAt": "2025-02-19T20:18:24.537Z",
    "__v": 0
  }
]
```

#### ** Get a Poll By Id**

```http
GET /api/v1/polls/:id
```

**Response:**

```json
[
  {
    "_id": "67b3a649a4adb3d022d8264e",
    "question": "What is your favorite programming language?",
    "options": [
      {
        "text": "JavaScript",
        "votes": 0,
        "_id": "67b3a649a4adb3d022d8264f"
      },
      {
        "text": "Python",
        "votes": 0,
        "_id": "67b3a649a4adb3d022d82650"
      },
      {
        "text": "Java",
        "votes": 0,
        "_id": "67b3a649a4adb3d022d82651"
      },
      {
        "text": "C++",
        "votes": 0,
        "_id": "67b3a649a4adb3d022d82652"
      }
    ],
    "createdAt": "2025-02-17T21:12:41.682Z",
    "__v": 0
  },
  {
    "_id": "67b3a67ba4adb3d022d82673",
    "question": "What is your favorite sport?",
    "options": [
      {
        "text": "Football",
        "votes": 0,
        "_id": "67b3a67ba4adb3d022d82674"
      },
      {
        "text": "Basketball",
        "votes": 0,
        "_id": "67b3a67ba4adb3d022d82675"
      },
      {
        "text": "Cricket",
        "votes": 0,
        "_id": "67b3a67ba4adb3d022d82676"
      },
      {
        "text": "Tennis",
        "votes": 0,
        "_id": "67b3a67ba4adb3d022d82677"
      }
    ],
    "createdAt": "2025-02-17T21:13:31.706Z",
    "__v": 0
  },
  {
    "_id": "67b3a6a9a4adb3d022d826a8",
    "question": "What is your favorite movie genre?",
    "options": [
      {
        "text": "Action",
        "votes": 0,
        "_id": "67b3a6a9a4adb3d022d826a9"
      },
      {
        "text": "Comedy",
        "votes": 0,
        "_id": "67b3a6a9a4adb3d022d826aa"
      },
      {
        "text": "Drama",
        "votes": 0,
        "_id": "67b3a6a9a4adb3d022d826ab"
      },
      {
        "text": "Horror",
        "votes": 0,
        "_id": "67b3a6a9a4adb3d022d826ac"
      }
    ],
    "createdAt": "2025-02-17T21:14:17.316Z",
    "__v": 0
  },
  {
    "_id": "67b3a6d5a4adb3d022d826ed",
    "question": "Which programming paradigm do you prefer?",
    "options": [
      {
        "text": "Object-Oriented Programming",
        "votes": 0,
        "_id": "67b3a6d5a4adb3d022d826ee"
      },
      {
        "text": "Functional Programming",
        "votes": 0,
        "_id": "67b3a6d5a4adb3d022d826ef"
      },
      {
        "text": "Procedural Programming",
        "votes": 0,
        "_id": "67b3a6d5a4adb3d022d826f0"
      },
      {
        "text": "Logic Programming",
        "votes": 0,
        "_id": "67b3a6d5a4adb3d022d826f1"
      }
    ],
    "createdAt": "2025-02-17T21:15:01.457Z",
    "__v": 0
  },
  {
    "_id": "67b6332bdc9776a607d2d8eb",
    "question": "What is your favourite app?",
    "options": [
      {
        "text": "Instagram",
        "votes": 1,
        "_id": "67b6332bdc9776a607d2d8ec"
      },
      {
        "text": "LinkedIn",
        "votes": 1,
        "_id": "67b6332bdc9776a607d2d8ed"
      },
      {
        "text": "Twitter",
        "votes": 2,
        "_id": "67b6332bdc9776a607d2d8ee"
      }
    ],
    "createdAt": "2025-02-19T19:38:19.427Z",
    "__v": 0
  },
  {
    "_id": "67b63c90fbe007498393f5bc",
    "question": "What's your favorite programming language?",
    "options": [
      {
        "text": "JavaScript",
        "votes": 0,
        "_id": "67b63c90fbe007498393f5bd"
      },
      {
        "text": "Python",
        "votes": 0,
        "_id": "67b63c90fbe007498393f5be"
      },
      {
        "text": "Java",
        "votes": 0,
        "_id": "67b63c90fbe007498393f5bf"
      }
    ],
    "createdAt": "2025-02-19T20:18:24.537Z",
    "__v": 0
  }
]
```

---

### 🟢 **Voting**

#### ** Cast a Vote** (Authenticated)

```http
POST /api/v1/polls/:id/vote
```

**Request Body:**

```json
{
  "optionIndex": "1"
}
```

**Response:**

```json
{
  "_id": "67b6332bdc9776a607d2d8eb",
  "question": "What is your favourite app?",
  "options": [
    { "text": "Instagram", "votes": 1, "_id": "67b6332bdc9776a607d2d8ec" },
    { "text": "LinkedIn", "votes": 3, "_id": "67b6332bdc9776a607d2d8ed" },
    { "text": "Twitter", "votes": 2, "_id": "67b6332bdc9776a607d2d8ee" }
  ],
  "createdAt": "2025-02-19T19:38:19.427Z",
  "__v": 0
}
```

#### **6️⃣ Get Poll Results**

```http
GET /api/v1/polls/:id/results
```

**Response:**

```json
{
  "_id": "67b6332bdc9776a607d2d8eb",
  "question": "What is your favourite app?",
  "options": [
    {
      "text": "Instagram",
      "votes": 1,
      "_id": "67b6332bdc9776a607d2d8ec"
    },
    {
      "text": "LinkedIn",
      "votes": 3,
      "_id": "67b6332bdc9776a607d2d8ed"
    },
    {
      "text": "Twitter",
      "votes": 2,
      "_id": "67b6332bdc9776a607d2d8ee"
    }
  ],
  "createdAt": "2025-02-19T19:38:19.427Z",
  "__v": 0
}
```

---

## 🔥 Technologies Used

- **Node.js** (Runtime)
- **Express.js** (Framework)
- **MongoDB** (Database)
- **Mongoose** (ORM)
- **Socket.io** (Real-time updates)

## 🛠️ Running Tests

```sh
npm test
```

## 🌍 Deployment

To deploy the backend on **Vercel**, **Railway**, or **Render**, update the `.env` variables and run:

```sh
git push origin main
```

Deployed link here :- [backend](https://polling-app-services.onrender.com), [frontend](https://polling-app-frontend-d4jrj6y2k-avanishdevs-projects.vercel.app/)

## 🤝 Contributing

Feel free to submit issues or pull requests. Make sure to follow the contribution guidelines.

## 📜 License

This project is licensed under the **MIT License**.

PS:- This project was made within 3 hours deadline itself but due to some issue, i have to make a resubmission, so please do consider it.

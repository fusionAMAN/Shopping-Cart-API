# The Shopping Cart API

> A lightweight RESTful API to manage a user's temporary shopping cart using in-memory storage.
> This project is designed as a backend assignment demonstrating clean architecture, REST principles, and proper error handling.


# Features

- Add items to cart or update quantity
- Retrieve cart items with total price calculation
- Remove a specific item from the cart
- In-memory data storage (no database)
- Proper HTTP status codes & error handling
---

# Tech Stack

- Node.js
- Express.js
- In-memory storage using JavaScript (Map)
---

# Folder Structure

```
Shopping-Cart/
│
├── controllers/
│   └── cart.controller.js
│
├── routes/
│   └── cart.routes.js
│
├── service/
│   └── cart.service.js
│
├── node_modules/
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── Readme.md
```
---

# Getting Started

### 1️⃣ Clone the Repository

```
git clone https://github.com/fusionAMAN/Shopping-Cart-API.git
cd shopping-cart-api
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Start the Server

```
npm start
```

> Server will run at:
> http://localhost:3000

---
# API Endpoints
## Add Item to Cart

### POST /cart/add
- Request Body
```
{
  "itemId": "101",
  "name": "Laptop",
  "price": 50000,
  "quantity": 1
}
```

## Get Cart Items
### GET /cart
- Response:

```
{
  "success": true,
  "data": {
    "items": [
      {
        "itemId": "101",
        "name": "Laptop",
        "price": 50000,
        "quantity": 1
      }
    ],
    "totalPrice": 50000
  }
}

```
## Remove Item from Cart
### DELETE /cart/:itemId
```
DELETE /cart/101
```
---

## Testing Using cURL (Git Bash)

- cURL AddItem
```
curl -X POST http://localhost:3000/cart/add \
-H "Content-Type: application/json" \
-d '{
  "itemId": "101",
  "name": "Laptop",
  "price": 50000,
  "quantity": 1
}'

```
- cURL getItem
```
curl -X GET http://localhost:3000/cart
```

- cURL DeleteItem
```
curl -X DELETE http://localhost:3000/cart/:ItemId
```
![WhatsApp Image 2026-01-03 at 21 09 58](https://github.com/user-attachments/assets/20d418df-e64a-4587-a133-c21d3763b61a)
---


## 🔹Testing Using POSTMAN

- POST /cart/add
```
http://localhost:3000/cart/add
```

- GET /cart
```
http://localhost:3000/cart
```

- DELETE /cart/:ItemID
```
http://localhost:3000/cart/:itemID
```

<p align="center">
  <img src="https://github.com/user-attachments/assets/bdf3fba9-d245-4648-be44-872459433293" width="400" />
  <img src="https://github.com/user-attachments/assets/dc93526d-ae52-41a9-b3b5-30c0b53b549b" width="400" />
  <img src="https://github.com/user-attachments/assets/b512fbb1-dde6-4340-87c5-ebe0fc38c409" width="400" />
</p>

---

## ⚠️ Error Handling

| Scenario       | Status Code | Message               |
| -------------- | ----------- | --------------------- |
| Missing fields | 400         | Bad Request           |
| Item not found | 404         | Item not found        |
| Server error   | 500         | Internal Server Error |

---

## ✅ Submission Checklist
- ✔ RESTful API
- ✔ In-memory storage
- ✔ Proper folder structure
- ✔ Error handling
- ✔ README with test instructions
---

## Status: 🟢 COMPLETE - Ready for Evaluation
## Repository: https://github.com/fusionAMAN/Shopping-Cart-API.git
## Contact: [40guptaaman@gmail.com]

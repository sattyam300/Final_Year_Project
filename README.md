# 🚀 Supply Chain DApp with MongoDB Authentication

This is a full-stack decentralized application built using:

- 🌐 **Frontend**: React + Tailwind CSS  
- 🔐 **Authentication**: Node.js + Express + MongoDB  
- 💻 **Smart Contracts**: Solidity on Ethereum  
- ⚡ **Blockchain Interaction**: Web3.js / Ethers.js  

---

## 📁 Folder Structure

```
📦 root/
├── client/            # React frontend
├── contracts/         # Solidity smart contracts
├── server/            # Node.js backend with MongoDB
├── build/             # Compiled contract artifacts
├── hardhat.config.js  # Hardhat config
└── README.md
```

---

## 🔧 Prerequisites

- Node.js (v14+)
- MongoDB (local or Atlas URI)
- MetaMask wallet (connected to Ganache or other network)
- Hardhat

---

## 📦 Installation Steps

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/supply-chain-dapp.git
cd supply-chain-dapp
```

---

### 2️⃣ Install Dependencies

#### Backend (Express + MongoDB)

```bash
cd server
npm install
```

#### Frontend (React + Tailwind)

```bash
cd ../client
npm install
```

#### Contracts (Hardhat)

```bash
cd ..
npm install
```

---

### 3️⃣ Compile Smart Contracts

```bash
npx hardhat compile
```

---

### 4️⃣ Deploy Contracts (Ganache or Hardhat Local)

Start Ganache or:

```bash
npx hardhat node
```

Deploy:

```bash
npx hardhat run scripts/deploy.js --network localhost
```

---

### 5️⃣ Start Backend Server

Create a `.env` file inside `server/` folder:

```env
MONGO_URI=your_mongodb_uri
PORT=5000
JWT_SECRET=your_secret_key
```

Then run:

```bash
cd server
npm start
```

---

### 6️⃣ Start React Frontend

```bash
cd ../client
npm start
```

---

## 🧪 User Flow

- **Register/Login** via MongoDB authentication
- **Add Product** to blockchain
- **View Products** from smart contract
- **NavBar is shown only when logged in**

---

## 🛠 Tech Stack

| Layer       | Tech Used                |
|-------------|--------------------------|
| Frontend    | React, Tailwind CSS      |
| Backend     | Node.js, Express, MongoDB|
| Blockchain  | Solidity, Hardhat, Web3  |
| Auth        | JWT / Sessions           |

---



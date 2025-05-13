# Decentralized Book Tracker

A **decentralized application (dApp)** built on Ethereum, allowing users to manage and track the books they’ve read. This application leverages **Solidity**, **React**, and **Web3** technologies to provide a secure, transparent, and immutable solution for tracking books.

## 💻 Technologies Used
- **Solidity**: For writing the smart contract on the Ethereum blockchain.
- **React.js**: For building the frontend interface of the application.
- **Ethers.js**: To interact with Ethereum blockchain from the React app.
- **MetaMask**: For connecting to the Ethereum network and managing accounts.
- **Remix IDE**: For writing, compiling, and deploying the smart contract to the Ethereum testnet.

## 📦 Prerequisites

Before running this project, ensure that you have:

- **Node.js** and **npm** installed on your machine.
- **MetaMask** browser extension installed and configured to connect to a testnet (e.g., Goerli, Sepolia).
- A **Remix IDE** account for deploying and interacting with smart contracts.

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Harsimran20/decentralized-book-tracker.git
```

### 2. Install dependencies

Navigate into the project directory and install the required packages:

```bash
cd decentralized-book-tracker
npm install
```

### 3. Start the React App

Start the React app in development mode:

```bash
npm start
```

Your application should now be live at `http://localhost:3000`.

### 4. Connect MetaMask

Once the React app is running, click on **"Connect MetaMask"** to link your Ethereum account. You must have MetaMask installed and connected to a testnet like **Goerli** or **Sepolia**.

---

## 📚 Features

- **Add Books**: Add a new book with the title to your collection.
- **Track Reading Status**: Toggle between **read** and **unread** for each book.
- **Immutable**: All records are stored on the Ethereum blockchain, making them secure and immutable.

---

## 🛠️ Smart Contract (Solidity)

### The smart contract includes:

- **addBook()**: Allows users to add a new book to their collection.
- **getBooks()**: Retrieves a list of books for the connected user.
- **toggleReadStatus()**: Allows users to toggle the reading status of a book.

---

## 💡 Future Improvements

- **User Authentication**: Add a more robust authentication system using Ethereum wallets.
- **Better UI/UX**: Improve the user interface to be more interactive and visually appealing.
- **Tokenization**: Implement a reward system for tracking books, such as NFT-based achievements.

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

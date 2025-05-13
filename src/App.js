import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import BookLibraryABI from './abi/BookLibrary.json';

// ✅ Replace with your Remix-deployed contract address
const contractAddress = "0x0xDA07165D4f7c84EEEfa7a4Ff439e039B7925d3dF";

function App() {
  const [contract, setContract] = useState(null);
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    const loadContract = async () => {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const contractInstance = new ethers.Contract(contractAddress, BookLibraryABI, signer);
        setContract(contractInstance);
      }
    };
    loadContract();
  }, []);

  const loadBooks = async () => {
    const data = await contract.getBooks();
    setBooks(data);
  };

  const addBook = async () => {
    const tx = await contract.addBook(title);
    await tx.wait();
    setTitle('');
    loadBooks();
  };

  const toggleRead = async (index) => {
    const tx = await contract.toggleReadStatus(index);
    await tx.wait();
    loadBooks();
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📚 Book Library</h2>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Book title" />
      <button onClick={addBook}>Add Book</button>
      <hr />
      <button onClick={loadBooks}>Load My Books</button>
      <ul>
        {books.map((b, i) => (
          <li key={i}>
            {b.title} - {b.isRead ? "✅ Read" : "❌ Unread"}
            <button onClick={() => toggleRead(i)}>Toggle</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


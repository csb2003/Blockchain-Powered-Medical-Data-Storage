Blockchain-Powered Medical Data Storage
This project leverages blockchain technology to securely store and manage medical records, ensuring data integrity, confidentiality, and easy access for authorized users. It demonstrates a decentralized and scalable solution for medical data storage with a smart contract implementation.

Features
Decentralized Storage: Uses blockchain to store critical medical record metadata securely.
Smart Contract Integration: Manages data storage and retrieval via Ethereum smart contracts.
Frontend: A React-based web app for user interaction.
Backend: Hardhat framework for smart contract development and testing.
Data Security: Medical records are encrypted and stored with integrity guarantees.
Scalability: Easily extendable for large-scale medical data storage solutions.
Technology Stack
Frontend: React.js
Smart Contracts: Solidity
Blockchain Development Framework: Hardhat
Ethereum Wallet: MetaMask
Programming Languages: JavaScript, Solidity
Version Control: Git, GitHub
Setup Instructions
Prerequisites
Install Node.js.
Install MetaMask browser extension.
Install Hardhat.
Steps
Clone the repository:

bash
Copy code
git clone https://github.com/csb2003/Blockchain-Powered-Medical-Data-Storage.git
cd Blockchain-Powered-Medical-Data-Storage
Install dependencies:

bash
Copy code
yarn install
Start the local blockchain network:

bash
Copy code
npx hardhat node
Deploy the smart contract:

bash
Copy code
npx hardhat run scripts/00-deploy.js --network localhost
Start the React application:

bash
Copy code
cd frontend
yarn start
Open http://localhost:3000 in your browser.

Connect MetaMask to the local blockchain network and import accounts.

Usage
Deploy Smart Contract: Deploy the MedicalRecord contract to the blockchain.
Add Medical Records: Add encrypted medical records using the web app.
Retrieve Records: Query the blockchain for stored records using the app.
Screenshots
Add relevant screenshots of your application UI here.

Documentation
Project Report: Detailed description of the project.
Future Enhancements
Implement role-based access control for doctors and patients.
Integrate InterPlanetary File System (IPFS) for storing large medical files.
Enable real-time medical data sharing and analytics.

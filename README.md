

* * * * *

🚀 Blockchain-Powered Medical Data Storage
==========================================

This project leverages **blockchain technology** to securely store and manage medical records, ensuring **data integrity, confidentiality**, and **easy access for authorized users**. It demonstrates a decentralized and scalable solution with **Ethereum smart contract integration**.

* * * * *
👁️ Visual Overview
-----------

![image](https://github.com/user-attachments/assets/fa4b6fdf-8f73-417c-9dee-81b341e76909)

---------------

🔑 Features
-----------

-   **🔗 Decentralized Storage**: Securely stores medical record metadata on the blockchain.

-   **🧠 Smart Contract Integration**: Handles data storage and retrieval using Ethereum smart contracts.

-   **🖥️ Frontend**: React-based web application for seamless user interaction.

-   **🔧 Backend**: Developed using the Hardhat framework for smart contract deployment and testing.

-   **🔐 Data Security**: Records are encrypted before storage, ensuring privacy and integrity.

-   **📈 Scalability**: Easily extendable for use by hospitals, health networks, or governments.

* * * * *

🧰 Technology Stack
-------------------

| Layer | Tech |
| --- | --- |
| Frontend | React.js |
| Smart Contracts | Solidity |
| Blockchain Framework | Hardhat |
| Ethereum Wallet | MetaMask |
| Programming Languages | JavaScript, Solidity |
| Version Control | Git, GitHub |

* * * * *

🛠️ Setup Instructions
----------------------

### ✅ Prerequisites

-   Install [Node.js](https://nodejs.org/)

-   Install [MetaMask](https://metamask.io/) browser extension

-   Install [Hardhat](https://hardhat.org/)

* * * * *

### ⚙️ Steps to Run the Project

1.  **Clone the repository:**

    ```
    git clone https://github.com/csb2003/Blockchain-Powered-Medical-Data-Storage.git
    cd Blockchain-Powered-Medical-Data-Storage

    ```

2.  **Install dependencies:**

    ```
    yarn install

    ```

3.  **Start the local Hardhat blockchain network:**

    ```
    npx hardhat node

    ```

4.  **Deploy the smart contract:**

    ```
    npx hardhat run scripts/00-deploy.js --network localhost

    ```

5.  **Start the React frontend app:**

    ```
    cd frontend
    yarn start

    ```

6.  Open your browser and navigate to:\
    [http://localhost:3000](http://localhost:3000/)

7.  **Connect MetaMask**:

    -   Connect to the local Hardhat network (usually `http://127.0.0.1:8545`)

    -   Import accounts using the private keys from Hardhat

* * * * *

📦 Usage
--------

-   **Deploy Smart Contract**: Automatically handled via the deployment script.

-   **Add Medical Records**: Upload encrypted records using the UI.

-   **Retrieve Records**: View stored records directly from the blockchain via the app.

* * * * *

📄 Documentation
----------------

-   **Project Report**: *Include or link to a detailed PDF/Notion report with architecture, design decisions, and testing.*

-   **Smart Contract Docs**: Inline documentation within Solidity code for each function and purpose.

* * * * *

🌱 Future Enhancements
----------------------

-   🔐 **Role-based Access Control (RBAC)** for doctors, patients, and administrators

-   🧠 **AI-assisted Record Insights** for hospitals

-   ☁️ **IPFS Integration** for off-chain encrypted medical file storage

-   📲 **Mobile App Support** for patients to access records

-   🧾 **Audit Trails** to ensure tamper-proof activity logs

-   🏥 **Multi-Hospital Network** capability with inter-chain communication

* * * * *

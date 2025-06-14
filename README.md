#  LAN File Sharing App (Node.js)

This is a mini-project designed for sharing files between devices connected to the same **Local Area Network (LAN)** using pure Node.js. It works without the need for internet and demonstrates core networking concepts like **peer discovery**, **socket communication**.

---

##  What This Project Does

This project enables two or more computers on the same Wi-Fi or LAN to:
-  Discover each other using **UDP broadcast**
-  Send files from one device to another using **TCP socket communication**
-  Receive and save the files on the destination device
  
---

## How It Works

### 1. Peer Discovery (UDP Broadcast)
- One device broadcasts its presence over the network.
- Other devices listen for these broadcasts and can identify nearby peers on the LAN.

### 2. File Receiver (TCP Server)
- The receiving device runs a server that listens on a specific port (e.g., 9000).
- It accepts incoming file transfers and writes the received data to a file.

### 3. File Sender (TCP Client)
- The sending device connects to the receiver's IP and port over TCP.
- It reads the selected file and streams it directly to the receiver.

---

##  Usage Workflow

### Step 1: Start the Receiver
Run the file receiver script on the device that should receive files. This opens a TCP server that listens for incoming files.

### Step 2: Start the Sender
On the sending device:
- Provide the file path
- Enter the IP address of the receiver
- The file will be transferred over the LAN

### Step 3: File Received
The receiver saves the incoming file to disk.

---

## ⚙️ Requirements

- Node.js installed on all participating devices
- All devices must be connected to the **same LAN or Wi-Fi**
- Basic command-line knowledge

---

## 👤 Author

**Kunal Kumar Varma**  
Mini Project – Computer Networks  
Built using Node.js and Socket Programming Concepts

# 💬 Responsive Chat Application (Frontend Only)

This is a fully responsive frontend-only chat application built with **Next.js**. The UI closely replicates the provided reference design and is optimized for both desktop and mobile views.

## 🚀 Live Demo

🌐 Hosted on Vercel: https://chat-app-front-end-xi.vercel.app/
🔗 GitHub Repo: https://github.com/kulkarnimanas732/Chat-App-Front-end-/

---

## 📦 Tech Stack

- **Next.js** (Bonus ✅)
- **React.js**
- **CSS Modules / Tailwind CSS** (as preferred)
- **JavaScript (ES6+)**

---

## 🧩 Features

- ✅ Responsive layout for mobile and desktop
- ✅ Fixed top navbar
- ✅ Sidebar with contact list
- ✅ Clicking a contact opens respective conversation
- ✅ Dummy chat functionality with predefined/random bot replies
- ✅ Typing animation (Bonus ✅)
- ✅ Message status indicators (Sent / Received) (Bonus ✅)
- ✅ Chat message transition animations (Bonus ✅)
- ✅ Smooth sidebar collapse animation (Bonus ✅)

---

## 📁 Project Structure


chat-app/
 ├── components/
 │ ├── Navbar.jsx
 │ ├── Sidebar.jsx
 │ ├── ChatWindow.jsx
 │ ├── ChatMessage.jsx
 │ └── TypingIndicator.jsx
 ├── pages/
 │ ├── index.js
 ├── public/
 │ └── assets/
 ├── styles/
 │ └── globals.css
 ├── utils/
 │ └── dummyData.js
 ├── README.md
 └── ...

---

## 🧠 Functionality Details

- **Sidebar**: Lists all contacts. Click to load their chat history.
- **Chat Wall**: Shows message bubbles with timestamps and status.
- **Bot Replies**: Triggered automatically after a short delay using `setTimeout`.
- **Typing Indicator**: Simulates the bot typing before a reply appears.
- **Animations**: Messages and sidebar use `framer-motion` or CSS transitions for smooth effects.

---

## 📲 Mobile Responsiveness

- Hamburger menu toggles sidebar.
- Sticky navbar remains at the top.
- Touch-friendly UI components.

---

## 🛠️ Installation and Setup

```bash
# Clone the repo
git clone https://github.com/kulkarnimanas732/Chat-App-Front-end-/
cd Chat-App-Front-end-

# Install dependencies
npm install

# Run development server
npm run dev

Visit http://localhost:3000 in your browser.

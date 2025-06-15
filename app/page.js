'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import ChatWindow from '../components/ChatWindow/ChatWindow';
import ChatInput from '../components/ChatInput/ChatInput';

const initialMessages = {
  Alice: [
    { sender: 'Alice', text: 'Hey! How are you doing?', status: 'received', timestamp: '10:00 AM' },
    { sender: 'me', text: 'Hi Alice! I\'m doing well, thanks for asking. How about you?', status: 'sent', timestamp: '10:01 AM' },
    { sender: 'Alice', text: 'I\'m great! Just wanted to check if you received the project files I sent earlier.', status: 'received', timestamp: '10:02 AM' },
    { sender: 'me', text: 'Yes, I got them. Thanks! I\'ll review them and get back to you by tomorrow.', status: 'sent', timestamp: '10:03 AM' },
  ],
  Bob: [
    { sender: 'Bob', text: 'Are we still on for the meeting tomorrow?', status: 'received', timestamp: 'Yesterday' },
    { sender: 'me', text: 'Yes, absolutely! See you at 2 PM.', status: 'sent', timestamp: 'Yesterday' },
  ],
  Charlie: [
    { sender: 'Charlie', text: 'The design looks amazing!', status: 'received', timestamp: 'Yesterday' },
  ],
  David: [
    { sender: 'David', text: 'Thanks for the report, very detailed.', status: 'received', timestamp: 'Tuesday' },
  ],
};

export default function Home() {
  const [selectedContact, setSelectedContact] = useState('Alice');
  const [chatHistories, setChatHistories] = useState(initialMessages);
  const [isTyping, setIsTyping] = useState(false);
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const handleSend = (text) => {
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newMessage = { sender: 'me', text, status: 'sent', timestamp: now };

    const updatedMessages = [...(chatHistories[selectedContact] || []), newMessage];
    setChatHistories(prev => ({ ...prev, [selectedContact]: updatedMessages }));

    setIsTyping(true);

    // Simulate response
    setTimeout(() => {
      const botMessage = {
        sender: selectedContact,
        text: 'Thanks for your message! I\'ll get back to you soon.',
        status: 'received',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setChatHistories(prev => ({
        ...prev,
        [selectedContact]: [...(prev[selectedContact] || []), botMessage],
      }));
      setIsTyping(false);
    }, 2000);
  };

  const handleContactSelect = (contact) => {
    setSelectedContact(contact);
    setSidebarVisible(false); // Close sidebar on mobile after selection
  };

  return (
    <div className="relative bg-gray-50 h-screen">
      <Navbar onToggleSidebar={() => setSidebarVisible(prev => !prev)} />

      <Sidebar
        onSelect={setSelectedContact}
        isVisible={isSidebarVisible}
        chatHistories={chatHistories}
        selectedContact={selectedContact}
        onClose={() => setSidebarVisible(false)}

      />

      <ChatWindow
        contact={selectedContact}
        messages={chatHistories[selectedContact] || []}
        isTyping={isTyping}
      />
      <ChatInput onSend={handleSend} />
    </div>
  );
}
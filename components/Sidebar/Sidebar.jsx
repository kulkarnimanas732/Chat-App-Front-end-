import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const contacts = [
    { name: 'Alice', time: '12:45 PM', lastMsg: 'I\'ve sent you the latest project...', avatar: 'A', bgColor: 'bg-blue-500' },
    { name: 'Bob', time: 'Yesterday', lastMsg: 'Are we still meeting for coffee?', avatar: 'B', bgColor: 'bg-green-500' },
    { name: 'Charlie', time: 'Yesterday', lastMsg: 'The design team loved your work', avatar: 'C', bgColor: 'bg-purple-500' },
    { name: 'David', time: 'Tuesday', lastMsg: 'Thanks for sharing the report', avatar: 'D', bgColor: 'bg-orange-500' }
];

export default function Sidebar({ onSelect, isVisible, chatHistories, selectedContact, onClose }) {
    const handleContactSelect = (contactName) => {
        onSelect(contactName);
        
        if (window.innerWidth < 768) {
            onClose();
        }
    };

    return (
        <>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ x: -320 }}
                        animate={{ x: 0 }}
                        exit={{ x: -320 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        className="fixed z-30 w-80 h-full bg-white top-16 shadow-lg border-r md:hidden"
                    >
                        <SidebarContent
                            contacts={contacts}
                            onSelect={handleContactSelect}
                            chatHistories={chatHistories}
                            selectedContact={selectedContact}
                            showCloseButton={true}
                            onClose={onClose}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="hidden md:block fixed w-80 h-[calc(100vh-4rem)] bg-white border-r shadow-lg overflow-y-auto">
                <SidebarContent
                    contacts={contacts}
                    onSelect={onSelect}
                    chatHistories={chatHistories}
                    selectedContact={selectedContact}
                    showCloseButton={false}
                />
            </div>

           
            {isVisible && (
                <div
                    className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-20 top-16"
                    onClick={onClose}
                />
            )}
        </>
    );
}

function SidebarContent({ contacts, onSelect, chatHistories, selectedContact, showCloseButton, onClose }) {
    return (
        <div className="h-full flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-xl font-semibold text-gray-800">Chats</h2>
                {showCloseButton && (
                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-gray-100 rounded focus:outline-none focus:ring-0"
                    >
                        <X size={20} />
                    </button>
                )}
            </div>

            <div className="flex-1 overflow-y-auto">
                {contacts.map((contact, idx) => {
                    const messages = chatHistories?.[contact.name] || [];
                    const lastMsg = messages[messages.length - 1];
                    const lastText = lastMsg?.text || contact.lastMsg;
                    const lastTime = lastMsg?.timestamp || contact.time;
                    const isActive = selectedContact === contact.name;

                    return (
                        <div
                            key={idx}
                            onClick={() => onSelect(contact.name)}
                            className={`flex items-center p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100 ${isActive ? 'bg-blue-50 border-blue-200' : ''
                                }`}
                        >
                            <div className={`w-12 h-12 ${contact.bgColor} text-white flex items-center justify-center rounded-full text-sm font-medium`}>
                                {contact.avatar}
                            </div>
                            <div className="ml-3 flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-gray-900 truncate">
                                        {contact.name}
                                    </p>
                                    <p className="text-xs text-gray-500">{lastTime}</p>
                                </div>
                                <p className="text-sm text-gray-500 truncate mt-1">
                                    {lastText}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
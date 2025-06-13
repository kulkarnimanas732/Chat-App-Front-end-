import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import dayjs from 'dayjs';

const contactData = {
    Alice: { avatar: 'A', bgColor: 'bg-blue-500' },
    Bob: { avatar: 'B', bgColor: 'bg-green-500' },
    Charlie: { avatar: 'C', bgColor: 'bg-purple-500' },
    David: { avatar: 'D', bgColor: 'bg-orange-500' },
};

export default function ChatWindow({ contact, messages, isTyping }) {
    const endRef = useRef(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const currentContact = contactData[contact] || { avatar: contact[0], bgColor: 'bg-blue-500' };

    const formatTime = (timestamp) => {
        const formattedTime = dayjs(timestamp);
        if (formattedTime.isValid()) {
            return formattedTime.format('hh:mm A');
        }
        return dayjs().format('hh:mm A');
    };

    return (
        <div className="mt-16 h-[calc(100vh-4rem)] flex flex-col bg-white transition-all duration-300 md:ml-80">

            <div className="border-b px-4 py-3 flex items-center bg-white">
                <div className={`w-10 h-10 ${currentContact.bgColor} text-white flex items-center justify-center rounded-full text-sm font-medium`}>
                    {currentContact.avatar}
                </div>
                <div className="ml-3">
                    <div className="flex items-center space-x-2">
                        <span className="font-semibold text-lg text-gray-900">{contact}</span>
                        <span className="text-sm text-green-500">● Online</span>
                    </div>
                </div>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
                {messages.map((msg, i) => {
                    const isUser = msg.sender === 'me';

                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
                        >
                            <div className="max-w-xs lg:max-w-md">
                                <div className={`px-4 py-2 rounded-2xl text-sm ${isUser ? 'bg-blue-500 text-white rounded-br-sm' : 'bg-white text-gray-900 rounded-bl-sm border'
                                    }`}>
                                    {msg.text}
                                </div>
                                <div className={`text-xs mt-1 text-gray-500 ${isUser ? 'text-right' : 'text-left'}`}>
                                    {formatTime(msg.timestamp)}
                                    {msg.status === 'sent' && isUser && ' • ✓ Sent'}
                                    {msg.status === 'received' && !isUser && ' • ✓ Received'}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}

                {isTyping && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-start"
                    >
                        <div className="bg-white px-4 py-2 rounded-2xl rounded-bl-sm border">
                            <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                            </div>
                        </div>
                    </motion.div>
                )}
                <div ref={endRef} />
            </div>
        </div>
    );
}

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ChatInput({ onSend }) {
    const [text, setText] = useState('');

    const handleSend = () => {
        if (!text.trim()) return;
        onSend(text);
        setText('');
    };


    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };


    const handleClearInput = () => {
        setText('');
    };

    return (
        <div className="fixed bottom-0 right-0 left-0 md:left-80 bg-white border-t p-4">
            <div className="flex items-center space-x-3 max-w-4xl mx-auto">
                <div className="flex-1 relative">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onKeyPress={handleKeyPress}
                        aria-label="Type your message"
                        className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                    />
                </div>
                <div className="flex space-x-3">

                    <button
                        onClick={handleSend}
                        disabled={!text.trim()}
                        className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white p-3 rounded-full transition-colors duration-200 flex items-center justify-center"
                        aria-label="Send message"
                    >
                        <Send size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}

import { Menu } from 'lucide-react';

export default function Navbar({ onToggleSidebar }) {
    return (
        <div className="fixed top-0 left-0 right-0 bg-white border-b z-20 px-4 py-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <button
                        onClick={onToggleSidebar}
                        className="md:hidden p-2 hover:bg-gray-100 rounded mr-2"
                        style={{ outline: 'none', boxShadow: 'none' }}
                        onFocus={(e) => e.target.blur()}
                    >
                        <Menu size={20} />
                    </button>
                    <h1 className="text-xl font-semibold text-gray-800">Chat App</h1>
                </div>
                <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full text-sm">
                    P
                </div>
            </div>
        </div>
    );
}
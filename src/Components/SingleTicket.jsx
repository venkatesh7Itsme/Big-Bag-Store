import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaCog, FaHome, FaUser, FaMapMarkerAlt, 
  FaListAlt, FaHeart, FaTicketAlt, 
  FaCloudUploadAlt, FaTrash
} from 'react-icons/fa';

const NavButton = ({ icon: Icon, text, to, active = false }) => {
  return (
    <Link 
      to={to} 
      className={`flex items-center space-x-2 px-4 py-2 rounded ${
        active ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      }`}
    >
      <Icon />
      <span>{text}</span>
    </Link>
  );
};

const ConversationMessage = ({ name, image, timestamp, message, attachment }) => {
    return (
        <div className="bg-white border border-blue-200 rounded-lg shadow-sm mb-4 overflow-hidden">
            <div className="flex p-4">
                <img 
                    src={image} 
                    alt={name} 
                    className="w-12 h-12 rounded-full object-cover mr-4 self-start"
                />
                <div className="flex-1">
                    <div className="flex justify-between items-center mb-3">
                        <h2 className="font-semibold text-gray-800">{name}</h2>
                        <span className="text-gray-500 text-sm">{timestamp}</span>
                    </div>
                    <p className="text-gray-700 mb-4">{message}</p>
                    {attachment && (
                        <div className="bg-blue-50 border border-blue-100 rounded p-2 flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <FaCloudUploadAlt className="text-blue-600" />
                                <span className="text-blue-700">{attachment.name}</span>
                                <span className="text-blue-500 text-sm">({attachment.size})</span>
                            </div>
                            <button className="text-red-500 hover:text-red-700">
                                <FaTrash />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const SingleTicket = () => {
    const [message, setMessage] = useState('');

    const conversations = [
        {
          name: 'Gloria Loe',
          image: 'https://bigbag-html.netlify.app/assets/img/blog/profile-image.jpg',
          timestamp: '1 hour ago',
          message: 'Sed pretium tincidunt nisi porttitor dapibus. Etiam id tincidunt augue. Vivamus tempor porttitor augue ac posuere.',
        },
        {
          name: 'Anjelina',
          image: 'https://bigbag-html.netlify.app/assets/img/blog/blog-small-02.jpg',
          timestamp: '30 min ago',
          message: 'Sed pretium tincidunt nisi porttitor dapibus. Etiam id tincidunt augue. Vivamus tempor porttitor augue ac posuere.',
          attachment: {
            name: 'imgUpload.jpg',
            size: '13k'
          }
        },
        {
          name: 'Shofía',
          image: 'https://bigbag-html.netlify.app/assets/img/blog/blog-small2-01.jpg',
          timestamp: '10 min ago',
          message: 'Sed pretium tincidunt nisi porttitor dapibus. Etiam id tincidunt augue. Vivamus tempor porttitor augue ac posuere.',
        }
    ];

    const handleSendMessage = () => {
        console.log('Sending message:', message);
        setMessage(''); 
    };

    return (
        <div className="container mx-auto p-3">
            <header className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Single Ticket</h1>
                <div className="flex items-center space-x-2">
                    <Link to="/">HOME</Link>
                    <span>/</span>
                    <span className="text-gray-500">Ticket</span>
                </div>
            </header>
       
            <nav className="flex space-x-4 mb-6">
                <NavButton icon={FaHome} text="ACCOUNT DASHBOARD" to="/dashboard" />
                <NavButton icon={FaUser} text="PROFILE" to="/profile" />
                <NavButton icon={FaMapMarkerAlt} text="MY ADDRESS" to="/address" />
                <NavButton icon={FaListAlt} text="ALL ORDERS" to="/orders" />
                <NavButton icon={FaHeart} text="WISHLIST" to="/wishlist" />
                <NavButton icon={FaTicketAlt} text="TICKETS" to="/tickets" active />
                <div className="ml-auto">
                    <FaCog className="text-gray-600" />
                </div>
            </nav>

            <div className="min-h-screen bg-gray-50 p-6">
                <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="flex justify-between items-center p-4 border-b">
                        <h1 className="text-2xl font-semibold text-gray-800">Ticket Title Goes Here</h1>
                        <span className="text-gray-500 font-medium">#451221</span>
                    </div>
                    
                    <div className="bg-teal-400 text-white grid grid-cols-6 py-3 px-4">
                        <div>
                            <h3 className="font-semibold">Date Submitted</h3>
                            <p>March 25, 2021</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Last Updated</h3>
                            <p>March 31, 2021</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Type</h3>
                            <p>Partner Request</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Priority</h3>
                            <p className="bg-green-500 inline-block px-2 py-1 rounded text-sm">High</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Status</h3>
                            <p>Open</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Messages</h3>
                            <p>-</p>
                        </div>
                    </div>

                    <div className="p-6 space-y-4">
                        {conversations.map((conversation, index) => (
                            <ConversationMessage 
                                key={index}
                                name={conversation.name}
                                image={conversation.image}
                                timestamp={conversation.timestamp}
                                message={conversation.message}
                                attachment={conversation.attachment}
                            />
                        ))}
                    </div>

                    <div className="p-6 bg-gray-50 border-t">
                        <h2 className="text-xl font-semibold mb-4">Leave Message</h2>
                        <textarea 
                            className="w-full p-3 border border-gray-300 rounded-lg mb-4 resize-none h-32"
                            placeholder="Your message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button 
                            className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors"
                            onClick={handleSendMessage}
                        >
                            SEND MESSAGE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleTicket;
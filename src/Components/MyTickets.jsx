import React from 'react';
import { Link } from 'react-router-dom';
import {  
  FaCog, 
  FaHome, 
  FaUser, 
  FaMapMarkerAlt, 
  FaListAlt, 
  FaHeart, 
  FaTicketAlt
} from 'react-icons/fa';

const MyTicket = () => {
  const tickets = [
    {
      id: 1,
      subject: "My New Ticket",
      dateSubmitted: "March 25, 2021",
      lastUpdated: "March 31, 2021",
      type: "Partner Request",
      priority: "High",
      status: "Open"
    },
    {
      id: 2,
      subject: "Another Ticket",
      dateSubmitted: "April 20, 2021",
      lastUpdated: "April 29, 2021",
      type: "Website Problem",
      priority: "Medium",
      status: "Closed"
    },
    {
      id: 3,
      subject: "Yet Another Ticket",
      dateSubmitted: "May 15, 2021",
      lastUpdated: "May 20, 2021",
      type: "Complaint",
      priority: "Urgent",
      status: "Closed"
    },
    {
      id: 4,
      subject: "My Old Ticket",
      dateSubmitted: "June 21, 2021",
      lastUpdated: "June 30, 2021",
      type: "Info Inquiry",
      priority: "Low",
      status: "Closed"
    },
    {
      id: 5,
      subject: "Another Old Ticket",
      dateSubmitted: "July 10, 2021",
      lastUpdated: "July 15, 2021",
      type: "Another Problem",
      priority: "Medium",
      status: "Closed"
    }
  ];

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'High': return 'bg-green-500';
      case 'Medium': return 'bg-blue-500';
      case 'Urgent': return 'bg-red-500';
      case 'Low': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

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

  return (
   <div className="container mx-auto p-3">
           <header className="flex justify-between items-center mb-6">
             <h1 className="text-2xl font-bold">My Tickets</h1>
             <div className="flex items-center space-x-2">
               <Link to="/" className="hover:underline">HOME</Link>
               <span>/</span>
               <span className="text-gray-500">My Tickets</span>
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

           <div className="min-h-screen pt-20 pb-20 bg-gray-100 px-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-teal-400 text-white">
              <th className="p-4 text-left">Ticket Subject</th>
              <th className="p-4 text-left">Date Submitted</th>
              <th className="p-4 text-left">Last Updated</th>
              <th className="p-4 text-left">Type</th>
              <th className="p-4 text-left">Priority</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr 
                key={ticket.id} 
                className="bg-white shadow-md mb-4 rounded-lg transform transition-transform duration-300"
              >
                <td className="p-4">{ticket.subject}</td>
                <td className="p-4">{ticket.dateSubmitted}</td>
                <td className="p-4">{ticket.lastUpdated}</td>
                <td className="p-4">{ticket.type}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded text-white text-xs ${getPriorityColor(ticket.priority)}`}>
                    {ticket.priority}
                  </span>
                </td>
                <td className="p-4">{ticket.status}</td>
                <td className="p-4">
                  <Link 
                    to={`/tickets/${ticket.id}`} 
                    className="text-blue-600 hover:underline"
                  >
                    VIEW
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link 
        to="/tickets/new" 
        className="mt-6 w-half bg-teal-400 text-white p-4 rounded-lg hover:bg-teal-500 transition shadow-md block text-center"
      >
        SUBMIT NEW TICKET
      </Link>
    </div>
    </div>
  );
};

export default MyTicket;
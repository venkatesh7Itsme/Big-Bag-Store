import React, { useState } from 'react';


const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 focus:outline-none"
      >
        <span className="font-medium text-gray-900">{title}</span>
        <svg 
          className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-50 text-gray-600">
          {content}
        </div>
      )}
    </div>
  );
};


const ContactForm = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Haven't found the answer? Ask us.</h2>
      <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
      
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>
        <input 
          type="text" 
          placeholder="Subject" 
          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        />
        <select 
          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-500"
        >
          <option>Shipping Info</option>
          <option>Website Problem</option>
          <option>Account Management</option>
          <option>Complaint</option>
          <option>Payement Procedure</option>

        </select>
        <textarea 
          placeholder="Question" 
          rows="4" 
          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        ></textarea>
         <button 
    type="submit" 
    className="px-6 py-2 text-teal-500 border border-teal-500 rounded hover:bg-teal-50 transition duration-300"
  >
    Submit Question
  </button>
      </form>
    </div>
  );
};


const FAQPage = () => {
  const generalQuestions = [
    { 
        title: 'How can I manage Instant Book?',
        content: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et..'
     },

    {
         title: 'How do I use my calendar?',
         content: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et..' 
        },
        {
        title: 'How can I manage Instant Book?',
        content: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et..' 
       },
  ];

  const mostPopularQuestions = [
    { 
        title: 'How do I use my calendar?',
       content: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et..' 
       },
   
    { title: 'How can I manage Instant Book?',
      content: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et..' 
       },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-6 ">
        <div className="bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold p-4 border-b border-gray-200 bg-gray-100">General Questions</h2>
          {generalQuestions.map((item, index) => (
            <AccordionItem 
              key={`general-${index}`} 
              title={item.title} 
              content={item.content} 
            />
          ))}
        </div>

        <div className="bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold p-4 border-b border-gray-200 bg-gray-100">Most Popular Questions</h2>
          {mostPopularQuestions.map((item, index) => (
            <AccordionItem 
              key={`popular-${index}`} 
              title={item.title} 
              content={item.content} 
            />
          ))}
        </div>
      </div>
      
      <ContactForm />
    </div>
  );
};

export default FAQPage;
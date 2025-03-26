import React, { useState } from 'react';
import { FaUser, FaCalendar, FaComments,FaCalendarAlt  } from 'react-icons/fa';

const SingleBlog = () => {
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      image: "https://bigbag-html.netlify.app/assets/img/blog/blog-01.jpg",
      title: "Praesent Justo Dolor, Lobortis Quis, Lobortis Dignissim",
      author: "Adam Smith",
      date: "Mar 20, 2021",
      category: "Travel",
      comments: 8,
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    },
]);
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };
const handleCommentSubmit = (e) => {
    e.preventDefault();
    console.log('Comment submitted');
  };
  
     return (
        <div>
          <div className="bg-gray-100 py-16 text-left">
            <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-[rgb(121,121,121)] mb-4">BLOG FULLWIDTH</h1>
             <div className="text-[rgb(121,121,121)]">
             <span>HOME</span> / <span className="text-teal-500">BLOG FULLWIDTH</span>
           </div>
    
            </div>
          </div>    
    
    
              
               
              
              {/* Main Content */}
              <div className="w-full md:w-3/4 md:pl-8 order-last md:order-last">
                {blogPosts.map((post) => (
                  <div key={post.id} className="mb-8">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-96 object-cover mb-4"
                    />
                    <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                    
                    <div className="mb-4 space-y-2">
                      <div className="flex items-center text-gray-600 space-x-2">
                        <FaUser />
                        <span>Author: {post.author}</span>
                      </div>
                      <div className="flex items-center text-gray-600 space-x-2">
                        <FaCalendar />
                        <span>Published: {post.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600 space-x-2">
                        <FaComments />
                        <span>Comments: {post.comments}</span>
                      </div>
                      <div className="flex items-center text-gray-600 space-x-2">
                        <span className="font-medium">Category: {post.category}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  </div>
                ))}

          <div className="flex justify-between mb-8">
            <button className="px-6 py-2 bg-gray-200 text-gray-700 font-medium rounded-sm hover:bg-gray-300">PREVIOUS</button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 font-medium rounded-sm hover:bg-gray-300">NEXT</button>
          </div>

           
          <div className="bg-white shadow-sm rounded-sm p-6 mb-8">
            <h3 className="text-2xl font-medium text-gray-800 mb-6">4 Comments</h3>
            
          
            <div className="flex mb-6 pb-6 border-b border-gray-200">
              <div className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0 mr-4 overflow-hidden">
                <img src="https://bigbag-html.netlify.app/assets/img/blog/avatar.jpg" alt="User avatar" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center mb-2">
                  <h4 className="font-medium text-gray-800 mr-4">Jessica Brown</h4>
                  <div className="flex items-center text-gray-500 text-sm">
                    <FaCalendarAlt className="mr-1" />
                    <span>Mar 20, 2021</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-2">Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur. Excepteur Sint Occaecat Cupidatat Non Proident.</p>
                <button className="text-gray-500 hover:text-gray-700">Reply</button>
              </div>
            </div>
            
            
            <div className="flex mb-6">
              <div className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0 mr-4 overflow-hidden">
                <img src="https://bigbag-html.netlify.app/assets/img/blog/avatar.jpg" alt="User avatar" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center mb-2">
                  <h4 className="font-medium text-gray-800 mr-4">Jessica Brown</h4>
                  <div className="flex items-center text-gray-500 text-sm">
                    <FaCalendarAlt className="mr-1" />
                    <span>Mar 20, 2021</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-2">Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat.</p>
                <button className="text-gray-500 hover:text-gray-700">Reply</button>
              </div>
            </div>
          </div>
          
          
          <div className="bg-white shadow-sm rounded-sm p-6">
            <h3 className="text-2xl font-medium text-gray-800 mb-6">Leave Comments</h3>
            
            <form onSubmit={handleCommentSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="p-3 bg-gray-100 rounded-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="p-3 bg-gray-100 rounded-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="url"
                  placeholder="Website"
                  className="w-full p-3 bg-gray-100 rounded-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Comment"
                  rows="6"
                  className="w-full p-3 bg-gray-100 rounded-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-teal-500 text-white font-medium rounded-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
              >
                POST COMMENT
              </button>
            </form>
          </div>
        </div>
        
        
        <div className="w-full md:w-1/3 mt-8 md:mt-0">
          
          <div className="bg-white shadow-sm rounded-sm p-6 mb-6">
            <form onSubmit={handleSearchSubmit}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full p-3 pr-10 bg-gray-100 rounded-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
          </div>
          </div>
         
        );
      };
      
      export default SingleBlog;


import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaDribbble, FaTumblr, FaUser, FaCalendarAlt, FaTag, FaComment } from 'react-icons/fa';

function App() {
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
    <div className="min-h-screen bg-gray-50">
    
      <header className="bg-gray-200 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-medium text-gray-700">BLOG SINGLE SIDEBAR</h1>
          <div className="flex items-center mt-4">
            <a href="/" className="text-gray-500 hover:text-gray-700">HOME</a>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-700">BLOG SINGLE SIDEBAR</span>
          </div>
        </div>
      </header>
      
     
      <main className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
       
        <div className="w-full md:w-2/3 md:pr-8">
          <article className="bg-white shadow-sm rounded-sm mb-8">
            
              
              <div className="mb-6">
                <img src="https://bigbag-html.netlify.app/assets/img/blog/blog-01.jpg" alt="Featured" className="w-full h-auto rounded" />
                <div className="p-6">
              <h2 className="text-3xl font-medium text-gray-800 mb-6">Praesent Justo Dolor, Lobortis Quis, Lobortis Dignissim</h2>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-between mb-6">
                <div className="flex items-center mb-4 sm:mb-0">
                  <div className="mr-6 flex items-center">
                    <FaUser className="text-gray-500 mr-2" />
                    <span className="text-gray-600">Adam Smith</span>
                  </div>
                  <div className="mr-6 flex items-center">
                    <FaCalendarAlt className="text-gray-500 mr-2" />
                    <span className="text-gray-600">Mar 20, 2021</span>
                  </div>
                  <div className="flex items-center">
                    <FaTag className="text-gray-500 mr-2" />
                    <span className="text-gray-600">Travel</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaComment className="text-gray-500 mr-2" />
                  <span className="text-gray-600">8 comments</span>
                </div>
              </div>
              
              <div className="prose max-w-none mb-6">
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              </div>
              
              <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                <h4 className="text-lg font-medium text-gray-700">Share</h4>
                <div className="flex space-x-2">
                  <a href="#" className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-sm">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center bg-blue-400 text-white rounded-sm">
                    <FaTwitter />
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center bg-pink-500 text-white rounded-sm">
                    <FaDribbble />
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center bg-blue-800 text-white rounded-sm">
                    <FaTumblr />
                  </a>
                </div>
              </div>
            </div>
          </article>
          
        
          <div className="flex justify-between mb-8">
            <button className="px-6 py-2 bg-gray-200 text-gray-700 font-medium rounded-sm hover:bg-gray-300">PREVIOUS</button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 font-medium rounded-sm hover:bg-gray-300">NEXT</button>
          </div>
          
          
          <div className="bg-white shadow-sm rounded-sm p-6 mb-8">
            <h3 className="text-2xl font-medium text-gray-800 mb-6">4 Comments</h3>
            
          
            <div className="flex mb-6 pb-6 border-b border-gray-200">
              <div className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0 mr-4 overflow-hidden">
                <img src="/api/placeholder/48/48" alt="User avatar" className="w-full h-full object-cover" />
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
                <img src="/api/placeholder/48/48" alt="User avatar" className="w-full h-full object-cover" />
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
          
          
          <div className="bg-white shadow-sm rounded-sm p-6 mb-6">
            <h3 className="text-xl font-medium text-white bg-teal-500 p-3 -mx-6 -mt-6 mb-6">CATEGORIES</h3>
            
            <ul>
              <li className="py-2 border-b border-gray-100">
                <a href="#" className="flex items-center text-gray-700 hover:text-teal-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Accessories <span className="ml-auto">(6)</span>
                </a>
              </li>
              <li className="py-2 border-b border-gray-100">
                <a href="#" className="flex items-center text-gray-700 hover:text-teal-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Bag <span className="ml-auto">(6)</span>
                </a>
              </li>
              <li className="py-2 border-b border-gray-100">
                <a href="#" className="flex items-center text-gray-700 hover:text-teal-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Cloths <span className="ml-auto">(25)</span>
                </a>
              </li>
              <li className="py-2 border-b border-gray-100">
                <a href="#" className="flex items-center text-gray-700 hover:text-teal-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Bed &amp; Bath <span className="ml-auto">(2)</span>
                </a>
              </li>
              <li className="py-2 border-b border-gray-100">
                <a href="#" className="flex items-center text-gray-700 hover:text-teal-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Swimming costume <span className="ml-auto">(5)</span>
                </a>
              </li>
              <li className="py-2">
                <a href="#" className="flex items-center text-gray-700 hover:text-teal-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Sport Tops &amp; Shoes <span className="ml-auto">(3)</span>
                </a>
              </li>
            </ul>
          </div>
          
        
          <div className="bg-white shadow-sm rounded-sm p-6">
            <h3 className="text-xl font-medium text-white bg-teal-500 p-3 -mx-6 -mt-6 mb-6">RECENT POSTS</h3>
            
            <div className="mb-4 pb-4 border-b border-gray-100">
              <a href="#" className="flex">
                <div className="w-16 h-16 bg-gray-300 rounded flex-shrink-0 mr-4 overflow-hidden">
                  <img src="https://bigbag-html.netlify.app/assets/img/blog/blog-small-01.jpg" alt="Post thumbnail" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-gray-800 font-medium hover:text-teal-500 mb-1">Totam Rem Aperiam Ea Queab Ipsa.</h4>
                  <div className="flex items-center text-gray-500 text-sm">
                    <FaCalendarAlt className="mr-1" />
                    <span>5 March, 2021</span>
                  </div>
                </div>
              </a>
            </div>
            
            <div className="mb-4 pb-4 border-b border-gray-100">
              <a href="#" className="flex">
                <div className="w-16 h-16 bg-gray-300 rounded flex-shrink-0 mr-4 overflow-hidden">
                  <img src="https://bigbag-html.netlify.app/assets/img/blog/blog-small-02.jpg" alt="Post thumbnail" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-gray-800 font-medium hover:text-teal-500 mb-1">Totam Rem Aperiam Ea Queab Ipsa.</h4>
                  <div className="flex items-center text-gray-500 text-sm">
                    <FaCalendarAlt className="mr-1" />
                    <span>5 March, 2021</span>
                  </div>
                </div>
              </a>
            </div>
            
            <div>
              <a href="#" className="flex">
                <div className="w-16 h-16 bg-gray-300 rounded flex-shrink-0 mr-4 overflow-hidden">
                  <img src="https://bigbag-html.netlify.app/assets/img/blog/blog-small-03.jpg" alt="Post thumbnail" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-gray-800 font-medium hover:text-teal-500 mb-1">Totam Rem Aperiam Ea Queab Ipsa.</h4>
                  <div className="flex items-center text-gray-500 text-sm">
                    <FaCalendarAlt className="mr-1" />
                    <span>5 March, 2021</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
      
     
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p>&copy; 2025 All Rights Reserved. Blog Single Sidebar Template</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
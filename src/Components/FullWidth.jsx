import React, { useState } from 'react';
import { FaUser, FaCalendar, FaComments,  } from 'react-icons/fa';

const BlogFullWidth = () => {
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
    {
      id: 2,
      image: "https://bigbag-html.netlify.app/assets/img/blog/blog-02.jpg",
      title: "Praesent Justo Dolor, Lobortis Quis, Lobortis Dignissim",
      author: "Adam Smith",
      date: "Mar 20, 2021",
      category: "Travel",
      comments: 8,
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    },
    {
      id: 3,
      image: "https://bigbag-html.netlify.app/assets/img/blog/blog-03.jpg",
      title: "Praesent Justo Dolor, Lobortis Quis, Lobortis Dignissim",
      author: "Adam Smith",
      date: "Mar 20, 2021",
      category: "Travel",
      comments: 8,
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    },
    {
      id: 4,
      image: "https://bigbag-html.netlify.app/assets/img/blog/blog-04.jpg",
      title: "Praesent Justo Dolor, Lobortis Quis, Lobortis Dignissim",
      author: "Adam Smith",
      date: "Mar 20, 2021",
      category: "Travel",
      comments: 8,
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    },
    {
      id: 5,
      image: "https://bigbag-html.netlify.app/assets/img/blog/blog-05.jpg",
      title: "Praesent Justo Dolor, Lobortis Quis, Lobortis Dignissim",
      author: "Adam Smith",
      date: "Mar 20, 2021",
      category: "Travel",
      comments: 8,
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    }
  ]);

  
  const [currentPage, setCurrentPage] = useState(1);

 ;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
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

            {/* Pagination */}
            <div className="flex justify-center space-x-2 mt-6">
              {[1,2,3,4,5].map((page) => (
                <button 
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 ${
                    currentPage === page 
                    ? 'bg-teal-500 text-white' 
                    : 'border rounded-md'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button 
                className="px-4 py-2 border rounded-md"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                »
              </button>
            </div>
          </div>
       
    </div>
  );
};

export default BlogFullWidth;
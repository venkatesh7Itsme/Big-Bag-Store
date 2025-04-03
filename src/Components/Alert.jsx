import React, { useState } from 'react';

// Basic Alert Component
const Alert = ({ variant, children }) => {
  const styles = {
    primary: 'bg-cyan-100 text-cyan-700',
    secondary: 'bg-gray-200 text-gray-700',
    success: 'bg-green-100 text-green-700',
    danger: 'bg-red-200 text-red-700',
    warning: 'bg-yellow-100 text-yellow-700',
    info: 'bg-blue-100 text-blue-700',
    light: 'bg-white text-gray-700',
    dark: 'bg-gray-500 text-gray-100'
  };

  const linkStyles = {
    primary: 'text-cyan-700 hover:underline font-medium',
    secondary: 'text-gray-700 hover:underline font-medium',
    success: 'text-green-700 hover:underline font-medium',
    danger: 'text-red-700 hover:underline font-medium',
    warning: 'text-yellow-700 hover:underline font-medium',
    info: 'text-blue-700 hover:underline font-medium',
    light: 'text-gray-700 hover:underline font-medium',
    dark: 'text-gray-100 hover:underline font-medium'
  };

  // Function to format text with links
  const formatTextWithLinks = (text) => {
    if (!text) return null;
    
    if (text.includes('an example link')) {
      const parts = text.split('an example link');
      return (
        <>
          {parts[0]}
          <a href="#" className={linkStyles[variant]}>an example link</a>
          {parts[1]}
        </>
      );
    }
    
    return text;
  };

  return (
    <div className={`${styles[variant]} p-4`}>
      {typeof children === 'string' ? formatTextWithLinks(children) : children}
    </div>
  );
};

// Alert with additional content and HR divider
const AlertWithContent = ({ children }) => {
  return (
    <div className="bg-green-100 p-4 text-green-700">
      <div className="font-medium">Well done!</div>
      <div className="mt-1">
        Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
      </div>
      <hr className="my-4 border-green-200" />
      <div className="mt-1">
        Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
      </div>
    </div>
  );
};

// Dismissable Alert Component
const DismissableAlert = ({ variant, icon, children }) => {
  const [dismissed, setDismissed] = useState(false);
  
  if (dismissed) return null;
  
  const styles = {
    primary: 'bg-cyan-100 text-cyan-700',
    secondary: 'bg-gray-200 text-gray-700',
    success: 'bg-green-100 text-green-700',
    danger: 'bg-red-200 text-red-700',
    warning: 'bg-yellow-100 text-yellow-700',
    info: 'bg-blue-100 text-blue-700',
  };
  
  const icons = {
    info: (
      <span className="bg-cyan-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
        i
      </span>
    ),
    success: (
      <span className="bg-green-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </span>
    ),
    warning: (
      <span className="bg-yellow-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      </span>
    )
  };

  return (
    <div className={`${styles[variant]} p-4 flex items-start justify-between`}>
      <div className="flex items-center">
        {icons[icon]}
        <span>
          <strong>{icon.charAt(0).toUpperCase() + icon.slice(1)}!</strong> You should check in on some of those fields below.
        </span>
      </div>
      <button 
        className="text-gray-500 hover:text-gray-700" 
        onClick={() => setDismissed(true)}
      >
        ×
      </button>
    </div>
  );
};

// SVG Icon Alert Component (new component)
const SvgIconAlert = ({ variant, children }) => {
  const [dismissed, setDismissed] = useState(false);
  
  if (dismissed) return null;
  
  const styles = {
    primary: 'bg-cyan-100 text-cyan-700',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    danger: 'bg-red-200 text-red-700',
  };
  const icons = {
    primary: (
      <div className="bg-cyan-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">
        <span className="font-bold">i</span>
      </div>
    ),
    success: (
      <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
    ),
    warning: (
      <div className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      </div>
    ),
    danger: (
      <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      </div>
    )
  };
  const titles = {
    primary: 'Primary!',
    success: 'Success!',
    warning: 'Warning!',
    danger: 'Danger!'
  };
  return (
    <div className={`${styles[variant]} p-4 flex items-center justify-between`}>
      <div className="flex items-center">
        {icons[variant]}
        <span>
          <span className="font-medium">{titles[variant]}</span> You should check in on some of those fields below.
        </span>
      </div>
      <button 
        className="text-gray-500 hover:text-gray-700 text-xl" 
        onClick={() => setDismissed(true)}
      >
        ×
      </button>
    </div>
  );
};

// Main Demo Component
const AlertsDemo = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Basic Alerts Section */}
      <div className="bg-gray-100 p-4 mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Alerts</h1>
          <button className="text-gray-600 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            <span className="ml-1">show code</span>
          </button>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        <Alert variant="primary">This is a primary alert—check it out!</Alert>
        <Alert variant="secondary">This is a secondary alert—check it out!</Alert>
        <Alert variant="success">This is a success alert—check it out!</Alert>
        <Alert variant="danger">This is a danger alert—check it out!</Alert>
        <Alert variant="warning">This is a warning alert—check it out!</Alert>
        <Alert variant="info">This is a info alert—check it out!</Alert>
        <Alert variant="light">This is a light alert—check it out!</Alert>
      </div>

      {/* Link Color Alerts Section */}
      <h1 className="text-2xl font-semibold mb-4">Link Color</h1>
      <div className="space-y-4 mb-8">
        <Alert variant="primary">This is a primary alert with an example link. Give it a click if you like.</Alert>
        <Alert variant="secondary">This is a secondary alert with an example link. Give it a click if you like.</Alert>
        <Alert variant="success">This is a success alert with an example link. Give it a click if you like.</Alert>
        <Alert variant="danger">This is a danger alert with an example link. Give it a click if you like.</Alert>
        <Alert variant="warning">This is a warning alert with an example link. Give it a click if you like.</Alert>
        <Alert variant="info">This is a info alert with an example link. Give it a click if you like.</Alert>
        <Alert variant="light">This is a light alert with an example link. Give it a click if you like.</Alert>
        <Alert variant="dark">This is a dark alert with an example link. Give it a click if you like.</Alert>
      </div>
      
      {/* Additional Content Section */}
      <h1 className="text-2xl font-semibold mb-4">Additional Content</h1>
      <div className="space-y-4 mb-8">
        <AlertWithContent />
      </div>
      
      {/* Dismissable Alert Section */}
      <div className="bg-gray-100 p-4 mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Dismissable alert with icon</h1>
          <button className="text-gray-600 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            <span className="ml-1">show code</span>
          </button>
        </div>
      </div>
      
      {/* Font Icon Section */}
      <h1 className="text-2xl font-semibold mb-4">Font Icon</h1>
      <div className="space-y-4 mb-8">
        <DismissableAlert variant="primary" icon="info" />
        <DismissableAlert variant="success" icon="success" />
        <DismissableAlert variant="warning" icon="warning" />
      </div>
      
      {/* SVG Icon Alerts Section (new section) */}
      <div className="bg-gray-100 p-4 mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">SVG Icon Alerts</h1>
          <button className="text-gray-600 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            <span className="ml-1">show code</span>
          </button>
        </div>
      </div>
      
      <h1 className="text-2xl font-semibold mb-4">SVG Icon</h1>
      <div className="space-y-4 mb-8">
        <SvgIconAlert variant="primary" />
        <SvgIconAlert variant="success" />
        <SvgIconAlert variant="warning" />
        <SvgIconAlert variant="danger" />
      </div>
    </div>
  );
};

export default AlertsDemo;
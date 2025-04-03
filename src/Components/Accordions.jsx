import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChevronUp, 
  faChevronDown, 
  faChevronRight 
} from '@fortawesome/free-solid-svg-icons';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-2">
      <button
        className={`w-full flex justify-between items-center p-4 ${
          isOpen 
            ? 'bg-teal-500 text-white' 
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronRight} />
      </button>
      {isOpen && (
        <div className="p-4 border border-gray-200">
          {children}
        </div>
      )}
    </div>
  );
};

const StyledAccordion = ({ title, children, defaultOpen = false, variant = 'default' }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-2">
      <button
        className={`w-full flex justify-between items-center p-4 ${
          variant === 'default'
            ? 'bg-teal-500 text-white'
            : 'border border-teal-500 text-teal-500'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <FontAwesomeIcon 
          icon={isOpen ? faChevronDown : faChevronUp} 
          className={variant !== 'default' ? 'text-teal-500' : ''}
        />
      </button>
      {isOpen && (
        <div className="p-4 border border-gray-200">
          {children}
        </div>
      )}
    </div>
  );
};

const AccordionsDemo = () => {
  return (
    <div>
    
      <header className="bg-gray-100 py-6 px-8 border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl text-gray-600 font-light">ELEMENTS</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-400">HOME</a></li>
              <li className="text-gray-400">/</li>
              <li><a href="#" className="text-gray-800">COMPONENTS</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="container mx-auto p-4">
        <div className="bg-gray-100 p-4 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-normal">Accordions</h2>
            <button className="px-2 py-1 border border-gray-300 rounded">
              &lt;&gt; show code
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="mb-2 text-gray-600">Example 1</h3>
            <Accordion title="How can I manage Instant Book ?" defaultOpen={true}>
              <p className="text-gray-700">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                assumenda shoreditch et.
              </p>
            </Accordion>
            <Accordion title="How do I use my calendar?">
           
            </Accordion>
            <Accordion title="How do I use my calendar?">
             
            </Accordion>
          </div>

          <div>
            <h3 className="mb-2 text-gray-600">Example 2</h3>
            <StyledAccordion title="How can I manage Instant Book?" variant="outlined" defaultOpen={true}>
              <p className="text-gray-700">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                assumenda shoreditch et.
              </p>
            </StyledAccordion>
            <StyledAccordion title="How do I use my calendar?" variant="outlined">
            
            </StyledAccordion>
            <StyledAccordion title="How do I use my calendar?" variant="outlined">
            
            </StyledAccordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionsDemo;
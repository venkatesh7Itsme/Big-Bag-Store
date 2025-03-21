import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowRight, 
  faArrowLeft, 
  faCheck, 
  
} from '@fortawesome/free-solid-svg-icons';

const CheckoutProcess = () => {
  const [currentStep, setCurrentStep] = useState(1);
  
  // Form data state
  const [shippingData, setShippingData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    address: '',
    phone: '',
    city: '',
    zipCode: '',
    country: '',
    fax: ''
  });
  
  const [selectedShipping, setSelectedShipping] = useState('standard');
  const [paymentMethod, setPaymentMethod] = useState('credit');
  
  // Order summary data
  const orderSummary = {
    subtotal: 99.00,
    shippingHandling: 18.00,
    estimatedTax: 0.00,
    total: 117.00
  };
  
  // Cart items
  const cartItems = [
    { id: 1, name: 'Italian Winter Hat', price: 23.00, quantity: 1, image: 'https://bigbag-html.netlify.app/assets/img/products/cart-image1.jpg' },
    { id: 2, name: 'Italian Winter Hat', price: 43.00, quantity: 1, image: 'https://bigbag-html.netlify.app/assets/img/products/cart-image2.jpg' },
    { id: 3, name: 'Italian Winter Hat', price: 33.00, quantity: 1, image: 'https://bigbag-html.netlify.app/assets/img/products/cart-image3.jpg' }
  ];
  
  // Shipping methods
  const shippingMethods = [
    { id: 'standard', name: 'Standard Ground (USPS)', price: 7.50, delivery: 'Delivered in 8-12 business days.' },
    { id: 'premium', name: 'Premium Ground (UPS)', price: 12.50, delivery: 'Delivered in 4-7 business days.' },
    { id: 'ups2', name: 'UPS 2 Business Day', price: 15.00, delivery: 'Orders placed by 9.45AM PST will ship same day.' },
    { id: 'ups1', name: 'UPS 1 Business Day', price: 35.00, delivery: 'Orders placed by 9.45AM PST will ship same day.' }
  ];
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingData(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle shipping method selection
  const handleShippingSelect = (id) => {
    setSelectedShipping(id);
  };
  
  // Handle payment method selection
  const handlePaymentSelect = (method) => {
    setPaymentMethod(method);
  };
  
  // Handle continue button click
  const handleContinue = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  // Handle back button click
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  // Handle direct navigation by clicking on step indicators
  const handleStepClick = (step) => {
    // Allow clicking on steps that are accessible based on the current progress
    if (step <= 3) {
      setCurrentStep(step);
    }
  };
  
  // Render progress bar with clickable steps
  const renderProgressBar = () => {
    return (
      <div className="flex items-center justify-between mb-8">
        <div 
          className="flex-1 text-center cursor-pointer" 
          onClick={() => handleStepClick(1)}
        >
          <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto ${currentStep >= 1 ? 'bg-teal-400' : 'bg-gray-200'}`}>
            {currentStep > 1 ? <FontAwesomeIcon icon={faCheck} className="text-white" size="xs" /> : <span className="text-white">1</span>}
          </div>
          <div className="mt-2 text-sm">Shipping Method</div>
        </div>
        <div className="flex-1 h-1 bg-gray-200">
          <div className={`h-full ${currentStep >= 2 ? 'bg-teal-400' : 'bg-gray-200'}`} />
        </div>
        <div 
          className="flex-1 text-center cursor-pointer" 
          onClick={() => handleStepClick(2)}
        >
          <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto ${currentStep >= 2 ? 'bg-teal-400' : 'bg-gray-200'}`}>
            {currentStep > 2 ? <FontAwesomeIcon icon={faCheck} className="text-white" size="xs" /> : <span className="text-white">2</span>}
          </div>
          <div className="mt-2 text-sm">Payment Method</div>
        </div>
        <div className="flex-1 h-1 bg-gray-200">
          <div className={`h-full ${currentStep >= 3 ? 'bg-teal-400' : 'bg-gray-200'}`} />
        </div>
        <div 
          className="flex-1 text-center cursor-pointer" 
          onClick={() => handleStepClick(3)}
        >
          <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto ${currentStep >= 3 ? 'bg-teal-400' : 'bg-gray-200'}`}>
            <span className="text-white">3</span>
          </div>
          <div className="mt-2 text-sm">Review</div>
        </div>
      </div>
    );
  };
  
  // Render order summary
  const renderOrderSummary = () => {
    return (
      <div className="bg-white p-6 rounded border">
        <h2 className="text-xl font-medium mb-4">Order Summary</h2>
        <p className="text-gray-600 mb-4">Excepteur sint occaecat cupidat non proi dent sunt officia.</p>
        
        <div className="space-y-3 mb-4">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${orderSummary.subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping & Handling</span>
            <span>${orderSummary.shippingHandling.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Estimated Tax</span>
            <span>${orderSummary.estimatedTax.toFixed(2)}</span>
          </div>
        </div>
        
        <div className="border-t pt-3">
          <div className="flex justify-between font-medium">
            <span>Total</span>
            <span>USD ${orderSummary.total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    );
  };
  
  // Render shipping form
  const renderShippingForm = () => {
    return (
      <div className="mb-8">
        <h2 className="text-xl font-medium mb-6">Shipping Address</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-sm">First Name</label>
            <input
              type="text"
              name="firstName"
              value={shippingData.firstName}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-100 rounded"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={shippingData.lastName}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-100 rounded"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={shippingData.email}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-100 rounded"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm">Company</label>
            <input
              type="text"
              name="company"
              value={shippingData.company}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-100 rounded"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm">Address</label>
            <input
              type="text"
              name="address"
              value={shippingData.address}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-100 rounded"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm">Phone</label>
            <input
              type="tel"
              name="phone"
              value={shippingData.phone}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-100 rounded"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm">City</label>
            <input
              type="text"
              name="city"
              value={shippingData.city}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-100 rounded"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm">Zip Code</label>
            <input
              type="text"
              name="zipCode"
              value={shippingData.zipCode}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-100 rounded"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm">Country</label>
            <select
              name="country"
              value={shippingData.country}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-100 rounded"
            >
              <option value="">Select Country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="BD">Bangladesh</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm">Fax</label>
            <input
              type="text"
              name="fax"
              value={shippingData.fax}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-100 rounded"
            />
          </div>
        </div>
        
        <h2 className="text-xl font-medium mt-8 mb-6">Select A Shipping Method</h2>
        
        <div className="space-y-4">
          {shippingMethods.map(method => (
            <div key={method.id} className="flex items-center">
              <input
                type="radio"
                id={method.id}
                name="shippingMethod"
                checked={selectedShipping === method.id}
                onChange={() => handleShippingSelect(method.id)}
                className="w-5 h-5 text-teal-400"
              />
              <label htmlFor={method.id} className="ml-3 flex-1">
                <div className="flex justify-between">
                  <span>{method.name}</span>
                  <span>${method.price.toFixed(2)}</span>
                </div>
                <div className="text-sm text-gray-600">{method.delivery}</div>
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  // Render payment form
  const renderPaymentForm = () => {
    return (
      <div className="mb-8">
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-2">Shipping Information</h2>
          <div className="border-b pb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium mb-2">Shipping Address</h3>
                <div className="text-sm text-gray-600">
                  <p>Sri Dalim</p>
                  <p>Shamoli, Dhaka 120, Bangladesh</p>
                  <p>415-555-2671</p>
                  <p>example78@gmail.com</p>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Shipping Method</h3>
                <div className="text-sm text-gray-600">
                  <p>Standard Ground (USPS) - $7.50</p>
                  <p>Delivered in 8-12 business days.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <h2 className="text-lg font-medium mb-4">Billing Information</h2>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-center">
            <input
              type="radio"
              id="paypal"
              name="paymentMethod"
              checked={paymentMethod === 'paypal'}
              onChange={() => handlePaymentSelect('paypal')}
              className="w-5 h-5 text-teal-400"
            />
            <label htmlFor="paypal" className="ml-3">
              Pay with Paypal
            </label>
          </div>
          
          <div>
            <div className="flex items-center">
              <input
                type="radio"
                id="credit"
                name="paymentMethod"
                checked={paymentMethod === 'credit'}
                onChange={() => handlePaymentSelect('credit')}
                className="w-5 h-5 text-teal-400"
              />
              <label htmlFor="credit" className="ml-3">
                Credit Card
              </label>
            </div>
            
            {paymentMethod === 'credit' && (
              <div className="mt-4 ml-8">
                <p className="text-sm mb-2">We accept following credit card</p>
                <div className="flex space-x-2 mb-6">
                  <div className="w-12 h-8 bg-gray-200 rounded"></div>
                  <div className="w-12 h-8 bg-gray-200 rounded"></div>
                  <div className="w-12 h-8 bg-gray-200 rounded"></div>
                  <div className="w-12 h-8 bg-gray-200 rounded"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block mb-2 text-sm">Name on Card</label>
                    <input type="text" className="w-full p-3 bg-gray-100 rounded" />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm">Card Number</label>
                    <input type="text" className="w-full p-3 bg-gray-100 rounded" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block mb-2 text-sm">Expiration Date</label>
                    <div className="flex space-x-2">
                      <select className="w-full p-3 bg-gray-100 rounded">
                        <option>Year</option>
                      </select>
                      <select className="w-full p-3 bg-gray-100 rounded">
                        <option>Month</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm">CVC/CVV</label>
                    <input type="text" placeholder="1234" className="w-full p-3 bg-gray-100 rounded" />
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="flex items-center">
            <input
              type="radio"
              id="rewards"
              name="paymentMethod"
              checked={paymentMethod === 'rewards'}
              onChange={() => handlePaymentSelect('rewards')}
              className="w-5 h-5 text-teal-400"
            />
            <label htmlFor="rewards" className="ml-3">
              Reward Points
            </label>
          </div>
        </div>
      </div>
    );
  };
  
  // Render review
  const renderReview = () => {
    return (
      <div className="mb-8">
        <div className="mb-8">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border">
              <thead>
                <tr className="bg-teal-400 text-white">
                  <th className="py-3 px-4 text-left">Product Name</th>
                  <th className="py-3 px-4 text-center">Quantity</th>
                  <th className="py-3 px-4 text-right">Sub Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <img src={item.image} alt={item.name} className="w-16 h-16 mr-4" />
                        <span>{item.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">{item.quantity}</td>
                    <td className="py-4 px-4 text-right">$ {item.price.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <h3 className="font-medium mb-2">Shipping Address</h3>
            <div className="text-sm text-gray-600">
              <p>Sri Dalim</p>
              <p>Shamoli, Dhaka 120, Bangladesh</p>
              <p>415-555-2671</p>
              <p>example78@gmail.com</p>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-2">Shipping Method</h3>
            <div className="text-sm text-gray-600">
              <p>Standard Ground (USPS) - $7.50</p>
              <p>Delivered in 8-12 business days.</p>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-2">Payment Method</h3>
            <div className="text-sm text-gray-600">
              <p>Credit Card</p>
              <p>**** **** **** 2641</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  // Render step content
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return renderShippingForm();
      case 2:
        return renderPaymentForm();
      case 3:
        return renderReview();
      default:
        return null;
    }
  };
  
  // Render action buttons
  const renderActions = () => {
    return (
      <div className="flex justify-between">
        {currentStep > 1 ? (
          <button
            onClick={handleBack}
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded transition duration-200 hover:bg-gray-300"
          >
            <div className="flex items-center">
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              BACK
            </div>
          </button>
        ) : (
          <div></div>
        )}
        
        <button
          onClick={handleContinue}
          className="px-6 py-3 bg-teal-400 text-white rounded transition duration-200 hover:bg-teal-500"
        >
          <div className="flex items-center">
            {currentStep < 3 ? 'CONTINUE' : 'PLACE ORDER'}
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </div>
        </button>
      </div>
    );
  };
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto p-6">
        <div className="py-4 border-b mb-6">
          <h1 className="text-2xl text-gray-600 font-medium">
            {currentStep === 1 ? 'BILLING & SHIPPING ADDRESS' : 
             currentStep === 2 ? 'PAYMENT METHOD' : 'REVIEW'}
          </h1>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-2/3">
            <div className="bg-white p-6 rounded border mb-6">
              {renderProgressBar()}
              {renderStepContent()}
              {renderActions()}
            </div>
          </div>
          
          <div className="lg:w-1/3">
            {renderOrderSummary()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProcess;
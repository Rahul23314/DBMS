import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Step 1: Import useNavigate

function Check() {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedLab, setSelectedLab] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const navigate = useNavigate(); // Step 2: Initialize navigate function using useNavigate


  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
    // Reset selected lab and product when department changes
    setSelectedLab('');
    setSelectedProduct('');
  };

  const handleLabChange = (event) => {
    setSelectedLab(event.target.value);
  };

  const handleProductChange = (event) => {
    setSelectedProduct(event.target.value);
  };

  const renderLabOptions = () => {
    switch (selectedDepartment) {
      case 'Computer Engineering':
        return (
          <>
            <option value="">Select the Lab-ID</option>
            <option value="A1-101">A1-101</option>
            <option value="A1-102">A1-102</option>
            <option value="A1-103">A1-103</option>
          </>
        );
      case 'Information Technology':
        return (
          <>
            <option value="">Select the Lab-ID</option>
            <option value="A3-301">A3-301</option>
            <option value="A3-302">A3-302</option>
            <option value="A3-303">A3-303</option>
            <option value="A3-401">A3-401</option>
            <option value="A3-402">A3-402</option>
            <option value="A3-403">A3-403</option>
          </>
        );
      case 'Electronics & Telecommunication':
        return (
          <>
            <option value="">Select the Lab-ID</option>
            <option value="A3-201">A3-201</option>
            <option value="A3-202">A3-202</option>
            <option value="A3-203">A3-203</option>
          </>
        );
      default:
        return <option value="">Select the Lab-ID</option>;
    }
  };

  const handleSubmit = (event) => {
    // Handle form submission here
    event.preventDefault();
    // Navigate to the ProductPage with the selected product name
    navigate(`/product/${selectedProduct}`);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="selectDepartment" className="block text-gray-700 font-bold mb-2">Choose a Department:</label>
          <select id="selectDepartment" value={selectedDepartment} onChange={handleDepartmentChange} className="w-full p-2 border border-gray-400 rounded-md">
            <option value="">Select the Department</option>
            <option value="Computer Engineering">Computer Engineering</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Electronics & Telecommunication">Electronics & Telecommunication</option>
          </select>
        </div>

        {selectedDepartment && (
          <div>
            <label htmlFor="selectLab" className="block text-gray-700 font-bold mb-2">Choose a Lab-ID:</label>
            <select id="selectLab" value={selectedLab} onChange={handleLabChange} className="w-full p-2 border border-gray-400 rounded-md">
              {renderLabOptions()}
            </select>
            {selectedLab && <p className="text-gray-600 mt-2">You selected Lab-ID: {selectedLab}</p>}
          </div>
        )}

        {selectedDepartment && selectedLab && (
          <div>
            <label htmlFor="selectProduct" className="block text-gray-700 font-bold mb-2">Choose a Product:</label>
            <select id="selectProduct" value={selectedProduct} onChange={handleProductChange} className="w-full p-2 border border-gray-400 rounded-md">
              <option value="">Select the Product</option>
              <option value="Computer">Computer</option>
              <option value="Printers">Printers</option>
              <option value="LAN">LAN</option>
            </select>
            {selectedProduct && <p className="text-gray-600 mt-2">You selected Product: {selectedProduct}</p>}
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">Submit</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Check;
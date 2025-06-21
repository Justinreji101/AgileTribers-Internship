import React, { useState } from 'react';
import './SearchFilter.css';

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sample data to filter
  const items = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew"
  ];

  // Filter items based on search term
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-container">
      <h2>Search Filter</h2>
      <input
        type="text"
        placeholder="Search fruits..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      
      <div className="results-container">
        {filteredItems.length > 0 ? (
          <ul className="results-list">
            {filteredItems.map((item, index) => (
              <li key={index} className="result-item">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-results">No matching items found</p>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;
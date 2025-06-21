import React, { useState } from 'react';
import './TabSystem.css';

const TabSystem = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Tab content data
  const tabs = [
    {
      label: "Home",
      content: "Welcome to our homepage! This is the default tab content."
    },
    {
      label: "Products",
      content: "Check out our amazing products. Special offers available!"
    },
    {
      label: "Contact",
      content: "Reach us at: contact@example.com | Phone: 123-456-7890"
    }
  ];

  return (
    <div className="tab-container">
      <div className="tab-header">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        <p>{tabs[activeTab].content}</p>
      </div>
    </div>
  );
};

export default TabSystem;
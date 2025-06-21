import React, { useState, useRef, useEffect } from 'react';
import './Dropdown.css';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  // Dropdown menu items
  const menuItems = [
    { id: 1, label: 'Profile', link: '#' },
    { id: 2, label: 'Settings', link: '#' },
    { id: 3, label: 'Logout', link: '#' },
  ];

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="dropdown-button">
        Menu ▾
      </button>

      {isOpen && (
        <ul className="dropdown-menu">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a href={item.link} className="dropdown-item">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
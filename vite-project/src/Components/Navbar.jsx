import { useState } from "react";
import "./Navbar.css"; // Import CSS for styling

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav className={`navbar ${darkMode ? "dark" : ""}`}>
      <div className="container">
        

        {/* Desktop Menu */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        {/* Dark Mode Toggle */}
        <button className="dark-mode-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* Mobile Menu Button */}
        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
    </nav>
  );
}

import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
      <nav className="bg-primary navbar-nav">
        <div className="flex items-center justify-between container mx-auto py-4">
          <Link
            to="/"
            className="text-secondary font-medieval text-2xl font-bold tracking-wider"
          >
            Medieval Nav
          </Link>
          <div>
            <Link
              to="/"
              className="text-secondary px-4 py-2 rounded-md hover:bg-secondary hover:text-primary"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-secondary px-4 py-2 rounded-md hover:bg-secondary hover:text-primary"
            >
              About
            </Link>
            <Link
              to="/products"
              className="text-secondary px-4 py-2 rounded-md hover:bg-secondary hover:text-primary"
            >
              Products
            </Link>
          </div>
        </div>
      </nav>
    );
  };

export default NavBar

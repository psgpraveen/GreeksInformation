import React from 'react';
import { Link } from 'react-router-dom';
import image from './Psgpraveen.png';
// const router = express.Router();
// const express = require("express");

// import axios from 'axios';
// const { username } = require("./name");

const header = ({userName}) => {

  const navigations = [
    {
      name: 'Home',
      path: '/home',
    },
    {
      name: 'Products',
      path: '/products',
    },
    {
      name: 'About',
      path: '/about',
    },
    {
      name: 'Contact',
      path: '/contact',
    },
  ];
  // const setUserNameAfterLogin = (name) => {
  //   setUserName(name);
  // };

  return ( 
    <header className="text-gray-600 p1 body-font">
      <div className="container cursor-pointer mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to={'/'} className="flex titleFont font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={image} width="40%" alt="Logo" />
          {/* <span className="ml-3 text-xl">Psg E-commerce</span> */}
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {
            navigations.map((navigation) => (
              <Link to={navigation.path} className="mr-5 hover:text-gray-900" key={navigation.name}>
                {navigation.name}
              </Link>
            ))
          }
        </nav>
        <Link to={'/cart'} className="inline-flex items-center text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0">
          Go to Cart
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
        {userName ? (
          <span className="mx-2 text-2xl border-2 p-2 border-gray-100 rounded-full">{userName}</span>
        ) : (
          <span className="mx-2 p2 text-2xl border-2 p-2 border-gray-100 rounded-full">Psgpraveen</span>
        )}
      </div>
    </header>
  );
};

export default header;

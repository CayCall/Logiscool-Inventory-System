import React from 'react';
import { Link } from 'react-router-dom';

const Sidemenu = () => {
  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Today's Log", path: "/log" },
    { name: "Profile", path: "/profile" },
    { name: "Logout", path: "/logout" },
  ];

  return (
    <div className="fixed top-22.5 left-0 flex flex-col w-48 h-screen border-r border-t border-gray-200 rounded-r-2xl p-4 bg-[rgb(255,255,255)]">
      <div className='mb-4 mt-4'>
        <h2 className="text-sm font-normal text-gray-500 mb-1 text-left">Logged in as Trainer</h2>
        <h2 className="text-lg font-medium text-lime-400 text-left"> Caleb</h2>
      </div>
      <hr className='h-px border border-gray-200' />
      {menuItems.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className="mb-3 px-4 py-2 rounded text-gray-500 text-left hover:text-white! hover:bg-blue-400 transition-colors"
        >
          {item.name}
        </Link>
      ))}
      <hr className='h-px border border-gray-200' />
    </div>
  );

};

export default Sidemenu;

import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const MainLayout = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-12 py-2">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster></Toaster>
        </div>
    );
};

export default MainLayout;
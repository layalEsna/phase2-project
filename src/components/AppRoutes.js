import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import Home from '../pages/Home';
import Search from './Search';
import Form from './Form';
import ErrorPage from '../pages/ErrorPage';


const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="form" element={<Form />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
    </Routes>
);

export default AppRoutes;

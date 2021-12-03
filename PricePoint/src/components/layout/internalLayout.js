import React from 'react'
import { NavigationLeft } from '../navagation/navLeft'
import { Outlet } from 'react-router-dom';

export const InternalLayout = () => {
    return (
        <div>
            <NavigationLeft />
            <Outlet />
        </div>
    )
}
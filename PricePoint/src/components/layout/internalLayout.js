import React from 'react'
import { NavigationTop } from '../navagation/navTop'
import { NavigationLeft } from '../navagation/navLeft'
import { Outlet } from 'react-router-dom';

export const InternalLayout = () => {
    return (
        <div>
            {/* <NavigationTop /> */}
            <NavigationLeft />
            <Outlet />
        </div>
    )
}
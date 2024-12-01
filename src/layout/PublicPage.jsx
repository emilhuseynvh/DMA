import React from 'react'
import { Outlet } from 'react-router-dom'

const PublicPage = () => {
    return (
        <>
            <Outlet />
        </>
    )
}

export default PublicPage
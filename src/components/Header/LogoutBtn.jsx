import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth_service'
import { logout } from '../../redux/authSlice'
import { useNavigate } from 'react-router-dom'


function LogoutBtn() {
    const dispatch = useDispatch()
    const navigat = useNavigate()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
        navigat('/')
    }
    return (
        <button
            className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
            onClick={logoutHandler}
        >Logout</button>
    )
}

export default LogoutBtn

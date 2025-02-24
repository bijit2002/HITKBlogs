import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import Questions from './Pages/Questions/Questions'
import AskQuestion from './Pages/AskQuestion/AskQuestion'
import DisplayQuestion from './Pages/Questions/DisplayQuestion'
import Users from './Pages/Users/Users'
import UserProfile from './Pages/UserProfile/UserProfile'
import Tags from './Pages/Tags/Tags'
function AllRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Auth' element={<Auth />} />
            <Route path='/Statuses' element={<Questions />} />
            <Route path='/PostStatus' element={<AskQuestion />} />
            <Route path='/Statuses/:id' element={<DisplayQuestion />} />
            <Route path='/Users' element={<Users/>} />
            <Route path='/Users/:id' element={<UserProfile/>} />
            <Route path='/Tags' element={<Tags/>} />
        </Routes>
    )
}

export default AllRoutes
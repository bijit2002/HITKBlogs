import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import logo from '../../assets/logo.png'
import search from '../../assets/search-solid.svg'
import Avatar from '../../components/Avatar/Avatar'
import Button from '../../components/Button/Button'
import './Navbar.css'
import { setCurrentUser } from '../../actions/currentUser'
import decode from 'jwt-decode'

function Navbar() {
    const dispatch = useDispatch()
    var User = useSelector(state => state.currentUserReducer)
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' })
        navigate('/')
        dispatch(setCurrentUser(null))
    }

    useEffect(() => {
        const token = User?.token
        if(token){
            const decodedToken = decode(token)
            if(decodedToken.exp * 1000<new Date().getTime()){
                handleLogout()
            }
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    }, [dispatch])

    return (
        <nav className='main-nav'>
            <div className='navbar'>
                <Link to='/' className='nav-item nav-logo'>
                    <div className='nav-p'>HITKblogs</div>
                </Link>
                <form>
                  This Is An Intra College Blog Posting Application
                </form>
                {User === null ?
                    <Link to='/Auth' className='nav-item nav-links nav-btn'>Log in</Link> :
                    <>
                        <Avatar backgroundColor='purple' px='10px' py='7px' borderRadius='50%' color='white'><Link to={`/Users/${User?.result?._id}`} style={{ color: 'white', textDecoration: "none" }}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
                        <button className='nav-item nav-links nav-btn' onClick={handleLogout}>Log out</button>
                    </>
                }
            </div>
        </nav>
    )
}

export default Navbar
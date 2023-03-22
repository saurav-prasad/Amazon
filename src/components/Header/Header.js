import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useCartState } from '../context/cartState';
import { signOut } from "firebase/auth";
import { auth } from '../../firebase';

function Header() {
    const [{ basket, user }] = useCartState()
    const navigate = useNavigate()
    const logInOut = () => {
        if (user) {
            signOut(auth).then(() => {
                // Sign-out successful.
                navigate('/login')
            }).catch((error) => {
                // An error happened.
            });
        }
    }
    const checkLogin = ()=>{
        console.log(!user);
        if(!user){
            navigate('/');
            console.log("object");
        }
    }
    return (
        <nav className='headerNav'>
            {/* Logo */}
            <Link to="/">
                <img className='logoImg' src="images/logo.png" alt="" />
            </Link>
            {/* Search Section */}
            <div className='headerSearchBox'>
                <input type="text" placeholder='Search Amazon' className='headerInput' />
                <SearchIcon className='inputSearchLogo' />
            </div>

            {/* 4 Links */}
            <div className='headerLinkSection'>
                {/* 1 link */}
                <Link to="/login" className='headerLink'>
                    <div onClick={logInOut} className="headerLinkBox">
                        <span className='topLink'>Hello, {user ? user?.email : 'USER'}</span>
                        <span className='bottomLink'>{user ? 'Sign Out' : "Sign In"}</span>
                    </div>
                </Link>
                {/* 2 link */}
                <Link className='headerLink'>
                    <div className="headerLinkBox">
                        <span className='topLink'>Returns</span>
                        <span className='bottomLink'>& Orders</span>
                    </div>
                </Link>
                {/* 3 link */}
                <Link className='headerLink'>
                    <div className="headerLinkBox">
                        <span className='topLink'>Your</span>
                        <span className='bottomLink'>Prime</span>
                    </div>
                </Link>
                {/* 4 link */}
                <Link to="/checkout" className='headerLink'>
                    <div onClick={checkLogin} className="headerLinkBoxCart">
                        <ShoppingBasketIcon />
                        <div className='headerCartBox'>
                            <span className='topLink cartCount'>{basket?.length}</span>
                        </div>
                    </div>
                </Link>
            </div>
        </nav >
    )
}

export default Header
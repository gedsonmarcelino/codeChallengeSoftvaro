import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../../store';
import Badge from '../../../utils/Badge.svg';
import AuthSocial from '../../AuthSocial';
import Modal from '../../Modal';

import './styles.scss'

function Header() {
  // --- Hooks ---
  const { isAuthenticated, user, setUserData } = useUserContext()

  // --- States ---
  const [isOpen, setIsOpen] = useState(false)

  // --- Handlers ---
  function handleOnLogin(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    setIsOpen(true)
  }

  // --- Renders ---
  return (
    <div className='header'>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <AuthSocial onCloseModal={() => setIsOpen(false)} />
      </Modal>

      <div className='left-header'>
        <Link className='badge' to='/'>
          <img src={Badge} alt='Badge' />
        </Link>
        <Link className='header-link link1' to='/nanny'>
          <h5>Create Your Nanny Share</h5>
        </Link>
        <Link className='header-link link2' to='/shares'>
          <h5>Browse Shares</h5>
        </Link>
        <Link className='header-link link3' to='/story'>
          <h5>Our Story</h5>
        </Link>
      </div>
      <div className='right-header'>
        <button type='button' className='header-button'>
          <h5>Become a Nanny Share Host</h5>
        </button>

        {!isAuthenticated()
          ? (
            <Link className='header-link sign-in' to='/login' onClick={(event) => handleOnLogin(event)}>
              <h5>Sign In</h5>
            </Link>
          )
          : (
            <div className='user-content'>
              <span>{user.displayName}</span>
              <button type="button" onClick={() => setUserData({} as any)}>Logout</button>
            </div>
          )
        }
      </div>

    </div>
  );
}
export default Header;

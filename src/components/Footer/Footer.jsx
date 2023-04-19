import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

import './Footer.scss'

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <p>&copy; 2023 XXX Company. All rights resvered.</p>
          </div>
          <div lassName='col-md-6'>
            <ul className='social-media'>
              <li>
                <a href='https://twitter.com'>
                  <FaTwitter />
                </a>
              </li>
            </ul>

            <ul className='social-media'>
              <li>
                <a href='https://www.tiktok.com/'>
                  <FaTiktok />
                </a>
              </li>
            </ul>

            <ul className='social-media'>
              <li>
                <a href='https://instagram.com'>
                  <FaFacebook />
                </a>
              </li>
            </ul>

            <ul className='social-media'>
              <li>
                <a href='https://facebook.com'>
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
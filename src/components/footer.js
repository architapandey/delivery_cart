import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {
  return (
    <div className='footer-box'>
        <div className='footer-box-lorem'>
            <div className='lorem-items'>
                <h3>LOREM</h3>
                <li>Dummy</li>
                <li>Dummy</li>
                <li>Dummy</li>
                <li>Dummy</li>
                <li>Dummy</li>
            </div>
            <div className='lorem-items'>
                <h3>LOREM</h3>
                <li>Dummy</li>
                <li>Dummy</li>
                <li>Dummy</li>
                <li>Dummy</li>
                <li>Dummy</li>
            </div>
            <div className='lorem-items'>
                <h3>LOREM</h3>
                <li>Dummy</li>
                <li>Dummy</li>
                <li>Dummy</li>
                <li>Dummy</li>
                <li>Dummy</li>
            </div>
            <div className='lorem-items'>
                <h3>LOREM</h3>
                <li>Dummy</li>
                <li>Dummy</li>
                <li>Dummy</li>
                <li>Dummy</li>
                <li>Dummy</li>
            </div>
        </div>
        <div className='contact-details'>
            <div className='call-us'>CALL US</div>
            <div className='days'><span>Monday - Friday</span><span>Saturday & Sunday</span></div>
            <div className='days'><span>8am to 9pm IST</span><span>10am to 6pm IST</span></div>
            <div className='contact-number'><PhoneIcon/>1800-123-1234</div>
            <div className='contact-email'>support.us@test.com</div>
            
        </div>
    </div>
  )
}

export default Footer
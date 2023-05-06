import React from 'react'
import footer from '../../assets/footer.png'
import '../Footer/Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        
        <div className='footer-left'>
           <h4>CONTACT</h4>
        <div class='contact-info'>
            <span>(123) 456-789</span>
            <span>email@yoursite.com</span>
            <span>Pet Street 123 - New York</span>
         </div>

        </div>
        
        <div className='footer-center'>
            <div className='logo-footer'>
                <img src={footer} alt="footerlogo"/>
                <ul class="footer-feature">
                    <h4>QUICK LINKS</h4>
                <li>HOME</li>
                <li>SERVICES</li>
                <li>SHOP</li>
                </ul>


            </div>

        </div>
        <div className='footer-right'>
            <h4>WORKING SPACE</h4>
            <ul>
                <li> Open 9am - 10pm</li>
                <li>Holidays - Closed</li>
                <li>Weekends - Closed</li>

            </ul>

        </div>
        </div>
      
  )
}

export default Footer

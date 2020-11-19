import React from 'react';
import'./Footer.css'

const Footer = () => {
    return (
        <div  className='footer-main'>
              <div className='row'>
                    <div className='col-md-6'>
                        <h1>Let us handle your</h1>
                        <h1>project, professionaly</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, explicabo.</p>
        
                    </div>
                    <div className='col-md-6'>
                        <input className='footer' type='text' placeholder='your email address'></input>
                        <input className='footer' type="text" placeholder='Your name /company'/> 
                        <input type='text' className='message' placeholder='Your message'></input>
                        <button className='btn btn-dark'>Click Me</button>
                        
                    </div>
                   
                </div>
                <p className='footer-p'><small>copyright orange lab 2020</small></p>
                
        </div>
       
    );
};

export default Footer;
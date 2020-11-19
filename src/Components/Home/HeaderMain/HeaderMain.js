import React from 'react';
import Frame from '../../../images/logos/Frame.png'

const HeaderMain = () => {
    return (
        <main className='row d-flex align-items-center mt-5'>  
                    <div className="col-md-4 offset-md-1">
                        <h1>Let’s Grow Your Brand To The Next Level</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat</p>
                        <button className='btn btn-dark text-white w-50'>Hire Us</button>
                    </div>
                    <div className="col-md-6">
                        <img src={Frame} className='img-fluid' alt=""/>
                    </div> 
        </main>
    );
};

export default HeaderMain;
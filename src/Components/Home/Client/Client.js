import React from 'react';
import slack from '../../../images/logos/slack.png'
import google from '../../../images/logos/google.png'
import uber from '../../../images/logos/uber.png'
import netflix from '../../../images/logos/netflix.png'
import airbnb from '../../../images/logos/airbnb.png'

const Client = () => {
    return (
        <div className='d-flex justify-content-center p-5'>
            
          <div>
                    <img src={slack} className=' w-50 img-fluid' alt=""/>
                </div>
                <div>
                    <img src={google} className='w-50 img-fluid' alt=""/>
                </div>
                <div>
                    <img src={uber} className='w-50 img-fluid ' alt=""/>
                </div>
                <div>
                    <img src={netflix} className='w-50 img-fluid ' alt=""/>
                </div>
                <div>
                    <img src={airbnb} className='w-50 img-fluid' alt=""/>
                </div>
        </div>
    );
};

export default Client;
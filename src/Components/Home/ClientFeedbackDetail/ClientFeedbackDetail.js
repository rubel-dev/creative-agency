import React from 'react';
import './ClientFeedbackDetail.css'

const ClientFeedbackDetail = ({client}) => {
    return (
       
            <div className="col-md-4 text-center">
                
                <div className='header-content'>
                    <div className='img'>
                        <img  className="w-50 img img-fluid" src={client.img} alt=""/>

                    </div>
                    <div className='title'>
                        <h5>{client.name}</h5>
                        <h6>{client.job}</h6>
                    </div>
                </div>
                <div className='content'>
                    <p>{client.description}</p>
                </div>
            </div> 
         
    );
};

export default ClientFeedbackDetail;
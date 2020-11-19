import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className='col-md-4 text-center'>
            <img style={{width:'100px'}} src={service.img} alt=""/>
            <h5 className='my-3'>{service.title}</h5>
            <p className='text-secondary'>{service.description}</p>
            
        </div>
    );
};

export default ServiceDetail;
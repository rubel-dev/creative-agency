import React from 'react';
import service1 from '../../../images/icons/service1.png'
import service2 from '../../../images/icons/service2.png'
import service3 from '../../../images/icons/service3.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {
    const serviceData = [
        {
          title: "Web & Mobile design",
          img: service1,
          description:
            "We craft stunning and amazing we UI, using a well drafted UX to fit your product",
        },
        {
          title: "Graphic design",
          img: service2,
          description:
            "Amazing flyers, social media posts and brand represntations that would make your brand stand out.",
        },
        {
          title: "Web development",
          img: service3,
          description:
            "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
        }
      ]
    return (
         <section className='pt-5 pb-5'>
           <div className="container">
            <h3 className='text-center mb-5 pb-5'>Provide awesome <span style={{color:"#7AB259"}}>services</span></h3>
                <div className="row">
                    {
                        serviceData.map(service =><ServiceDetail service ={service}></ServiceDetail>)
                    }
                </div>
           </div>
         </section>
    );
};

export default Services;
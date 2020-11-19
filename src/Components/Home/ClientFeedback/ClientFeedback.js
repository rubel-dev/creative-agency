import React from 'react';
import customer1 from "../../../images/customer-1.png";
import customer2  from "../../../images/customer-2.png";
import customer3  from "../../../images/customer-3.png";
import ClientFeedbackDetail from '../ClientFeedbackDetail/ClientFeedbackDetail';

const clients = [
    {
      name: "Nash Patrik",
      job: "CEO, Manpol",
      img: customer1,
      description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui aut, culpa nostrum tempore unde exercitationem?',
         
    },
    {
      name: "Miriam Barron",
      job: "CEO, Manpol",
      img: customer2,
      description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui aut, culpa nostrum tempore unde exercitationem?',
         
    },
    {
      name: "Bria Malone",
      job: "CEO, Manpol",
      img: customer3,
      description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui aut, culpa nostrum tempore unde exercitationem?',
        
    },
  ];

const ClientFeedback = () => {
    return (
        <section>
           <h4 className="mb-5" style={{textAlign:'center'}}>Clients <span style={{color:'#7AB259'}}>Feedback</span></h4>
            <div className='row'>
           
                {
                    clients.map(client => <ClientFeedbackDetail client = {client}></ClientFeedbackDetail>)
                }
            </div>
        </section>
    );
};

export default ClientFeedback;
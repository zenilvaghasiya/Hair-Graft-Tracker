'use client'
// export const metadata = {
//     title: 'Contact Us',
//     description: 'Page description',
//   }
 

import Link from 'next/link'
import { useState } from 'react'



  export default function ContactForm() {

    // const [name, setName] = useState('')
    // const [companyName, setCompanyName] = useState('')
    // const [email, setEmail] = useState('')
    // const [phone, setPhone] = useState('')
    // const [message, setMessage] = useState('')
    // const [submitted, setSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        companyName: '',
        email: '',
        phone: '',
        message: '',
    });
    


    const handleFormSubmit = async(e: React.FormEvent) => {
        e.preventDefault()
        
        console.log('Sending')

        // let formData = {
        //     name,
        //     companyName,
        //     email,
        //     phone,
        //     message
        // }

        try {
            const response = await fetch('/api/sendEmail', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ key: 'value' }),
              // JSON.stringify(formData)
            });
      
            if (response.ok) {
              const data = await response.json();
              console.log(data.message);
            } else {
              console.error('Failed to send email');
            }
          } catch (error) {
            console.error('Error sending email:', error);
          }
    }



    return (
      <section className="bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
  
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-5">
              <h1 className="h2">Get A Free Demo: Witness the Future of Hair Transplantation First-Hand</h1>
            </div>
            <p className="max-w-3xl mx-auto text-center text-xl text-gray-500 mb-2" data-aos="zoom-y-out" data-aos-delay="150">
            Ready to elevate your hair transplant practice? Fill out the form below to book a FREE, no-obligation demo of the Hair Grafts Tracker.

We'll walk you through the revolutionary features that are set to transform how you manage graft counts, technician teams, and surgery protocols. Experience how one-click data entry, real-time monitoring, and advanced analytics can help you make quality decisions faster and more efficiently.

Don't miss this chance to get a first-hand look at the future of FUE surgeries and beyond.
            </p>
              
            {/* Form */}
            <div className="max-w-sm mx-auto">
              <form onSubmit={handleFormSubmit}>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Name <span className="text-red-600">*</span></label>
                    <input id="name" 
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                        className="form-input w-full text-gray-800" placeholder="Enter your name" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="company_name">Company Name <span className="text-red-600"></span></label>
                    <input id="company_name"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })} 
                        type="text" className="form-input w-full text-gray-800" placeholder="Enter your Hospital/Clinic Name"/>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                    <input id="email" type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                    className="form-input w-full text-gray-800" placeholder="Enter your email address" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="phone">Phone Number (Optional)<span className="text-red-600"></span></label>
                    <input id="phone" type="tel"
                     value={formData.phone}
                     onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                     className="form-input w-full text-gray-800" placeholder="Enter your Phone Number" />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="message">Message <span className="text-red-600"></span></label>
                    <input type="text" id="message"
                     value={formData.message}
                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}  
                     className="form-input w-full text-gray-800" placeholder="Message"/>
                  </div>
                </div>
                
                
                <div className="flex flex-wrap -mx-3 mt-6">
                  <div className="w-full px-3">
                    <button type="submit" className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Submit</button>
                  </div>
                </div>
                
              </form>
              
              
              
            </div>
  
          </div>
        </div>
      </section>
    )
  }
  
// pages/signup.tsx
'use client'
import React, { useState } from 'react';
import Link from 'next/link';

export default function SignUp() {
  const [emailSent, setEmailSent] = useState(false);

  const handleButtonClick = async () => {
    try {
      const res = await fetch('pages/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: "fffff" }), // Send the data as a JSON object
      });

      if (res.status === 200) {
        setEmailSent(true);
        alert('Email sent successfully');
      } else {
        setEmailSent(false);
        alert('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email', error);
    }
  };

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      {/* Other parts of your component */}
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full" onClick={handleButtonClick}>
        Sign up
      </button>
      {emailSent && <p>Email sent successfully!</p>}
    </section>
  );
}

export const metadata = {
  title: 'Hair Grafts Tracker',
  description: 'Home Page',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import Challenges from '@/components/challenges'
import ContactForm from '@/components/contactform'
import SubmitForm from '@/components/submitForm'

export default function Home() {
  return (
    <>
      <Hero />
      <Challenges />
      <Features />
      <FeaturesBlocks />
      {/* <ContactForm />
      <SubmitForm /> */}
      {/* <Testimonials /> */}
      {/* <Newsletter /> */}
    </>
  )
}



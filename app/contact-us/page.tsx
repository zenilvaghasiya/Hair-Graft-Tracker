
export const metadata = {
  title: 'Contact Us',
  description: 'Page description',
}

import ContactForm from '@/components/contactform'

import Link from 'next/link'
export default function contact() {
  return (
    <>
    <ContactForm />
    </>
  )
}

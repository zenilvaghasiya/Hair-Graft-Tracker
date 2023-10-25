'use client'
import { FormEvent } from 'react'
 
export default function SubmitForm() {
  async function callSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData,
    })
 
    // Handle response if necessary
    const data = await response.json()
    // ...
  }
 
  return (
    <form onSubmit={callSubmit}>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  )
}
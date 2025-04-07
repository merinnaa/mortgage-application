import {React, useState} from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
const [email,setEmail] = useState('')

const handleSubmit = (e) => {

  e.preventDefault();
  console.log('email:', email)
  setEmail('');

};

  return (
   
   <footer>
    footer
   </footer>

  )
}

export default Footer

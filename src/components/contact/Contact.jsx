import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
 import  { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const notify = () => toast.success("Thanks for reaching us !");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_vf9ow5a', 'template_zqcxpkw', form.current, 'okIkf-byOW2g2CZ5o')
    e.target.reset();
    notify();
    };

  return (
    <section id='contact' >
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>Param1498@gmail.com</h5>
            <a href="mailto:param1498@gmail.com" target="_blank">Send a mail </a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine/>
            <h4>Messanger</h4>
            <h5>Paramjeet singh</h5>
            <a href="https://m.me//param.jeet.5/" target="_blank">Send a Message </a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp/>
            <h4>Whats app</h4>
            <h5>+917986283366</h5>
            <a href="https://api.whatsapp.com/send?phone=+917986283366" target="_blank">Send a message </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text"  name='name' placeholder='Your Full Name' required/>
          <input type="email"  name='email' placeholder='Your Email' required/>
          <textarea name="message" id="" cols="40" rows="12" required></textarea>
          <button type='submit' className='sendmes'>Send Message</button>
          {/* <a href="#contact" className='btn'>Let's Talk</a> */}

        </form>
        <div>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
      </div>
      </div>
    </section >
    
  )
}

export default Contact
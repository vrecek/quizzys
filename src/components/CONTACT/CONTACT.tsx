import React from 'react'
import { MdArticle } from 'react-icons/md'
import '../../css/CONTACT.css'
import Icon from '../Common/Icon'
import AboutSection from './AboutSection/AboutSection'
import ContactSection from './ContactSection/ContactSection'
import Wrapper from './Wrapper'

const CONTACT = () => {
    return (
        <main className="contact">

            <h1>Contact / About</h1>

            <div className='container'>

                <Wrapper component={<AboutSection />} header='About' cname='about' />
                <Wrapper component={<ContactSection />} header='Contact' cname='contact' />

            </div>

            <Icon cname='background-icon'><MdArticle /></Icon>

        </main>
    )
}

export default CONTACT
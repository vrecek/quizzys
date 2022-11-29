import React from 'react'
import AuthorGithub from './AuthorGithub'
import AuthorMail from './AuthorMail'
import AuthorName from './AuthorName'

const ContactSection = () => {
    return (
        <article className="contact">

            <AuthorName />
            <AuthorGithub />
            <AuthorMail />

        </article>
    )
}

export default ContactSection
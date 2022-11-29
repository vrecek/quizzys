import React from 'react'
import { BiClipboard } from 'react-icons/bi'
import { Aliases as a } from '../../../functions/Client'
import Icon from '../../Common/Icon'

const AuthorMail = () => {
    const MAIL: string = 'vrecek-ffci@outlook.com'

    const clipboardMail = (e: React.MouseEvent): void => {
        const t: a.Elem = e.target as a.Elem

        t.style.scale = '.75'
        setTimeout(() => t.style.scale = '1', 300)

        window.navigator.clipboard.writeText(MAIL)
    }

    return (
        <p className="author">
            Contact mail: 
            <span className="mail">{MAIL}</span>
            <Icon action={clipboardMail} cname='clipboard'><BiClipboard /></Icon>
        </p>
    )
}

export default AuthorMail
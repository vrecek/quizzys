import React from 'react'
import { BsGithub } from 'react-icons/bs'
import Icon from '../../Common/Icon'

const AuthorGithub = () => {
    return (
        <p className='author'>

            Find me on github: 
            
            <Icon 
            action={() => window.open('https://github.com/vrecek', '_blank')} 
            cname='github'>
                <BsGithub />
            </Icon>

        </p>
    )
}

export default AuthorGithub
import React from 'react'
import Icon from './Common/Icon'
import {BiHome} from 'react-icons/bi'

const HomeIcon = () => {
    return (
        <Icon cname='home-icon' action={() => window.location.pathname = '/'}>

            <BiHome />

        </Icon>
    )
}

export default HomeIcon
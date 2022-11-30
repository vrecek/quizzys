import React from 'react'
import Icon from '../../../Common/Icon'
import {FaTimes} from 'react-icons/fa'
import { ProfileState } from '../../../../interfaces/ProfileInterfaces'

const CloseIcon = ({set}: ProfileState) => {
    return (
        <Icon action={() => set(false)} cname='close-icon'>
            <FaTimes />
        </Icon>
    )
}

export default CloseIcon
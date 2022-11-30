import React from 'react'
import { BiUser } from 'react-icons/bi'
import { ProfileState } from '../../../interfaces/ProfileInterfaces'
import Icon from '../../Common/Icon'

const ToggleIcon = ({set}: ProfileState) => {
    return (
        <Icon action={() => set(curr => !curr)} cname='toggle-profile'>
            <BiUser />
        </Icon>
    )
}

export default ToggleIcon
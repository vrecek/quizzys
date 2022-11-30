import React from 'react'
import { FiCheck } from 'react-icons/fi'
import { TiTimes } from 'react-icons/ti'
import Cookies from '../../../../functions/CookieClass'
import { AllowCookiesState } from '../../../../interfaces/ProfileInterfaces'
import Icon from '../../../Common/Icon'

const AllowIcon = ({isAllowed, toggleAllow}: AllowCookiesState) => {
    const toggleCookie = (): void => {
        Cookies.toggleAllow()
        toggleAllow(Cookies.isAllowed())
    }

    return (
        <Icon action={toggleCookie} cname={`confirm-box ${isAllowed.toString()}`}>
            {
                isAllowed
                    ? <FiCheck />
                    : <TiTimes />
            }
        </Icon>
    )
}

export default AllowIcon
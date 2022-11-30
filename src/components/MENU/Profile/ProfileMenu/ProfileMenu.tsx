import React from 'react'
import Cookies from '../../../../functions/CookieClass'
import { ProfileState } from '../../../../interfaces/ProfileInterfaces'
import AllowCookies from '../AllowCookies/AllowCookies'
import UserInformations from '../UserInformations/UserInformations'
import CloseIcon from './CloseIcon'

const ProfileMenu = ({set}: ProfileState) => {
    const [isAllowed, setAllow] = React.useState<boolean>(Cookies.isAllowed()) 

    return (
        <section className="profile-menu">

            <CloseIcon set={set} />

            <AllowCookies isAllowed={isAllowed} toggleAllow={setAllow}  />

            {
                isAllowed
                    && <UserInformations />
            }

        </section>
    )
}

export default ProfileMenu
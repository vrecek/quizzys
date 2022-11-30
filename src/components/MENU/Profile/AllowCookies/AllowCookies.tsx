import React from 'react'
import { AllowCookiesState } from '../../../../interfaces/ProfileInterfaces'
import AllowIcon from './AllowIcon'
import AllowInformations from './AllowInformations'

const AllowCookies = ({isAllowed, toggleAllow}: AllowCookiesState) => {
    return (
        <section className="allow-cookies">

            <AllowInformations />

            <AllowIcon toggleAllow={toggleAllow} isAllowed={isAllowed} />

        </section>
    )
}

export default AllowCookies
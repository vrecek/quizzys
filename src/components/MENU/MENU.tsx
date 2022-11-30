import React from 'react'
import HeaderText from './HeaderText'
import Options from './Options/Options'
import '../../css/MENU.css'
import MenuWrapper from './MenuWrapper/MenuWrapper'
import Profile from './Profile/Profile'

const MENU = () => {
    return (
        <MenuWrapper>

            <div className="wrap">

                <HeaderText />

                <Options />

            </div>

            <Profile />

        </MenuWrapper>
    )
}

export default MENU
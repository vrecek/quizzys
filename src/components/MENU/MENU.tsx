import React from 'react'
import HeaderText from './HeaderText'
import Options from './Options/Options'
import '../../css/MENU.css'
import SourceRedirect from './SourceRedirect'
import BackgroundIcons from './BackgroundIcons'

const MENU = () => {
    return (
        <main className="main-menu">

            <SourceRedirect />

            <div className="wrap">

                <HeaderText />

                <Options />

            </div>

            <BackgroundIcons />

        </main>
    )
}

export default MENU
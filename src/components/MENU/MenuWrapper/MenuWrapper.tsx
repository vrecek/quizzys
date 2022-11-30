import React from 'react'
import { Aliases } from '../../../functions/Client'
import BackgroundIcons from './BackgroundIcons'
import SourceRedirect from './SourceRedirect'

const MenuWrapper = ({children}: Aliases.Text<JSX.Element[]>) => {
    return (
        <main className="main-menu">

            <SourceRedirect />

            {children}

            <BackgroundIcons />
            
        </main>
    )
}

export default MenuWrapper
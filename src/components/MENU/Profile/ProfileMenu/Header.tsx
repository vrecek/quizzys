import React from 'react'
import { Aliases } from '../../../../functions/Client'

const Header = ({children}: Aliases.Text) => {
    return (
        <p className="header">
            {children}
        </p>
    )
}

export default Header
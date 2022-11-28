import React from 'react'
import { Aliases } from '../../../functions/Client'

const Text = ({children}: Aliases.Text) => {
    return (
        <div className="text">

            <h1>Game finished</h1>
            <h2>{children}</h2>

        </div>
    )
}

export default Text
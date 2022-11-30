import React from 'react'
import { KeyAndValue } from '../../../../interfaces/ProfileInterfaces'

const KeyValueDiv = ({pkey, cname, pvalue}: KeyAndValue) => {
    return (
        <div className={`kvd ${cname ?? ''}`}>

            <p className="key">{pkey}</p>
            <p className="value">{pvalue}</p>

        </div>
    )
}

export default KeyValueDiv
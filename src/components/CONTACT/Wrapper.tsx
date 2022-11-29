import React from 'react'
import { WrapperType } from '../../interfaces/ContactInterfaces'

const Wrapper = ({component, header, cname}: WrapperType) => {
    return (
        <section className={cname}>

            <p className='header'>{header}</p>

            {component}

        </section>
    )
}

export default Wrapper
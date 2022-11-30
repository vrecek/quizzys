import React from 'react'
import Button from '../../Common/Button'
import {useNavigate, NavigateFunction} from 'react-router-dom'

const Options = () => {
    const n: NavigateFunction = useNavigate()
    
    return (
        <section className="options">

            <Button action={() => n('/solo')} text='Play solo' />
            <Button cname='disable' text='Create lobby' />
            <Button cname='disable' text='Join lobby' />
            <Button action={() => n('/contact')} text='About' />

        </section>
    )
}

export default Options
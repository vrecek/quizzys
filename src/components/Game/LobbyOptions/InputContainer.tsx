import React from 'react'
import { InputContainerType } from '../../../interfaces/mainInterfaces'

const InputContainer = ({label, type}: InputContainerType) => {
    return (
        <div className="input-container">

            <label>{label}</label>
            <input type={type} spellCheck='false' />

        </div>
    )
}

export default InputContainer
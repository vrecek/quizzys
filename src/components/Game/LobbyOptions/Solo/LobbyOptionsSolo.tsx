import React from 'react'
import '../../../../css/LobbyOptions.css'
import InputContainer from '../InputContainer'
import Button from '../../../Common/Button'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import Client, { Aliases as al } from '../../../../functions/Client'

const LobbyOptionsSolo = () => {
    const n: NavigateFunction = useNavigate(),
          QUESTION_LIMIT: number = 15


    const submitHandle = (e: React.FormEvent): void => {
        e.preventDefault()

        const form: al.Form = e.target as al.Form,
              elements: al.Input[] = Array.from(form.elements as al.Inputs),
              [questionsPerRound] = elements.map(x => parseInt(x.value))

        const box = new Client.TextBox({
            message: 'Please fill the fields correctly',
            cname: 'error-lobby'
        })

        if(!questionsPerRound || questionsPerRound > QUESTION_LIMIT) {
            box.initializeBox()
              .removePreviousBox(document.body)
              .appendTo(document.body, 2500)

            return
        }

        if(box.isAppended(document.body))
            box.removePreviousBox(document.body)

            
        n('/solo/categories', {
            state: {
                questionsPerRound
            }
        })
    }

    
    return (
        <main className="lobby-options">

            <form onSubmit={submitHandle} className="wrap">

                <h1>Start game</h1>

                <InputContainer type='number' label={`Questions per round (max ${QUESTION_LIMIT})`} />

                <Button text='Start game' />

            </form>

        </main>
    )
}

export default LobbyOptionsSolo
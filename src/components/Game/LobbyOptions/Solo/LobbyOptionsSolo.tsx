import React from 'react'
import '../../../../css/LobbyOptions.css'
import InputContainer from '../InputContainer'
import Button from '../../../Common/Button'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import Client, { Aliases as al } from '../../../../functions/Client'

const LobbyOptionsSolo = () => {
    const n: NavigateFunction = useNavigate(),
          ROUNDS_LIMIT: number = 10,
          QUESTION_LIMIT: number = 10


    const submitHandle = (e: React.FormEvent): void => {
        e.preventDefault()

        const form: al.Form = e.target as al.Form,
              elements: al.Input[] = Array.from(form.elements as al.Inputs),
              [rounds, questionsPerRound] = elements.map(x => parseInt(x.value))


        const box = new Client.TextBox({
            message: 'Please fill all fields',
            cname: 'error-lobby'
        }).initializeBox().removePreviousBox(document.body)


        if(!rounds || !questionsPerRound) {
            box.appendTo(document.body, 2500)

            return
        }

        if(rounds > ROUNDS_LIMIT || questionsPerRound > QUESTION_LIMIT) {
            box.setMessage = 'Select correct options'
            box.appendTo(document.body, 2500)

            return
        }

        n('/solo/categories', {
            state: {
                rounds,
                questionsPerRound
            }
        })
    }

    
    return (
        <main className="lobby-options">

            <form onSubmit={submitHandle} className="wrap">

                <h1>Start game</h1>

                <InputContainer type='number' label={`Rounds limit (max ${ROUNDS_LIMIT})`} />
                <InputContainer type='number' label={`Questions per round (max ${QUESTION_LIMIT})`} />

                <Button text='Start game' />

            </form>

        </main>
    )
}

export default LobbyOptionsSolo
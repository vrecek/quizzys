import React from 'react'
import { LobbyOptionsType } from '../../../interfaces/mainInterfaces'
import '../../../css/LobbyOptions.css'
import InputContainer from './InputContainer'
import Button from '../../Common/Button'

const LobbyOptions = ({type}: LobbyOptionsType) => {
    const isSolo: boolean = type === 'solo',
          btnText: string = isSolo
                                ? 'Start game'
                                : 'Create lobby'


    const submitHandle = (e: React.FormEvent): void => {
        e.preventDefault()

        isSolo
            ? soloGame()
            : createLobby()
    }

    const soloGame = (): void => {

    }

    const createLobby = (): void => {

    }

    return (
        <main className="lobby-options">

            <form onSubmit={submitHandle} className="wrap">

                <h1>{btnText}</h1>

                <InputContainer type='number' label='Rounds limit (max 99)' />
                <InputContainer type='number' label='Questions per round (max 99)' />

                <Button text={btnText} />

            </form>

        </main>
    )
}

export default LobbyOptions
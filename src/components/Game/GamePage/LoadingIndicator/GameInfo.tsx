import React from 'react'
import { GameInfoType } from '../../../../interfaces/mainInterfaces'

const GameInfo = ({totalQuestions, currentQuestion}: GameInfoType) => {
    return (
        <ul className="game-info">

            <li>

                <p className="key">Question</p>
                <p className="value">{currentQuestion} / {totalQuestions}</p>

            </li>

        </ul>
    )
}

export default GameInfo
import React from 'react'
import { GameInfoType } from '../../../../interfaces/mainInterfaces'

const GameInfo = ({currentRound, currentQuestion, totalRounds, questionsPerRound}: GameInfoType) => {
    return (
        <ul className="game-info">

            <li>

                <p className="key">Round</p>
                <p className="value">{currentRound} / {totalRounds}</p>

            </li>

            <li>

                <p className="key">Question</p>
                <p className="value">{currentQuestion} / {totalRounds * questionsPerRound}</p>

            </li>

        </ul>
    )
}

export default GameInfo
import React from 'react'
import { QuestionAnswersType } from '../../../../interfaces/mainInterfaces'
import QuestionAnswers from './QuestionAnswers'
import '../../../../css/GameSection.css'

const GameSection = ({dispatch, state, game}: QuestionAnswersType) => {
    const questionText = game.getCategory.questions[game.getQuestion('current') - 1]
                                         .question

                                         
    return (
        <section className="game-section">

            <h1>{questionText}</h1>

            <QuestionAnswers game={game} state={state} dispatch={dispatch} />

        </section>
    )
}

export default GameSection
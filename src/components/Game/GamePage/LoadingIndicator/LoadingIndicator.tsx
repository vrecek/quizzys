import React from 'react'
import { ReducerEnum } from '../../../../functions/GameReducer'
import { LoadingIndicatorType } from '../../../../interfaces/mainInterfaces'
import CategoryInfo from './CategoryInfo'
import GameInfo from './GameInfo'
import Scores from './Scores'

const LoadingIndicator = ({dispatch, categoryName, categoryIcon, round, question, totalRounds, qpr, players}: LoadingIndicatorType) => {
    // setTimeout(
    //     () => dispatch({ type: ReducerEnum.LOADING, value: 0 }), 
    //     5000
    // )

    return (
        <section className="loading-indicator">

            <div className="fullheight">

                <CategoryInfo icon={categoryIcon} name={categoryName} />

                <GameInfo questionsPerRound={qpr} currentQuestion={question} currentRound={round} totalRounds={totalRounds} />

            </div>

            <Scores players={players} totalQuestions={qpr * totalRounds} />

        </section>
    )
}

export default LoadingIndicator
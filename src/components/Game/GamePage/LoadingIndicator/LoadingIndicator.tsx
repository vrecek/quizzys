import React from 'react'
import { ReducerEnum } from '../../../../functions/GameReducer'
import { LoadingIndicatorType } from '../../../../interfaces/mainInterfaces'
import CategoryInfo from './CategoryInfo'
import GameInfo from './GameInfo'
import Scores from './Scores'

const LoadingIndicator = ({dispatch, game}: LoadingIndicatorType) => {
    setTimeout(
        () => dispatch({ type: ReducerEnum.LOADING, value: 0 }), 
        4000
    )

    const {icon, name} = game.getCategory

    return (
        <section className="loading-indicator">

            <div className="fullheight">

                <CategoryInfo icon={icon} name={name} />

                <GameInfo totalQuestions={game.getQuestion('total')} currentQuestion={game.getQuestion('current')} />

            </div>

            <Scores players={game.getPlayers} totalQuestions={game.getQuestion('total')} />

        </section>
    )
}

export default LoadingIndicator
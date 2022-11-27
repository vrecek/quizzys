import React from 'react'
import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom'
import { returnOneCategory } from '../../../../data/Categories'
import { CategoryInformations, GameLocation } from '../../../../interfaces/mainInterfaces'
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator'
import '../../../../css/GamePage.css'
import GameReducer, { DefaultState, ReducerEnum } from '../../../../functions/GameReducer'

const GameSolo = () => {
    const n: NavigateFunction = useNavigate(),
          categoryLoc = useLocation().state as GameLocation


    const [state, dispatch] = React.useReducer(GameReducer, DefaultState)



    React.useEffect(() => {
        if(!categoryLoc) {
            n('/', { replace: true })
            return
        }

        dispatch({ type: ReducerEnum.PLAYERS, players: [{name: 'You', points: 0}] })
    }, [])
    if(!categoryLoc) return <></>



    const {category, rounds, questionsPerRound} = categoryLoc,
          categoryDetails: CategoryInformations = returnOneCategory(category)


    return (
        <main className="game-page">

            {
                state.loading
                    ? <LoadingIndicator 
                           dispatch={dispatch} 
                           categoryName={categoryDetails.name} 
                           categoryIcon={categoryDetails.icon} 
                           round={state.round}
                           question={state.question}
                           totalRounds={rounds}
                           qpr={questionsPerRound}
                           players={state.players}
                      />

                    : <>game</>
            }

        </main>
    )
}

export default GameSolo
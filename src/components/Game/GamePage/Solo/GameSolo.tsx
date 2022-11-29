import React from 'react'
import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom'
import { returnOneCategory } from '../../../../data/Categories'
import { GameLocation } from '../../../../interfaces/mainInterfaces'
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator'
import '../../../../css/GamePage.css'
import GameReducer, { DefaultState, ReducerEnum, ReducerStateType } from '../../../../functions/GameReducer'
import GameSection from './GameSection'
import GameClass, { ReducerType } from '../../../../functions/GameClass'

const GameSolo = () => {
    const n: NavigateFunction = useNavigate(),
          categoryLoc = useLocation().state as GameLocation


    const [state, dispatch]: [ReducerStateType, ReducerType] = React.useReducer(GameReducer, DefaultState)



    React.useEffect(() => {
        if(!categoryLoc) {
            n('/', { replace: true })
            return
        }

        dispatch({
            type: ReducerEnum.GAME,
            game: new GameClass(dispatch, {
                category: returnOneCategory(categoryLoc.category),
                players: [{name: "You", points: 0, id: '1'}],
                totalQuestions: categoryLoc.questionsPerRound
            })
        })
    }, [])
    if(!categoryLoc || !state.game) return <></>



    return (
        <main className="game-page">

            {
                state.loading
                    ? <LoadingIndicator 
                           dispatch={dispatch} 
                           game={state.game}
                      />

                    : <GameSection 
                           dispatch={dispatch}
                           game={state.game}
                      />
            }

        </main>
    )
}

export default GameSolo
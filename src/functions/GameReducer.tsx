import GameClass from "./GameClass"

export type ReducerStateType = {
    loading: boolean
    game: GameClass | null
}
export type ReducerActionType = {
    type: ReducerEnum
    value?: number
    multiple?: any
    game?: GameClass
}
export enum ReducerEnum {
    LOADING = 'LOADING',
    MULTIPLE = 'MULTIPLE',
    GAME = 'GAME'
}
export type PlayerScoreType = {
    name: string
    points: number
    id: string
}


const GameReducer = (state: ReducerStateType, action: ReducerActionType) => {
    const val: number = action?.value ?? 1

    switch(action.type) {
        case ReducerEnum.LOADING: return {
            ...state,
            loading: !!val
        }

        case ReducerEnum.MULTIPLE: return {
            ...state,
            ...action.multiple
        }

        case ReducerEnum.GAME: return {
            ...state,
            game: action.game
        }

        default: return state
    }
}


const DefaultState: ReducerStateType = {
    loading: true,
    game: null
}


export default GameReducer
export {DefaultState}
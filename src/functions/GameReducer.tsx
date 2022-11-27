export type ReducerStateType = {
    loading: boolean
    round: number
    question: number
    players: PlayerScoreType[]
}
export type ReducerActionType = {
    type: ReducerEnum
    value?: number
    players?: PlayerScoreType[]
}
export enum ReducerEnum {
    ROUND = 'ROUND',
    QUESTION = 'QUESTION',
    LOADING = 'LOADING',
    PLAYERS = 'PLAYERS'
}
export type PlayerScoreType = {
    name: string
    points: number
}


const GameReducer = (state: ReducerStateType, action: ReducerActionType) => {
    const val: number = action?.value ?? 1

    switch(action.type) {
        case ReducerEnum.LOADING: return {
            ...state,
            loading: !!val
        }

        case ReducerEnum.QUESTION: return {
            ...state,
            question: val
        }

        case ReducerEnum.ROUND: return {
            ...state,
            round: val
        }

        case ReducerEnum.PLAYERS: return {
            ...state,
            players: action.players ?? []
        }

        default: return state
    }
}


const DefaultState: ReducerStateType = {
    loading: true,
    round: 1,
    question: 1,
    players: []
}


export default GameReducer
export {DefaultState}
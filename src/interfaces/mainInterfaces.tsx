import { Aliases } from "../functions/Client"
import { PlayerScoreType, ReducerActionType } from "../functions/GameReducer"

export type GameType = 'solo' | 'multi'

export type LobbyOptionsType = {
    type: GameType
}

export type SelectCategoriesType = {
    type: GameType
}

export interface InputContainerType {
    type: 'text' | 'number'
    label: string
}

export type CategoriesSelectState = {
    rounds: number
    questionsPerRound: number
}

// Category & Questions

export type QuestionType = {
    question: string

    a: string
    b: string
    c: string
    d: string

    correct: 'a' | 'b' | 'c' | 'd'
}

export type CategoryInformations = {
    name: string
    icon: JSX.Element
    total: number
    questions: QuestionType[]
}

export interface OneCategoryType extends CategoryWithoutQuestions, CategoryHook {}

export interface CategoryWithoutQuestions extends Omit<CategoryInformations, 'questions'> {}

export type CategoryHook = {
    setCategory: React.Dispatch<React.SetStateAction<Aliases.StrUN>>
}

//////////

export type GameLocation = CategoriesSelectState & {
    category: string
}

export type LoadingIndicatorType = {
    dispatch: React.Dispatch<ReducerActionType>
    categoryName: string
    categoryIcon: JSX.Element
    round: number
    question: number
    qpr: number
    totalRounds: number
    players: PlayerScoreType[]
}

export type CategoryInfoType = {
    name: string
    icon: JSX.Element
}

export type GameInfoType = {
    currentRound: number, 
    currentQuestion: number, 
    totalRounds: number, 
    questionsPerRound: number
}

//////////

export type ScoresType = {
    players: PlayerScoreType[]
    totalQuestions: number
}
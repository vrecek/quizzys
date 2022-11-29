import { Aliases } from "../functions/Client"
import GameClass from "../functions/GameClass"
import { PlayerScoreType, ReducerActionType, ReducerStateType } from "../functions/GameReducer"

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
    questionsPerRound: number
}

// Category & Questions
export type Answers = 'a' | 'b' | 'c' | 'd'

export type QuestionList = {
    text: string
    char: Answers
}

export type QuestionType = {
    question: string

    a: string
    b: string
    c: string
    d: string

    correct: Answers
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
    game: GameClass
}

export type CategoryInfoType = {
    name: string
    icon: JSX.Element
}

export type GameInfoType = {
    currentQuestion: number, 
    totalQuestions: number
}

//////////

export type ScoresType = {
    players: PlayerScoreType[]
    totalQuestions: number
}

export type QuestionAnswersType = {
    dispatch: React.Dispatch<ReducerActionType>
    game: GameClass
}
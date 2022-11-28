import { PlayerScoreType } from "../functions/GameReducer";

export interface SummaryLocation {
    players: PlayerScoreType[]
    category: string
    totalQuestions: number
}

export interface ListType {
    totalQuestions: number
    players: PlayerScoreType[]
}
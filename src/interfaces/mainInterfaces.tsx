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
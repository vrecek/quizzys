import { Answers, CategoryInformations } from "../interfaces/mainInterfaces";
import { Aliases as A } from "./Client";
import { PlayerScoreType, ReducerActionType } from "./GameReducer";

export type ReducerType = React.Dispatch<ReducerActionType>
type GameInitializeOpts = {
    category: CategoryInformations
    players: PlayerScoreType[]
    totalQuestions: number
}
type QuestionTimer = {
    timer: NodeJS.Timer | null
    element: HTMLElement | null
    width: number
}

export default class GameClass {
    private players: PlayerScoreType[]
    private category: CategoryInformations
    private totalQuestions: number
    private currentQuestion: number

    private dispatch: ReducerType

    private questionTimer: QuestionTimer


    public constructor(dispatch: ReducerType, options: GameInitializeOpts) {
        const {players, totalQuestions, category} = options

        this.category = category
        this.players = players
        this.totalQuestions = totalQuestions
        this.currentQuestion = 1

        this.dispatch = dispatch

        this.questionTimer = { timer: null, element: null, width: 0 }
    }


    public incorrectOptionHandler(correct: Answers, list: HTMLElement, clickedWrong?: HTMLElement): void {
        if(clickedWrong)
            clickedWrong.style.background = 'crimson'


        const letters = { a: 0, b: 1, c: 2, d: 3 },
              correctElement: HTMLElement = list.children[letters[correct]] as HTMLElement


        correctElement.style.background = 'green'
    }


    public disablePointerEvents(list: HTMLElement): void {
        for(let x of Array.from(list.children as A.Arr<A.Elem>))
            x.style.pointerEvents = 'none'
    }


    public incrementPlayerPoints(playerId: string): void {
        const player: PlayerScoreType = this.players.filter(x => x.id === playerId)[0]
        
        if(!player) return
        
        player.points++
    }


    public incrementQuestion(): void {
        this.currentQuestion++
    }


    public startTimerScreen(timeToAnswerMS: number): void {
        const div = document.createElement('div')
        div.className = 'question-timer-div'
        
        this.questionTimer.element = div
        document.body.appendChild(div)

        const interval: number = 20,
              ticks: number = timeToAnswerMS / interval,
              val: number = 100 / ticks

        
        this.questionTimer.timer = setInterval(() => {
            this.questionTimer.width += val

            div.style.width = `${this.questionTimer.width}%`
        }, interval)
    }


    public stopTimerScreen(): void {
        if(!this.questionTimer.timer) return

        clearInterval(this.questionTimer.timer)
        this.questionTimer.element?.remove()

        this.questionTimer.timer = null
        this.questionTimer.element = null
        this.questionTimer.width = 0
    }


    public get getCategory(): CategoryInformations {
        return this.category
    }


    public get getPlayers(): PlayerScoreType[] {
        return this.players
    }


    public getQuestion(type: 'current' | 'total'): number {
        return type === 'current'
                ? this.currentQuestion
                : this.totalQuestions
    }
}
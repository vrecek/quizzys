import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { ReducerEnum } from '../../../../functions/GameReducer'
import { Answers, QuestionAnswersType, QuestionList } from '../../../../interfaces/mainInterfaces'

const QuestionAnswers = ({game, dispatch, state}: QuestionAnswersType) => {
    const {a, b, c, d, correct} = game.getCategory.questions[game.getQuestion('current') - 1],
           n: NavigateFunction = useNavigate(),
           answersRef = React.useRef(null),
           ANSWER_TIME: number = 8000,
           questionList: QuestionList[] = [
               { text: a, char: 'a' },
               { text: b, char: 'b' },
               { text: c, char: 'c' },
               { text: d, char: 'd' }
           ]
           

    const timeout: NodeJS.Timer = setTimeout(() => {
        game.incorrectOptionHandler(correct, answersRef.current!)
        endQuestionHandle()

    }, ANSWER_TIME)


    const endQuestionHandle = (): void => {
        game.disablePointerEvents(answersRef.current!)
        game.stopTimerScreen()

        setTimeout(() => {
            if(lastQuestionHandle()) 
                return

                
            game.incrementQuestion()
            dispatch({ type: ReducerEnum.LOADING, value: 1 })
        }, 2000)
    }


    const lastQuestionHandle = (): boolean => {
        if(game.getQuestion('current') !== game.getQuestion('total')) return false

        n('/summary', {
            replace: true,
            state: {
                players: game.getPlayers,
                category: game.getCategory.name,
                totalQuestions: game.getQuestion('total')
            }
        })

        return true
    }


    const selectAnswer = (e: React.MouseEvent, answer: Answers): void => {
        clearTimeout(timeout)

        const t: HTMLElement = e.target as HTMLElement

        if(answer === correct) {
            game.incrementPlayerPoints('1')

            t.style.background = 'green'

        }else game.incorrectOptionHandler(correct, t.parentElement!, t)


        endQuestionHandle()
    }


    game.startTimerScreen(ANSWER_TIME)


    return (
        <ul ref={answersRef}>

            {
                questionList.map((x, i) => (
                    <li onClick={(e) => selectAnswer(e, x.char)} key={i}>
                        {x.text}
                    </li>
                ))
            }

        </ul>
    )
}

export default QuestionAnswers
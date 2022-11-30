import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import Cookies from '../../../../functions/CookieClass'
import { ReducerEnum } from '../../../../functions/GameReducer'
import { Answers, QuestionAnswersType } from '../../../../interfaces/mainInterfaces'

const QuestionAnswers = ({game, dispatch}: QuestionAnswersType) => {
    const {a, b, c, d, correct} = game.getCategory.questions[game.getQuestion('current') - 1],
          categoryName: string = game.getCategory.name,
          totalQuestions: number = game.getQuestion('total'),
          n: NavigateFunction = useNavigate(),
          answersRef = React.useRef(null),
          ANSWER_TIME: number = 9000


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
        if(game.getQuestion('current') !== totalQuestions) return false

        if(Cookies.isAllowed()) {
            Cookies.setTotalGames( Cookies.getTotalGames() + 1 )
            Cookies.setTotalQuestions( Cookies.getTotalQuestions() + totalQuestions )
            Cookies.setTCorrectQuestions( Cookies.getTCorrectQuestions() + game.getPlayers[0].points )
            Cookies.calculateFavouriteCategory( categoryName, totalQuestions )
        }

        n('/summary', {
            replace: true,
            state: {
                players: game.getPlayers,
                category: categoryName,
                totalQuestions: totalQuestions
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
                [
                    { text: a, char: 'a' as Answers },
                    { text: b, char: 'b' as Answers },
                    { text: c, char: 'c' as Answers },
                    { text: d, char: 'd' as Answers }
                ].map((x, i) => (

                    <li onClick={(e) => selectAnswer(e, x.char)} key={i}>
                        {x.text}
                    </li>

                ))
            }

        </ul>
    )
}

export default QuestionAnswers
import React from 'react'
import { QuestionAnswersType } from '../../../../interfaces/mainInterfaces'
import QuestionAnswers from './QuestionAnswers'
import '../../../../css/GameSection.css'

const GameSection = ({dispatch, game}: QuestionAnswersType) => {
    const questionRef = React.useRef<HTMLDivElement>(null)

    const replaceImageIfExists = async (questionText: string): Promise<boolean> => {
        const imgStart: number = questionText.match(/\[\[/)?.index!,
              imgEnd: number = questionText.match(/\]\]/)?.index!

                
        if(imgStart && imgEnd) {
            const imageName = questionText.slice(imgStart + 2, imgEnd)

            try {
                const src = await import(`../../../../images/${imageName}`),
                      isBase64: boolean = src.default.includes('base64'),
                      imageUrl: string = isBase64
                                            ? src.default
                                            : `${window.location.protocol}//${window.location.host}${src.default}`

                      
                const swapped: string = questionText.replace(`[[${imageName}]]`, `<figure><img src="${imageUrl}" /></figure>`)            
                questionRef.current!.innerHTML = swapped

                return true

            }catch(err) { return false }
        }

        return false
    }


    React.useEffect(() => {
        (async () => {
            const questionText = game.getCategory.questions[game.getQuestion('current') - 1]
                                                 .question


            if(await replaceImageIfExists(questionText))
                return


            questionRef.current!.innerHTML = questionText.replace('[-s]', "<span class='font'>")
                                                         .replace('[s-]', "</span>")
        })()
    }, [])                       
              
    
    return (
        <section className="game-section">

            <h1 ref={questionRef}></h1>

            <QuestionAnswers game={game} dispatch={dispatch} />

        </section>
    )
}

export default GameSection
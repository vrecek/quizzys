import { CategoryInformations, CategoryWithoutQuestions, QuestionType } from "../interfaces/mainInterfaces"
import {IoLanguageOutline, IoLogoJavascript} from 'react-icons/io5'
import {GiEarthAfricaEurope, GiGamepad} from 'react-icons/gi'
import {BsCodeSlash} from 'react-icons/bs'
import {AiOutlineWifi} from 'react-icons/ai'
import Client from "../functions/Client"

import ProgrammingQuestions from "./Questions/ProgrammingQuestions.json"
import JavascriptQuestions from './Questions/JavascriptQuestions.json'
import GamesQuestions from './Questions/GamesQuestions.json'
import InternetQuestions from './Questions/InternetQuestions.json'


const Categories: CategoryInformations[] = [
    {
        name: 'English',
        icon: <IoLanguageOutline />,
        total: 0,
        questions: []
    },

    {
        name: 'Programming',
        icon: <BsCodeSlash />,
        total: ProgrammingQuestions.length,
        questions: ProgrammingQuestions as QuestionType[]
    },

    {
        name: 'JavaScript',
        icon: <IoLogoJavascript />,
        total: JavascriptQuestions.length,
        questions: JavascriptQuestions as QuestionType[]
    },

    {
        name: 'Internet',
        icon: <AiOutlineWifi />,
        total: InternetQuestions.length,
        questions: InternetQuestions as QuestionType[]
    },

    {
        name: 'Geography',
        icon: <GiEarthAfricaEurope />,
        total: 0,
        questions: []
    },

    {
        name: 'Games',
        icon: <GiGamepad />,
        total: GamesQuestions.length,
        questions: GamesQuestions as QuestionType[]
    }
]


const returnOneCategory = (name: string): CategoryInformations => {
    const index: number = Categories.findIndex(x => x.name === name)
    
    Object.assign(Categories[index], {
        questions: Client.shuffleArray(Categories[index].questions)
    })
    
    return Categories[index]
}

const returnWithoutQuestions = (nr?: number): CategoryWithoutQuestions[] => {
    return Client.shuffleArray<CategoryWithoutQuestions>(
        
        Categories.map(x => {
            return {
                name: x.name,
                icon: x.icon,
                total: x.total
            }
        })

    ).slice(0, nr ?? Categories.length)
}


export default Categories
export {returnOneCategory, returnWithoutQuestions}

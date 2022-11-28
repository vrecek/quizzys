import { CategoryInformations, CategoryWithoutQuestions } from "../interfaces/mainInterfaces"
import {IoLanguageOutline} from 'react-icons/io5'
import {GiEarthAfricaEurope, GiGamepad} from 'react-icons/gi'
import {BsCodeSlash} from 'react-icons/bs'
import {FaLeaf} from 'react-icons/fa'
import {AiFillYoutube} from 'react-icons/ai'
import Client from "../functions/Client"
import ProgrammingQuestions from "./ProgrammingQuestions"


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
        questions: ProgrammingQuestions
    },

    {
        name: 'Geography',
        icon: <GiEarthAfricaEurope />,
        total: 0,
        questions: []
    },

    {
        name: 'YouTube',
        icon: <AiFillYoutube />,
        total: 0,
        questions: []
    },

    {
        name: 'Ecology',
        icon: <FaLeaf />,
        total: 0,
        questions: []
    },

    {
        name: 'Games',
        icon: <GiGamepad />,
        total: 0,
        questions: []
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

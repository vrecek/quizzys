import React from 'react'
import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom'
import { Aliases as A } from '../../../functions/Client'
import { SummaryLocation } from '../../../interfaces/SummaryInterfaces'
import '../../../css/Summary.css'
import Text from './Text'
import SummaryList from './SummaryList'

const Summary = () => {
    const n: NavigateFunction = useNavigate(),
          details: A.Possible<SummaryLocation> = useLocation()?.state

    

    React.useEffect(() => {
        if(!details) n('/', { replace: true })
    }, [])
    if(!details) return <></>


    return (
        <main className="summary">

            <Text>{details.category}</Text>

            <SummaryList totalQuestions={details.totalQuestions} players={details.players} />

        </main>
    )
}

export default Summary
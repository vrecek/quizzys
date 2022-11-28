import React from 'react'
import { ListType } from '../../../interfaces/SummaryInterfaces'

const SummaryList = ({players, totalQuestions}: ListType) => {
    return (
        <ul>

            {
                players.map((x, i) => (
                    <li key={i}>
                        
                        <p className="name">{x.name}</p>
                        <p className="points">{x.points} / {totalQuestions}</p>

                    </li>
                ))
            }

        </ul>
    )
}

export default SummaryList
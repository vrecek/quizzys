import React from 'react'
import { ScoresType } from '../../../../interfaces/mainInterfaces'

const Scores = ({players, totalQuestions}: ScoresType) => {
    return (
        <ul className="scores">

            {
                players.map((x, i) => (
                    <li key={i}>
                        
                        <p className="name">{x.name}</p>
                        <p>{x.points} / {totalQuestions}</p>

                    </li>
                ))
            }

        </ul>
    )
}

export default Scores
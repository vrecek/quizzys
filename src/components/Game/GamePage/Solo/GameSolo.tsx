import React from 'react'
import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom'
import { returnOneCategory } from '../../../../data/Categories'
import { CategoryInformations, GameLocation } from '../../../../interfaces/mainInterfaces'
import LoadingIndicator from '../LoadingIndicator'

const GameSolo = () => {
    const n: NavigateFunction = useNavigate(),
          categoryLoc = useLocation().state as GameLocation,
          [loading, setLoading] = React.useState<boolean>(true)


    React.useEffect(() => {
        if(!categoryLoc) n('/', { replace: true })
    }, [])



    if(!categoryLoc) return <></>



    const categoryDetails: CategoryInformations = returnOneCategory(categoryLoc.category)

    return (
        <main className="game-page solo">

            {
                loading
                    ? <LoadingIndicator 
                           setLoad={setLoading} 
                           categoryName={categoryDetails.name} 
                           categoryIcon={categoryDetails.icon} 
                      />
                      
                    : <>game</>
            }

        </main>
    )
}

export default GameSolo
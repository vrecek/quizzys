import React from 'react'
import { CategoriesSelectState } from '../../../../interfaces/mainInterfaces'
import '../../../../css/SelectCategories.css'
import Button from '../../../Common/Button'
import Client, { Aliases } from '../../../../functions/Client'
import CategoriesSelect from './CategoriesSelect'
import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom'

const SelectCategoriesSolo = () => {
    const [category, setCategory] = React.useState<Aliases.StrUN>(null),
          stateOptions = useLocation().state as CategoriesSelectState,
          n: NavigateFunction = useNavigate()


    const startGame = (): void => {
        const box = new Client.TextBox({
            message: 'Please select category',
            cname: 'error-lobby categories'
        })

        if(!category) {
            box.initializeBox()
               .removePreviousBox(document.body)
               .appendTo(document.body, 2500)
            

            return
        }

        if(box.isAppended(document.body))
            box.removePreviousBox(document.body)


        n('/solo/game', {
            state: {
                category
            }
        })
    } 

    React.useEffect(() => {
        if(!stateOptions) n('/', { replace: true })
    }, [])


    if(stateOptions)
    return (
        <main className='select-categories'>

            <div className="wrap">

                <h1>Select category</h1>

                <CategoriesSelect setCategory={setCategory} />

                <Button action={startGame} text='Start game' />

            </div>

        </main>
    )

    return <></>
}

export default SelectCategoriesSolo
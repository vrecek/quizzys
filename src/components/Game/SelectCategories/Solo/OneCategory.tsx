import React from 'react'
import Icon from '../../../Common/Icon'
import { OneCategoryType } from '../../../../interfaces/mainInterfaces'

const OneCategory = ({icon, name, total, setCategory}: OneCategoryType) => {
    const selectQuestion = (e: React.MouseEvent): void => {
        const t: HTMLElement = e.target as HTMLElement,
              children: Element[] = Array.from(t.parentElement!.children)

    
        for(let x of children) x.className = 'category'
        t.classList.add('active')

        setCategory(name)
    }

    return (
        <article onClick={selectQuestion} className="category">

            <Icon>{icon}</Icon>
            <p className='name'>{name}</p>
            <p className="total">{total} total</p>

        </article>
    )
}

export default OneCategory
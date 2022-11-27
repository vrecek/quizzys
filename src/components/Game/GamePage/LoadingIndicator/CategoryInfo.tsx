import React from 'react'
import { CategoryInfoType } from '../../../../interfaces/mainInterfaces'
import Icon from '../../../Common/Icon'

const CategoryInfo = ({icon, name}: CategoryInfoType) => {
    return (
        <section className='category-info'>

            <Icon>{icon}</Icon>
            <h1>{name}</h1>

        </section>
    )
}

export default CategoryInfo
import React from 'react'
import OneCategory from './OneCategory'
import { returnWithoutQuestions } from '../../../../data/Categories'
import { CategoryHook, CategoryWithoutQuestions } from '../../../../interfaces/mainInterfaces'

const CategoriesSelect = ({setCategory}: CategoryHook) => {
    const [categories] = React.useState<CategoryWithoutQuestions[]>(returnWithoutQuestions())
    
    return (
        <section className="category-select">

            {
                categories.map((x, i) => (
                    <OneCategory
                        setCategory={setCategory}
                        key={i}
                        name={x.name}
                        total={x.total}
                        icon={x.icon}
                    />
                ))
            }

        </section>
    )
}

export default CategoriesSelect
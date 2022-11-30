import React from 'react'
import Cookies from '../../../../functions/CookieClass'
import Header from '../ProfileMenu/Header'
import KeyValueDiv from './KeyValueDiv'

const UserInformations = () => {
    const [games, questions, correctQuestions, favourite] = Cookies.getAllInformations()

    return (
        <section className="user-informations">

            <Header>Statistics</Header>

            <KeyValueDiv pkey='Games played' pvalue={games} />
            <KeyValueDiv cname='top' pkey='Total questions' pvalue={questions} />
            <KeyValueDiv cname='bottom' pkey='Correct answers' pvalue={correctQuestions} />
            <KeyValueDiv pkey='Favourite category' pvalue={favourite} />

        </section>
    )
}

export default UserInformations
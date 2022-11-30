import React from 'react'
import Header from '../ProfileMenu/Header'

const AllowInformations = () => {
    return (
        <>
        
            <Header>Cookies</Header>

            <div className="text">

                <p>Allow storing cookies to save your progress.</p>
                <p className='warn'>Toggling will delete your previous data</p>
                
            </div>

        </>
    )
}

export default AllowInformations
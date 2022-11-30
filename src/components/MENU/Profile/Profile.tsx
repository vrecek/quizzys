import React from 'react'
import ToggleIcon from './ToggleIcon'
import '../../../css/Profile.css'
import ProfileMenu from './ProfileMenu/ProfileMenu'

const Profile = () => {
    const [isToggled, setToggle] = React.useState<boolean>(false)

    return (
        <>
        
            <ToggleIcon set={setToggle} />

            {
                isToggled   
                    && <ProfileMenu set={setToggle} />
            }

        </>
    )
}

export default Profile
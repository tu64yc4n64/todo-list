import { memo } from 'react'

const LogOutButton = ({ children, onClick }) => {

    return (
        <button onClick={onClick} className='w-[100%] bg-[#930000] text-white py-p_xsmall rounded-default_radius'>
            {children}
        </button>
    )
}

export default memo(LogOutButton)

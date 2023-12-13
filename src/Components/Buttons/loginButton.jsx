import { memo } from "react"

const LoginButton = ({ children, onClick, disabled }) => {

    return (
        <div disabled={disabled} onClick={onClick}
            className='py-[7px] text-[14px] px-[10px] text-center mb-m_small rounded-full text-color bg-bg_login_button'>
            {children}
        </div>
    )
}

export default memo(LoginButton)

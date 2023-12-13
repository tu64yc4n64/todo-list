import { memo } from "react"


const DeleteAllButton = ({ children, disabled, onClick }) => {

    return (
        <>

            <button disabled={disabled} onClick={onClick} className='text-color text-center w-[100%] bg-[#930000] rounded-default_radius p-p_xsmall mt-m_large'>
                {children}
            </button>
        </>
    )
}

export default memo(DeleteAllButton)

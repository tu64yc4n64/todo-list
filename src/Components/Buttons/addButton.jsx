
import { memo } from 'react';
const AddButton = ({ children, onClick, disabled }) => {

    return (
        <>
            <button disabled={disabled} onClick={onClick} className='py-[7px] text-[14px] px-[10px] my-m_small rounded-full text-color bg-bg_add_button'>
                {children}
            </button>
        </>
    )
}

export default memo(AddButton)

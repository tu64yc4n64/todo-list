
import { memo } from "react"
const Input = ({ onChange, placeholder, value, type, className }) => {
    console.log("Input Render")
    return (
        <>
            <input
                onChange={onChange}
                type={type}
                placeholder={placeholder}
                value={value}
                className={`
                    w-[100%] 
                    p-[10px] 
                    placeholder-[#ffffff40] 
                    bg-transparent 
                    outline-0 
                    text-color 
                    border-b 
                    border-[#ffffff40] 
                    rounded-default_radius
                    mb-m_medium
                    ${className ? className : ''}`}
            />
        </>
    )
}

export default memo(Input)

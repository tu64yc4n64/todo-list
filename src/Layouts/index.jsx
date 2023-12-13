import { Outlet } from "react-router-dom"
import Header from "../Components/Header"


const Layouts = () => {
    return (
        <div className="bg-bg_main w-[100%] min-h-screen flex justify-center py-p_large">
            <div className=' max-w-[400px] w-[100%] bg-bg_body p-p_medium rounded-default_radius shadow-shadow'>
                <Header />
                <Outlet />

            </div>
        </div>
    )
}

export default Layouts

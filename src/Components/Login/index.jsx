import Input from "../Inputs"
import LoginButton from "../Buttons/loginButton"
import { useDispatch, useSelector } from "react-redux"
import { useCallback, useState } from "react"
import { Link } from "react-router-dom"
import { setLogin } from "../../stores/users"


const Login = () => {
    const people = useSelector(item => item.users.people)
    const dispatch = useDispatch()
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const foundPerson = people.find(
        person => person.userName === userName && person.password === password
    );

    const handlerUserName = useCallback((e) => {
        setUserName(e.target.value);
    }, [setUserName]);

    const handlerPassword = useCallback((e) => {
        setPassword(e.target.value);
    }, [setPassword]);

    const handlerLogin = (name) => {
        dispatch(setLogin(name))
    }


    return (
        <>
            <h2 className="text-color text-center text-[30px] pb-p_medium">Login Page</h2>

            <div className='flex flex-col justify-between text-color'>

                <Input placeholder="User Name" type="text" onChange={handlerUserName} />
                <Input placeholder="Password" type="password" onChange={handlerPassword} />
                {foundPerson ?
                    <LoginButton onClick={() => handlerLogin({ userName })}>
                        <Link to="/" className="w-[100%] block">
                            Login
                        </Link>
                    </LoginButton>
                    :

                    <LoginButton>
                        Login
                    </LoginButton>

                }

            </div>

        </>
    )
}

export default Login

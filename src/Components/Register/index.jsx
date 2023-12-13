import Input from "../Inputs"
import LoginButton from "../Buttons/loginButton"
import { useSelector } from "react-redux"
import { setPeople } from "../../stores/users"
import { useCallback, useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { memo } from "react"

const Register = () => {
    console.log("Register render")
    const people = useSelector(item => item.users.people)
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handlerRegisterName = useCallback((e) => {
        setName(e.target.value)
    }, [setName])

    const handlerRegisterUserName = useCallback((e) => {
        setUserName(e.target.value)
    }, [setUserName])

    const handlerRegisterPassword = useCallback((e) => {
        setPassword(e.target.value)
    }, [setPassword])

    const checkUserName = (name) => {
        if (people.find(user => user.userName === name)) {
            return "You can not use";
        } else {
            return "You can use";
        }
    }

    const handlerRegister = useCallback(() => {
        const newPerson = { id: people.length + 1, name, userName, password };
        dispatch(setPeople(newPerson));
    }, [dispatch, people, name, userName, password]);

    return (
        <>
            <h2 className="text-color text-center text-[30px] pb-p_medium">Registration Page
            </h2>
            <div className='flex flex-col justify-between text-color'>
                <Input value={name} placeholder="Name" type="text" onChange={handlerRegisterName} />

                <div className="mb-m_medium">
                    <Input value={userName} className="mb-[0]" placeholder="User Name" type="text" onChange={handlerRegisterUserName} />
                    {userName.length > 5 &&
                        <span className="pl-p_xsmall" style={{ color: checkUserName(userName) === "You can not use" ? 'red' : 'green' }}>
                            {checkUserName(userName)}
                        </span>
                    }
                </div>

                <Input value={password} placeholder="Password" type="password" onChange={handlerRegisterPassword} />
                <LoginButton onClick={handlerRegister}>
                    {name && userName.length >= 5 && checkUserName(userName) === "You can use" && password ? (
                        <Link className="w-[100%] block" to="/login">
                            Register
                        </Link>
                    ) : (
                        "Register"
                    )}
                </LoginButton>
            </div>
        </>
    )
}

export default memo(Register)

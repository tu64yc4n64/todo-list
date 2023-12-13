import { useSelector } from 'react-redux';

import AddTodo from '../../Components/AddTodo';
import { Link } from 'react-router-dom';

import LogOut from '../../Components/LogOut';
import SearchTodo from '../../Components/SearchTodo';
import DeleteAll from '../../Components/DeleteAll';
import Lists from '../../Components/Lists';
import LoginButton from '../../Components/Buttons/loginButton';
import RegisterButton from '../../Components/Buttons/registerButton';


const HomePage = () => {


    console.log("Home Page Render")

    const loginPerson = useSelector(item => item.users.loginPerson);
    const todos = useSelector(item => item.todo.todos)

    return (
        <>
            <div className="flex flex-col">
                <div className='flex flex-col justify-between pb-4'>


                    <div className=' text-color p-p_xsmall'>
                        {loginPerson ?
                            <div className='flex flex-col  '>
                                <div className='flex justify-between w-[100%] items-center'>
                                    <div className='flex'>
                                        <p>
                                            Welcome
                                        </p>

                                        <h2 className='pl-[5px]'>
                                            {loginPerson.name}
                                        </h2>
                                    </div>

                                    <LogOut />
                                </div>

                                <SearchTodo />
                                <AddTodo />

                                {todos.length > 0
                                    &&
                                    <>

                                        <Lists />
                                        < DeleteAll />
                                    </>
                                }

                            </div>
                            :
                            <div className='flex flex-col '>


                                <Link to="/register">

                                    <RegisterButton >
                                        Register
                                    </RegisterButton>
                                </Link>
                                <div>
                                    <span className='text-[gray] text-center w-[100%] block pb-[5px]'>
                                        Do you have an account?
                                    </span>
                                    <Link to="/login">

                                        <LoginButton >

                                            Login
                                        </LoginButton>
                                    </Link>
                                </div>

                            </div>

                        }
                    </div>




                </div>


            </div>




        </>
    );
}

export default HomePage

import { useDispatch, useSelector } from 'react-redux';
import { setTodo, addTodo } from '../../stores/todo';
import Input from '../Inputs';
import AddButton from '../Buttons/addButton';
import { useCallback, memo } from 'react';
const AddTodo = () => {


    const todo = useSelector(item => item.todo.todo);
    const loginPerson = useSelector(item => item.users.loginPerson);
    const dispatch = useDispatch();

    const addTodoHandler = useCallback(() => {
        dispatch(addTodo({ name: loginPerson.name, id: loginPerson.id }));
    }, [dispatch, loginPerson]);


    const handlerSetTodo = useCallback((e) => {
        dispatch(setTodo(e.target.value))
    }, [dispatch])

    return (

        <div className='todolist-add'>
            <Input className="mb-0" placeholder="Please Enter Todo" type="text" value={todo} onChange={handlerSetTodo} />
            <div className='flex justify-center'>


                <AddButton onClick={addTodoHandler}>+ Add Todo </AddButton>
            </div>

        </div>
    )
}

export default memo(AddTodo)

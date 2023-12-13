import { useDispatch, useSelector } from 'react-redux';
import { deleteAll } from '../../stores/todo';
import DeleteAllButton from '../Buttons/deleteAllButton';

const DeleteAll = () => {
    const loginPerson = useSelector(item => item.users.loginPerson);
    const todos = useSelector(item => item.todo.todos);
    const dispatch = useDispatch();

    const deleteAllHandler = (id) => {
        dispatch(deleteAll(id));
    };

    const findTodo = todos.filter(item => item.userId === loginPerson.id);

    return (
        <>
            {findTodo.length > 1 &&
                <DeleteAllButton
                    disabled={loginPerson ? false : true}
                    onClick={() => deleteAllHandler(loginPerson.id)}>
                    Delete All
                </DeleteAllButton>
            }


        </>

    )
}

export default DeleteAll

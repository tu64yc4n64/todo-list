
import { useDispatch, useSelector } from 'react-redux';



import { deleteTodo, updateTodos, stateIndex, setNewTodo } from '../../../stores/todo';

const ListItem = ({ listItem }) => {
    const todoId = useSelector(item => item.todo.index);

    const newTodo = useSelector(item => item.todo.newTodo);
    const dispatch = useDispatch();
    const deleteTodoHandler = (i) => {
        dispatch(deleteTodo(i));
    };

    const editTodoHandler = (i) => {
        dispatch(stateIndex(i));
        dispatch(setNewTodo(listItem.title))
    };
    const newTodoHandler = (e) => {
        dispatch(setNewTodo(e.target.value))
    }
    const updateTodoHandler = () => {
        dispatch(updateTodos())
    }
    return (
        <>
            <div className='mb-m_xsmall'>
                <div className='flex w-[100%] justify-between text-color rounded-[10px]  items-center border border-list_border_color p-p_xsmall '>
                    {todoId === listItem.todoId ?
                        <>
                            <input
                                onChange={newTodoHandler}
                                className='bg-transparent border-0 focus:outline-none'
                                type="text"
                                value={newTodo}
                            />
                            <span onClick={() => updateTodoHandler()}>Update</span>
                        </>
                        :
                        listItem.title
                    }
                </div>
                <span className='flex min-w-[100px] justify-end text-icons_color py-p_xsmall'>
                    <span onClick={() => deleteTodoHandler(listItem.todoId)}>Delete </span> -
                    <span onClick={() => editTodoHandler(listItem.todoId)}> Edit</span>
                </span>
            </div>
        </>
    )
}

export default ListItem

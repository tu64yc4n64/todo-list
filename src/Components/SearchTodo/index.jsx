import { useDispatch } from 'react-redux';
import { searchTodos } from '../../stores/todo';
import Input from '../Inputs';
import { memo } from 'react';

const SearchTodo = () => {
    const dispatch = useDispatch();
    const handleSearch = (value) => {
        dispatch(searchTodos(value))
    }

    return (
        <div className='w-[100%] '>
            <Input placeholder="Search" onChange={(e) => handleSearch(e.target.value)} />
        </div>
    )
}

export default memo(SearchTodo)

import { useDispatch } from 'react-redux';
import { setLogOut } from '../../stores/users';
import LogOutButton from '../Buttons/logOutButton';
import { useCallback, memo } from 'react';

const LogOut = () => {
    const dispatch = useDispatch();

    const logOutHandler = useCallback(() => {
        dispatch(setLogOut())
    }, [dispatch])

    return (
        <div className='todolist-logout min-w-[100px] '>

            <LogOutButton onClick={() => logOutHandler()} >Log Out</LogOutButton>
        </div>
    )
}

export default memo(LogOut)

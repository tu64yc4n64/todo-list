import { useSelector } from 'react-redux';
import ListItem from "./ListItem";
import { motion, AnimatePresence } from 'framer-motion';

const Lists = () => {
    const todos = useSelector(item => item.todo.todos);
    const searchTodo = useSelector(item => item.todo.searchTodo);
    const loginPerson = useSelector(item => item.users.loginPerson);

    return (
        <div>
            <ul className='pt-p_medium'>
                <AnimatePresence>
                    {searchTodo.length > 0 ?
                        searchTodo.map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 50 }}
                            >
                                <ListItem listItem={item} index={i} />
                            </motion.li>
                        ))
                        :
                        todos.map((item, i) => (
                            item.userId === loginPerson.id ? (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 50 }}
                                >
                                    <ListItem listItem={item} index={i} />
                                </motion.li>
                            ) : null
                        ))
                    }
                </AnimatePresence>
            </ul>
        </div>
    )
}

export default Lists

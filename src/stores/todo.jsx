import { createSlice } from "@reduxjs/toolkit";
const todosSlice = createSlice({
    name: "todo",
    initialState: {
        todo: "",
        todos: [],
        searchTodo: [],
        index: "",
        newTodo: ""



    },
    reducers: {

        setTodo: (state, action) => {
            state.todo = action.payload;
        },
        addTodo: (state, action) => {
            if (state.todo) {
                state.todos = [...state.todos, { title: state.todo, userId: action.payload.id, name: action.payload.name, todoId: state.todos.length + 1 }];
                state.todo = "";
            }

        },
        setNewTodo: (state, action) => {
            state.newTodo = action.payload;
        },
        stateIndex: (state, action) => {
            state.index = action.payload

        },
        updateTodos: (state) => {
            if (state.index !== null && state.index !== undefined) {
                let foundTodo = state.todos.find(item => item.todoId === state.index)
                foundTodo.title = state.newTodo

                if (state.searchTodo > 0) {
                    let foundTodoSearch = state.searchTodo.find(item => item.todoId === state.index)

                    foundTodoSearch.title = state.newTodo
                }
                state.newTodo = ""
                state.index = ""
            }
        },
        deleteTodo: (state, action) => {
            const index = action.payload;
            state.todos = state.todos.filter(item => item.todoId !== index);
            if (state.searchTodo.length !== 0) {
                state.searchTodo = state.searchTodo.filter(item => item.todoId !== index);
            }
        },
        deleteAll: (state, action) => {

            state.todos = state.todos.filter((item) => item.userId !== action.payload);
        },
        searchTodos: (state, action) => {
            const search = action.payload
            if (search === "") {
                state.searchTodo = ""
            } else {
                state.searchTodo = state.todos.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
            }
        },
    },
});
export const { setTodo, addTodo, deleteTodo, deleteAll, updateTodos, searchTodos, stateIndex, setNewTodo } = todosSlice.actions;
export default todosSlice.reducer;

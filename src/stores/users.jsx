import { createSlice } from "@reduxjs/toolkit";
import { users } from "../utils/users"

const usersReducer = createSlice({
    name: "users",
    initialState: {
        people: users,
        loginPerson: "",

    },
    reducers: {
        setPeople: (state, action) => {
            console.log(action.payload)
            state.people = [...state.people, action.payload];
        },

        setLogin: (state, action) => {

            const foundPerson = state.people.find(
                person => person.userName === action.payload.userName
            );

            if (foundPerson) {
                state.loginPerson = foundPerson
            } else {
                state.loginPerson = null;
            }

            state.personUserName = "";
            state.personPassword = "";
        },
        setLogOut: (state) => {
            state.loginPerson = ""
        }
    },
});


export const { setLogin, setPeople, setLogOut } = usersReducer.actions;

export default usersReducer.reducer;
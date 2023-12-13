import ReactDOM from 'react-dom/client'

import './App.css'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import TodoReducer from './stores/todo.jsx'
import UserReducer from './stores/users.jsx'

import routes from './routes'
import { RouterProvider } from 'react-router-dom'


const store = configureStore({
  reducer: {
    todo: TodoReducer,
    users: UserReducer
  }
})


ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <RouterProvider router={routes}>

    </RouterProvider>


  </Provider>


)

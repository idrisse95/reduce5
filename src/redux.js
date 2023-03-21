import { configureStore, createSlice } from "@reduxjs/toolkit";




export const todoList = createSlice({
    name: "todoList",
    initialState: {
        liste: [],
        id: 1,
        valu: "",
    },
    reducers: {
        addList: (state, action) => {
            state.valu = action.payload.valu;
            state.liste = [
                ...state.liste,
                <li key={state.id}>
                    {state.valu}
                    <button onClick={() => deleteTask(state, action)}>Supprimer</button>
                </li>,
            ]
            state.id++
            console.log(state.id);
            return state
        },
        deleteTask: (state, action) => {
            return state.liste = state.liste.filter((task) => task.valu !== action.payload.valu);
        }

    },
});

// export 
export const { addList, deleteTask } = todoList.actions;


export const store = configureStore({
    reducer: {
        todoList: todoList.reducer
    }
})
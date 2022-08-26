import { createSlice } from "@reduxjs/toolkit";

export const navSlice = createSlice(
    {
        name:'navigation',
        initialState:{
            value: true
        },
        reducers:{
            opposite:(state) => {
                state.value === true ? state.value = false : state.value = true
            }
        }
    }
)
export default navSlice.reducer
export const { opposite } = navSlice.actions
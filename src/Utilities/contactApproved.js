import { createSlice } from "@reduxjs/toolkit";

export const conSlice = createSlice(
    {
        name:'contac',
        initialState:{
            value: 'hal2'
        },
        reducers:{
            ops:(state) => {
                state.value === 'hal1' ? state.value = 'hal2' : state.value = 'hal1'
                // console.log(state.value)
            }
        }
    }
)


export default conSlice.reducer
export const { ops } = conSlice.actions
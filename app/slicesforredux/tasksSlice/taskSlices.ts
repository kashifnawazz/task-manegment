import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    tasks: [],
}

export const taskSlices = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addtask: (state, action) => {
            const task = {
                text: action.payload,
            }
         //   state.tasks.push(task)

            }
    }
})
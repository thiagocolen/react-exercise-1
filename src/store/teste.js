import { createSlice } from '@reduxjs/toolkit';

const initialTesteState = {
    data: 1,
}

const testeSlice = createSlice({
    name: 'teste',
    initialState: initialTesteState,
    reducers: {
        increment(state) {
            state.data++;
        },
    },
});

export const testeActions = testeSlice.actions;

export default testeSlice.reducer;

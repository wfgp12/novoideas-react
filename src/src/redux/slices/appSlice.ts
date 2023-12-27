import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Chat } from "../../models";

interface AppSliceState {
    chats: Chat[]
    loading: boolean
}
const initialState: AppSliceState = {
    chats:[],
    loading: true
}

export const appSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setChats: (state, action: PayloadAction<Chat[]>) => {
            state.chats = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
    }
})

export const { setChats, setLoading } = appSlice.actions;
export default appSlice.reducer;
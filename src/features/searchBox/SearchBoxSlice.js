import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    show:false
};

const searchBoxSlice = createSlice({
    name:'searchBox',
    initialState,
    reducers:{
        showSearchbar:(state)=>{
            state.show = !state.show
        }
    }

})
export const searchBoxAction = searchBoxSlice.actions.showSearchbar
export default searchBoxSlice.reducer
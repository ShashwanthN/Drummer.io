import{combineReducers} from "@reduxjs/toolkit";


import themeSlice from "./theme";


const rootReducer = combineReducers ({
    theme: themeSlice,
    

});

export {rootReducer};

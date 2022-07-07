import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./reducer/index";

const store = configureStore({
    reducer:{
        root:rootReducer,
    }
})

export default store
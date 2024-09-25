import { configureStore } from "@reduxjs/toolkit";

// 导入子模块 reducer
import doubleVerticalSliderReducer from "./modules/doubleVerticalSliderStore";

const store = configureStore({
    reducer: {
        doubleVerticalSlider: doubleVerticalSliderReducer
    }
})

export default store
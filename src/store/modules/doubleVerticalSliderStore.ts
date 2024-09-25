import { createSlice } from "@reduxjs/toolkit";

const doubleVerticalSliderStore = createSlice({
  name: "doubleVerticalSlider",
  initialState: {
    datas: [
      {
        id: 1,
        leftTitle: "Nature flower",
        leftDescription: "all in pink",
        rightImage:
          "https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80",
        backgroundColor: "#FD3555",
      },
      {
        id: 2,
        leftTitle: "Bluuue Sky",
        leftDescription: "with it's mountains",
        rightImage:
          "https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80",
        backgroundColor: "#2A86BA",
      },
      {
        id: 3,
        leftTitle: "Lonely castle",
        leftDescription: "in the wilderness",
        rightImage:
          "https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80",
        backgroundColor: "#252E33",
      },
      {
        id: 4,
        leftTitle: "Flying eagle",
        leftDescription: "in the sunset",
        rightImage:
          "https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80",
        backgroundColor: "#FFB866",
      },
    ],
  },
  reducers: {},
});

const doubleVerticalSliderReducer = doubleVerticalSliderStore.reducer;

export default doubleVerticalSliderReducer;

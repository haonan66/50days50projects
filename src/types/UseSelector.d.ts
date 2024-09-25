import store from "@/store";
type GetStateFunType = typeof store.getState;
export type IRootState = ReturnType<GetStateFunType>;

export type DoubleVerticalSliderType = {
  id: number;
  leftTitle: string;
  leftDescription: string;
  rightImage: string;
  backgroundColor: string;
};

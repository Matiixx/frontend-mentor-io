import create from "zustand";
import commentSlice from "./slices/commentSlice";

const useStore = create((set, get) => ({
  ...commentSlice(set, get),
}));

export default useStore;

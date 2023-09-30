import { createStore, createHook } from "react-sweet-state";

const Store = createStore({
  initialState: { hideSolde: false },
  actions: {
    setHideSolde:
      (bool) =>
      ({ setState }) => {
        setState({
          hideSolde: bool,
        });
      },
  },
});

export default function useGlobal() {
  const globalStore = createHook(Store);
  const [{ hideSolde }, { setHideSolde }] = globalStore();

  return {
    hideSolde,
    setHideSolde,
  };
}

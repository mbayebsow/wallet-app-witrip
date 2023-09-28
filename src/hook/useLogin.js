import { createStore, createHook } from "react-sweet-state";

const Store = createStore({
  initialState: { islogin: false },
  actions: {
    setIslogins:
      (bool) =>
      ({ setState }) => {
        setState({
          islogin: bool,
        });
      },
  },
});

export default function useLogin() {
  const loginStore = createHook(Store);
  const [{ islogin }, { setIslogins }] = loginStore();

  return {
    islogin,
    setIslogins,
  };
}

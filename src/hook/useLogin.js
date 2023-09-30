import { createStore, createHook } from "react-sweet-state";

const Store = createStore({
  initialState: { secretCode: [], islogin: false, wrongCode: false, defaultCode: "4,5,6,7" },
  actions: {
    setIslogins:
      (bool) =>
      ({ setState }) => {
        setState({
          islogin: bool,
        });
      },
    setSecretCode:
      (code) =>
      ({ setState }) => {
        if (code.length > 4) return;
        setState({
          secretCode: code,
        });
      },
    delSecretCode:
      () =>
      ({ setState, getState }) => {
        const code = getState().secretCode;
        code.pop();
        setState({
          secretCode: code.map((s) => s),
        });
      },
    setWrongCode:
      (bool) =>
      ({ setState }) => {
        setState({
          wrongCode: bool,
        });
      },
  },
});

export default function useLogin() {
  const loginStore = createHook(Store);
  const [
    { secretCode, islogin, wrongCode, defaultCode },
    { setSecretCode, setIslogins, delSecretCode, setWrongCode },
  ] = loginStore();

  return {
    secretCode,
    islogin,
    wrongCode,
    defaultCode,
    setSecretCode,
    setIslogins,
    delSecretCode,
    setWrongCode,
  };
}

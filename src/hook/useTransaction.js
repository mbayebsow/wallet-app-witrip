import { createStore, createHook } from "react-sweet-state";

const Store = createStore({
  initialState: { transactions:[], },
  actions: {
    setTransactions:
      (transactions) =>
      ({ setState }) => {
        setState({
          transactions: transactions,
        });
      },
  },
});

export default function useTransaction() {
  const playerStore = createHook(Store);
  const [{ transactions }, { setTransactions }] = playerStore();

  return {
    transactions,
    setTransactions,
  };
}

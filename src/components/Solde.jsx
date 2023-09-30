import useGlobal from "../hook/useGlobal";

export default function Solde() {
  const { hideSolde } = useGlobal();
  return hideSolde ? "··· ··· ··· F" : "520.000 F";
}

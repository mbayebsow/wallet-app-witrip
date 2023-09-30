import { ViewOff } from "@carbon/icons-react";
import { View } from "@carbon/icons-react";
import useGlobal from "../hook/useGlobal";

export default function ToggleHideSolde() {
  const { hideSolde, setHideSolde } = useGlobal();

  return (
    <div
      onClick={() => setHideSolde(!hideSolde)}
      className="h-fit w-10 flex justify-center items-center"
    >
      {hideSolde ? (
        <View className="text-white h-5 w-5" />
      ) : (
        <ViewOff className="text-white h-5 w-5" />
      )}
    </div>
  );
}

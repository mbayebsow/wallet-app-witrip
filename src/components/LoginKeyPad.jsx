import { CaretLeft } from "@carbon/icons-react";
import useLogin from "../hook/useLogin";

export default function LoginKeyPad() {
  const { secretCode, setSecretCode, delSecretCode } = useLogin();

  return (
    <div className="grid grid-flow-row-dense gap-x-[3vw] gap-y-[6vh] grid-cols-3 grid-rows-3 w-4/5 mx-auto">
      <div
        onClick={() => setSecretCode([...secretCode, 1])}
        className="text-center text-3xl font-black"
      >
        1
      </div>
      <div
        onClick={() => setSecretCode([...secretCode, 2])}
        className="text-center text-3xl font-black"
      >
        2
      </div>
      <div
        onClick={() => setSecretCode([...secretCode, 3])}
        className="text-center text-3xl font-black"
      >
        3
      </div>
      <div
        onClick={() => setSecretCode([...secretCode, 4])}
        className="text-center text-3xl font-black"
      >
        4
      </div>
      <div
        onClick={() => setSecretCode([...secretCode, 5])}
        className="text-center text-3xl font-black"
      >
        5
      </div>
      <div
        onClick={() => setSecretCode([...secretCode, 6])}
        className="text-center text-3xl font-black"
      >
        6
      </div>
      <div
        onClick={() => setSecretCode([...secretCode, 7])}
        className="text-center text-3xl font-black"
      >
        7
      </div>
      <div
        onClick={() => setSecretCode([...secretCode, 8])}
        className="text-center text-3xl font-black"
      >
        8
      </div>
      <div
        onClick={() => setSecretCode([...secretCode, 9])}
        className="text-center text-3xl font-black"
      >
        9
      </div>
      <div className="text-center text-3xl font-black"></div>
      <div
        onClick={() => setSecretCode([...secretCode, 0])}
        className="text-center text-3xl font-black"
      >
        0
      </div>
      <div onClick={delSecretCode} className="flex items-center justify-center font-black">
        <CaretLeft className="h-8 w-8" />
      </div>
    </div>
  );
}

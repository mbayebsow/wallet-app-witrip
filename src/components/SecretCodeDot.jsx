import React from "react";
import useLogin from "../hook/useLogin";

export default function SecretCodeDot() {
  const { secretCode } = useLogin();
  return (
    <div className="w-full mb-20">
      <div className="mx-auto w-fit flex gap-5">
        <span
          style={{ background: secretCode.length >= 1 ? "black" : "lightgray" }}
          className="w-3 h-3 rounded-full border"
        ></span>
        <span
          style={{ backgroundColor: secretCode.length >= 2 ? "black" : "lightgray" }}
          className="w-3 h-3 rounded-full border"
        ></span>
        <span
          style={{ backgroundColor: secretCode.length >= 3 ? "black" : "lightgray" }}
          className="w-3 h-3 rounded-full border"
        ></span>
        <span
          style={{ backgroundColor: secretCode.length >= 4 ? "black" : "lightgray" }}
          className="w-3 h-3 rounded-full border"
        ></span>
      </div>
    </div>
  );
}

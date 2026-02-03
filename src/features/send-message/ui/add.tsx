import { CirclePlus } from "lucide-react";
import s from "../send-message.module.scss";
import clsx from "clsx";

export function Add() {
  return (
    <CirclePlus
      onClick={() => alert("иконка + ")}
      className={clsx(s.pointer)}
    />
  );
}

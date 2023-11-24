import { useState } from "react";
import ButtonAdd from "../ButtonAdd";
import Modal from "../Modal";

export default function Title() {
  return (
    <div className="text-[#f5f5f5] p-12 w-full flex">
      <img src="/icon.svg" alt="icon.svg" className="w-28" />
      <h1 className="text-[80px] flex flex-col justify-center">ToDo List</h1>
      <Modal />
    </div>
  );
}

import Modal from "../Modal";

export default function Title({ addTask }) {
  return (
    <div className="text-[#f5f5f5] p-12 w-full flex">
      {/*  <img src="/icon.svg" alt="icon.svg" className="w-28" /> */}
      <h1 className="text-[80px] flex flex-col justify-center">TO-DO</h1>
      <Modal addTask={addTask} />
    </div>
  );
}

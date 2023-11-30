import Modal from "../Modal";

export default function Title({ addTask }) {
  return (
    <div className="text-[#f5f5f5] px-8 md:px-12 pt-4 md:pt-8 w-full flex">
      {/*  <img src="/icon.svg" alt="icon.svg" className="w-28" /> */}
      <h1 className="f text-[30px] md:text-[80px] flex flex-col justify-center">
        TO-DO
      </h1>
      <Modal addTask={addTask} />
    </div>
  );
}

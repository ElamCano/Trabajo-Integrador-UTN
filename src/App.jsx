import "./App.css";
import Tasks from "./components/Tasks";
import Title from "./components/Title";

function App() {
  return (
    <div className="bg-[#1c2628] h-screen w-full">
      <Title />
      <Tasks />
    </div>
  );
}

export default App;

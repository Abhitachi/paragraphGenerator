import { useState } from "react";
import Paragraph from "./Paragraph";

function App() {
  const [count, setCount] = useState(0);
  const [showPara, setShowPara] = useState(false);
  const handleClick = () => {
    setShowPara(true);
  };
  return (
    <div className="mt-0">
      <header className="text-2xl text-center mt-20">
        <h1 className="font-extrabold text-cyan-950">
          Tired of Boring Lorem Ipsum
        </h1>
      </header>
      <section className="mx-auto font-semibold w-6/12 text-lg text-center mt-6">
        <div className="flex items-center justify-center gap-4 text-cyan-400">
          <span className="text-black">Paragraphs</span>
          <input
            type="number"
            className="border-2 border-black rounded-md w-1/12"
            step={1}
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button
            className="bg-cyan-400 text-white px-3 py-1 rounded-md"
            onClick={handleClick}
          >
            Generate
          </button>
        </div>
      </section>
      {showPara && <Paragraph count={count} />}
    </div>
  );
}

export default App;

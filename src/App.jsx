import { useState } from "react";

function App() {
  const [color, setColor] = useState("lightgray");

  return (
    <div
      className="w-full h-screen duration-200 flex items-center justify-center"
      style={{ backgroundColor: color }}>
      <div className="fixed flex justify-center bottom-12 inset-x-0 px-2">
        <div className="flex gap-4 p-4 bg-white shadow-xl rounded-2xl border border-gray-100">
          <button
            className="px-6 py-3 font-semibold text-white rounded-lg hover:scale-105 transition-transform"
            style={{ backgroundColor: "#E57373" }} // Mild red
            onClick={() => setColor("#E57373")}>
            Red
          </button>
          <button
            className="px-6 py-3 font-semibold text-white rounded-lg hover:scale-105 transition-transform"
            style={{ backgroundColor: "#64B5F6" }} // Mild blue
            onClick={() => setColor("#64B5F6")}>
            Blue
          </button>
          <button
            className="px-6 py-3 font-semibold text-white rounded-lg hover:scale-105 transition-transform"
            style={{ backgroundColor: "#81C784" }} // Mild green
            onClick={() => setColor("#81C784")}>
            Green
          </button>
          <button
            className="px-6 py-3 font-semibold text-black rounded-lg hover:scale-105 transition-transform"
            style={{ backgroundColor: "#FFEB3B" }} // Mild yellow
            onClick={() => setColor("#FFEB3B")}>
            Yellow
          </button>
          <button
            className="px-6 py-3 font-semibold text-white rounded-lg hover:scale-105 transition-transform"
            style={{ backgroundColor: "#F06292" }} // Mild pink
            onClick={() => setColor("#F06292")}>
            Pink
          </button>
          <button
            className="px-6 py-3 font-semibold text-white rounded-lg hover:scale-105 transition-transform"
            style={{ backgroundColor: "#BA68C8" }} // Mild purple
            onClick={() => setColor("#BA68C8")}>
            Purple
          </button>
          <button
            className="px-6 py-3 font-semibold text-black rounded-lg hover:scale-105 transition-transform"
            style={{ backgroundColor: "#A3A380" }} // Mild olive
            onClick={() => setColor("#A3A380")}>
            Olive
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

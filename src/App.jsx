import { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode && `dark`}>
      <div className="flex flex-col gap-4 w-screen h-screen text-center items-center justify-center bg-white dark:bg-black">
        <h1 className="dark:text-white text-5xl font-bold">React Dark Mode</h1>
        <p className="dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi ex,
          elementum ut vehicula non, posuere in mauris. In eget leo non justo
          consectetur blandit. In suscipit risus non neque pretium consequat.
          Nullam vel tempor mauris. Sed volutpat elit malesuada, gravida orci
          non, iaculis lectus. Praesent vel nibh erat. Ut rhoncus velit pharetra
          convallis pharetra. Integer suscipit blandit urna, et condimentum
          magna elementum et. Suspendisse laoreet porta fringilla. Mauris
          convallis convallis cursus. Ut pretium tristique diam, sed luctus leo
          facilisis ut. Sed fermentum maximus dui, sit amet venenatis nulla
          ullamcorper eu.
        </p>
        <button
          onClick={handleClick}
          className="rounded-full border p-5 dark:text-white pointer"
        >
          Dark Mode
        </button>
      </div>
    </div>
  );
}

export default App;

// src/components/ToggleDark.jsx
import useTheme from "../context/UseTheme.js";

const ToggleDark = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="absolute top-4 right-4">
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={toggleDarkMode}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-500 relative">
          <div className="w-4 h-4 bg-white rounded-full transform transition-transform duration-200 ease-in-out peer-checked:translate-x-5 dark:peer-checked:bg-gray-300 absolute top-1 left-1"></div>
        </div>
        <span className="ml-3 text-gray-800 dark:text-white">
          {darkMode ? "Modo Escuro" : "Modo Claro"}
        </span>
      </label>
    </div>
  );
};

export default ToggleDark;

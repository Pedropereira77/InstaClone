// src/App.jsx
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Suggestions from "./components/Suggestions";
import ToggleDark from "./components/ToggleDark";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="flex">
        {/* Botão de alternância de Dark Mode */}
        <ToggleDark />

        {/* Componentes principais */}
        <Sidebar />
        <Feed />
        <Suggestions />
      </div>
    </ThemeProvider>
  );
}

export default App;

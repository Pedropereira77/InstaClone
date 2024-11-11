// src/components/Sidebar.jsx
const Sidebar = () => {
  const options = [
    "Página Inicial",
    "Pesquisa",
    "Explorar",
    "Reels",
    "Mensagens",
    "Notificações",
    "Criar",
    "Painel",
    "Perfil",
  ];

  return (
    <div className="w-1/5 p-4 bg-gray-100 dark:bg-gray-800 h-screen">
      <ul>
        {options.map((option) => (
          <li
            key={option}
            className="mb-4 text-lg text-gray-800 dark:text-white cursor-pointer hover:text-blue-500"
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

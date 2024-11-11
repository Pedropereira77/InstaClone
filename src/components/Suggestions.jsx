// src/components/Suggestions.jsx
const suggestions = [
  {
    id: 1,
    name: "João Silva",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Maria Oliveira",
    imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Carlos Pereira",
    imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const Suggestions = () => {
  return (
    <div className="w-1/5 p-10 bg-gray-100 dark:bg-gray-800 h-screen">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        Sugestões para você
      </h2>
      {suggestions.map((suggestion) => (
        <div key={suggestion.id} className="flex items-center mb-4">
          <img
            src={suggestion.imageUrl}
            alt={suggestion.name}
            className="w-12 h-12 rounded-full mr-3"
          />
          <p className="text-gray-800 dark:text-white">{suggestion.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;

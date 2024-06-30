export default function Button({ children }) {
  return (
    <button className="items-center justify-center px-2 text-gray-400 border border-gray-400 rounded-md hover:bg-gray-500 hover:text-gray-200">
      {children}
    </button>
  );
}

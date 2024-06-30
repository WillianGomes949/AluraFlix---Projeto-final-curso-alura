import { Link } from 'react-router-dom';

export default function Menulink({ children, to }) {
  return (
    <Link
      className="items-center justify-center px-2 text-gray-400 border border-gray-400 rounded-md hover:bg-gray-500 hover:text-gray-200"
      to={to}
    >
      {children}
    </Link>
  );
}

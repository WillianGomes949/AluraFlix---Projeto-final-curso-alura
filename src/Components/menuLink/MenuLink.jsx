import { Link } from 'react-router-dom';

export default function Menulink({ children, to }) {
  return <Link to={to}>{children}</Link>;
}

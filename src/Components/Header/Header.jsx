import Image from 'next/image';
import Menulink from '../menuLink/MenuLink';

export default function Header() {
  return (
    <header className="bg-gray-900">
      <div className="m-auto w-4/5 flex justify-between p-2">
        <Image src="/logoMain.png" width={100} height={100} alt="logo" />
        <nav className="space-x-2">
          <button className="space-x-2">
            <Menulink to="/">Inicio</Menulink>
            <Menulink to="/novoVideo">Novo video</Menulink>
          </button>
        </nav>
      </div>
    </header>
  );
}

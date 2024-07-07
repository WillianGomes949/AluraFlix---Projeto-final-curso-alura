import Image from 'next/image';
import Menulink from '../menuLink/MenuLink';
import Button from '../button/Button';

export default function Header() {
  return (
    <header className="bg-gray-900">
      <div className="m-auto w-4/5 flex justify-between p-2">
        <Image src="/logoMain.png" width={100} height={100} alt="logo" />
        <nav className="space-x-2">
          <Button>
            <Menulink to="/">Inicio</Menulink>
          </Button>
          <Button>
            <Menulink to="/novoVideo">Novo video</Menulink>
          </Button>
        </nav>
      </div>
    </header>
  );
}

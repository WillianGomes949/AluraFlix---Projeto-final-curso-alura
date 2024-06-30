import Image from 'next/image';
import Button from '../Button/Button';

export default function Header() {
  return (
    <header className="bg-gray-900">
      <div className="m-auto w-4/5 flex justify-between p-2">
        <Image src="/logoMain.png" width={100} height={100} alt="logo" />
        <div className="space-x-2">
          <Button>Inicio</Button>
          <Button>Novo vídeo</Button>
        </div>
      </div>
    </header>
  );
}

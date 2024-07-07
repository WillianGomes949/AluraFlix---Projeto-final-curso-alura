import Button from '../button/Button';
import CarrosselVideo from '../carroselVideo/CarrosselVideo';

export default function SectionVideos() {
  return (
    <div className="w-4/5 m-auto">
      <Button>FrontEnd</Button>
      <section className="flex">
        <CarrosselVideo />
        <CarrosselVideo />
        <CarrosselVideo />
        <CarrosselVideo />
      </section>
    </div>
  );
}

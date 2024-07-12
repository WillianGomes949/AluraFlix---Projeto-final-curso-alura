import Button from '../button/Button';
import CardVideo from '../carroselVideo/CardVideo';

export default function SectionVideos(props) {
  return (
    <div className="w-4/5 m-auto">
      <Button>{props.area}</Button>
      <section className="flex">
        <CardVideo video="bicicleta" />
        <CardVideo video="carro" />
        <CardVideo video="voar" />
        <CardVideo video="correr" />
      </section>
    </div>
  );
}

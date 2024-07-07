import Button from '../button/Button';
export default function Banner() {
  return (
    <section className="flex m-auto w-4/5 justify-betwee my-10">
      <div className="w-3/6">
        <Button>Front End</Button>
        <h1 className="font-black">Seo com react</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, vero
          totam? Sit placeat sequi molestiae, blanditiis ipsum est doloribus
          quod eaque, corporis sint voluptatem possimus corrupti assumenda ea
          asperiores dolorum?
        </p>
      </div>
      <div className="w-3/6">
        <h1>video</h1>
      </div>
    </section>
  );
}

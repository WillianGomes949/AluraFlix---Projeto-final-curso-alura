import Button from '../button/Button';
export default function Banner() {
  return (
    <section className="flex flex-wrap m-auto w-4/5 justify-between my-10">
      <div className="w-3/6 text-justify">
        <Button>Front End</Button>
        <h1 className="font-black text-gray-200">Seo com react</h1>
        <p className="text-gray-200">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, vero
          totam? Sit placeat sequi molestiae, blanditiis ipsum est doloribus
          quod eaque, corporis sint voluptatem possimus corrupti assumenda ea
          asperiores dolorum?
        </p>
      </div>
      <div className="w-3/6 flex justify-center">
        <h1 className="rounded w-96 h-60 bg-gray-500">video</h1>
      </div>
    </section>
  );
}

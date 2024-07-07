import Button from '../button/Button';

export default function Formulario() {
  return (
    <div className="bg-gray-800  flex justify-center p-4">
      <section className="w-4/5">
        <div className="flex flex-col justify-center items-center h-20 text-gray-200 text-center">
          <h1 className="font-semibold">Novo Video</h1>
          <p className="font-light">
            Complete o formulario para criar um novo card
          </p>
        </div>
        <h2 className="flex h-12 text-left font-semibold text-gray-200 border-t-2 border-b-2 border-blue-500 items-center mb-3">
          Criar Card
        </h2>
        <form className="flex flex-col gap-2">
          <div>
            <label for="titulo" className="mt-1 text-gray-200 mr-4">
              Titulo
            </label>
            <input
              className="rounded-md p-1 bg-gray-700 mr-4 text-gray-400 focus:ring-offset-2 focus:ring-4 focus:ring-blue-600"
              type="text"
              name="titulo"
              id="titulo"
              placeholder="Digite o titulo"
            />
            <label for="categoria" className="mt-1 text-gray-200 mr-4">
              Categoria
            </label>
            <select
              name="categoria"
              id="categoria"
              className=" rounded-md p-1 bg-gray-700 text-gray-200"
            >
              <option value="backEnd">Back End</option>
              <option value="frontEnd">Front End</option>
              <option value="mobile">Mobile</option>
            </select>
          </div>
          <div>
            <label for="imagem" className="mt-1 text-gray-200 mr-4">
              Imagem
            </label>
            <input
              className=" rounded-md p-1 bg-gray-700 mr-4 text-gray-400 focus:ring-offset-2 focus:ring-4 focus:ring-blue-600 required required:border-red-500"
              type="text"
              name="imagem"
              id="imagem"
              placeholder="O link e obrigatorio"
            />
            <label for="videoLink" className="mt-1 text-gray-200 mr-4">
              Video
            </label>
            <input
              className=" rounded-md p-1 bg-gray-700 mr-4 text-gray-400 focus:ring-offset-2 focus:ring-4 focus:ring-blue-600"
              type="text"
              name="videoLink"
              id="videoLink"
              placeholder="Digite o link do video"
            />
          </div>
          <div>
            <label for="descricao" className="mt-1 text-gray-200 mr-4">
              Descricao
            </label>
            <br />
            <textarea
              className="w-full rounded-md p-1 bg-gray-700 text-gray-400 focus:ring-offset-2 focus:ring-4 focus:ring-blue-600"
              name="descricao"
              id="descricao"
              placeholder="Sobre o que e esse video?"
              rows={10}
            ></textarea>
          </div>
          <div>
            <Button>Guardar</Button>
            <Button>Limpar</Button>
          </div>
        </form>
      </section>
    </div>
  );
}

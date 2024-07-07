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
        <h2 className="flex h-12 text-left font-semibold text-gray-200 border-t-2 border-b-2 border-gray-200 items-center mb-3">
          Criar Card
        </h2>
        <form>
          <div>
            <label for="titulo" className="mt-1">
              Titulo
            </label>
            <input
              className="border border-gray-200 rounded-md p-1 bg-gray-700"
              type="text"
              name="titulo"
              id="titulo"
              placeholder="digite o titulo"
            />
            <label for="categoria" className="mt-1">
              Categoria
            </label>
            <select
              name="categoria"
              id="categoria"
              className="border border-gray-200 rounded-md p-1 bg-gray-700 text-gray-200"
            >
              <option value="backEnd">Back End</option>
              <option value="frontEnd">Front End</option>
              <option value="mobile">Mobile</option>
            </select>
          </div>
          <div>
            <label for="imagem" className="mt-1">
              Imagem
            </label>
            <input
              className="border border-gray-200 rounded-md p-1 bg-gray-700"
              type="text"
              name="imagem"
              id="imagem"
              placeholder="o link e obrigatorio"
            />
            <label for="videoLink" className="mt-1">
              Video
            </label>
            <input
              className="border border-gray-200 rounded-md p-1 bg-gray-700"
              type="text"
              name="videoLink"
              id="videoLink"
              placeholder="digite o link do video"
            />
          </div>

          <label for="descricao" className="mt-1">
            Descricao
          </label>
          <br />
          <textarea
            className="w-full border border-gray-200 rounded-md p-1 bg-gray-700 text-gray-200"
            name="descricao"
            id="descricao"
            placeholder="sobre o que e esse video?"
            rows={10}
          ></textarea>
        </form>
      </section>
    </div>
  );
}

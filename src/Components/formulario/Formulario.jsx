import Button from '../button/Button';
import CampoTexto from '../campoTexto/CampoTexto';
import ListaSuspensa from '../listaSuspensa/ListaSuspensa';
import TextArea from '../textArea/TextArea';

export default function Formulario() {
  const times = ['front End', 'back End', 'mobile', 'design'];

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
          <div className="flex justify-between">
            <CampoTexto label="Titulo" placeholder="Digite o titulo" />
            <ListaSuspensa label="Categoria" itens={times} />
          </div>

          <div className="flex justify-between">
            <CampoTexto label="Imagem" placeholder="O Link e obrigatorio" />
            <CampoTexto label="Video" placeholder="Digite o link do video" />
          </div>
          <TextArea label="Descricao" placeholder="Sobre o que e esse video" />
          <div>
            <Button>Guardar</Button>
            <Button>Limpar</Button>
          </div>
        </form>
      </section>
    </div>
  );
}

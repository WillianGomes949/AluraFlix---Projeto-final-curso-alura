export default function CardVideo(props) {
  return (
    <div className="w-80 bg-slate-400 rounded-sm m-2 p-2">
      <p>{props.video}</p>
      <div className="flex gap-2">
        <p>deletar</p>
        <p>editar</p>
      </div>
    </div>
  );
}

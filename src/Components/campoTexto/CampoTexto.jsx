export default function CampoTexto(props) {
  const placeholderModificada = `${props.placeholder}...`;
  return (
    <>
      <div className="w-2/5">
        <label className="mt-1 text-gray-200 mr-4">{props.label}</label>
        <input
          className="w-full rounded-md p-1 bg-gray-700 mr-4 text-gray-400 focus:ring-offset-2 focus:ring-4 focus:ring-blue-600"
          placeholder={placeholderModificada}
        />
      </div>
    </>
  );
}

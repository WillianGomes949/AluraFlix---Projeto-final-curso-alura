export default function ListaSuspensa(props) {
  return (
    <>
      <div className="w-2/5">
        <label className="mt-1 text-gray-200 mr-4">{props.label}</label>
        <select className="w-full rounded-md p-1 bg-gray-700 text-gray-200 focus:ring-offset-2 focus:ring-4 focus:ring-blue-600">
          {props.itens.map((item) => (
            <option>{item}</option>
          ))}
        </select>
      </div>
    </>
  );
}

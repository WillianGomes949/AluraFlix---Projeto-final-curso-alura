export default function TextArea(props) {
  const placeholder = `${props.placeholder}...`;
  return (
    <>
      <label className="mt-1 text-gray-200 mr-4">{props.label}</label>
      <textarea
        className="w-full rounded-md p-1 bg-gray-700 text-gray-400 focus:ring-offset-2 focus:ring-4 focus:ring-blue-600"
        placeholder={placeholder}
        rows={8}
      ></textarea>
    </>
  );
}

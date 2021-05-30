export default function InputBox(props) {
  return (
    <div className="flex flex-col items-center mt-2 border-2 rounded-lg w-11/12 bg-gray-200 self-center">
      {props.children}
    </div>
  );
}

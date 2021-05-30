export default function ContentBox(props) {
  return (
    <div className="flex flex-col items-center mt-5 mb-5 border-2 rounded-lg w-1/2 h-4/5 bg-gray-200 self-center xs:w-11/12 md:w-11/12 lg:w-1/2">
      {props.children}
    </div>
  );
}

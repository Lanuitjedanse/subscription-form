export default function StepsVisual(props) {
  const complete = `bg-blue-500 text-white rounded-full h-10 w-10 ml-2 text-4xl text-center`;
  const uncomplete = `bg-blue-200 text-white rounded-full h-10 w-10 ml-2 text-4xl text-center`;

  return (
    <div className="flex space-x-6 mt-6">
      <p className={props.renderView > 0 ? complete : uncomplete}>1</p>
      <p className={props.renderView > 1 ? complete : uncomplete}>2</p>
      <p className={props.renderView > 2 ? complete : uncomplete}>3</p>
      <p className={props.renderView > 3 ? complete : uncomplete}>4</p>
    </div>
  );
}

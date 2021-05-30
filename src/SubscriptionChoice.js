import NextButton from "./NextButton";

import InputBox from "./InputBox";
export default function SubscriptionChoice({
  state,
  dispatch,
  handleView,
  calculatePrice,
}) {
  const bgColor = "bg-gray-200";

  const { gygabytes, paymentUpFront, durationSub } = state;

  const infoGygabytes = [
    {
      id: 0,
      name: "3 GB",
      amount: 3,
    },
    {
      id: 1,
      name: "5 GB",
      amount: 5,
    },
    {
      id: 2,
      name: "10 GB",
      amount: 10,
    },
    {
      id: 3,
      name: "20 GB",
      amount: 20,
    },
    {
      id: 4,
      name: "30 GB",
      amount: 30,
    },
    {
      id: 5,
      name: "50 GB",
      amount: 50,
    },
  ];

  const duration = [
    {
      id: 0,
      name: "3 months",
      months: 3,
    },
    {
      id: 1,
      name: "6 months",
      months: 6,
    },
    {
      id: 2,
      name: "12 months",
      months: 12,
    },
  ];

  return (
    <>
      <InputBox>
        <h2 className="mt-5 mb-5 xs:text-xl sm:text-2xl md:text-3xl">
          Choose your Subscription
        </h2>
        <label htmlFor="gygabytes" className="mt-2 text-2">
          Gygabytes:{" "}
        </label>
        <select
          id="gygabytes"
          name="gygabytes"
          className={`${bgColor}`}
          onChange={(e) =>
            dispatch({ field: "gygabytes", value: e.target.value })
          }
          value={gygabytes}
        >
          {infoGygabytes.map((i) => (
            <option key={i.id} value={i.amount} type="text">
              {i.name}
            </option>
          ))}
        </select>
        <label className="mt-2" htmlFor="duration">
          Duration:{" "}
        </label>
        <select
          id="duration"
          name="duration"
          className={`${bgColor}`}
          onChange={(e) =>
            dispatch({ field: "durationSub", value: e.target.value })
          }
          value={durationSub}
        >
          {duration.map((i) => (
            <option key={i.id} value={i.months} type="text">
              {i.name}
            </option>
          ))}
        </select>
        <span className="mt-2">Do you want to pay upfront?</span>
        <div className="mb-5">
          <input
            className="mt-2 mr-2 ml-2"
            type="radio"
            id="paymentUpFrontYes"
            name="paymentUpFront"
            checked={paymentUpFront}
            onChange={() => dispatch({ field: "paymentUpFront", value: true })}
          ></input>
          <label className="mr-2 ml-2" htmlFor="paymentUpFrontYes">
            Yes
          </label>

          <input
            className="mt-2 mr-2 ml-2"
            type="radio"
            id="paymentUpFrontNo"
            name="paymentUpFront"
            checked={!paymentUpFront}
            onChange={() => dispatch({ field: "paymentUpFront", value: false })}
          ></input>
          <label className="mr-2 ml-2" htmlFor="paymentUpFrontNo">
            No
          </label>
        </div>
        <span className=" bg-white h-10 w-32 rounded-lg text-center leading-10">
          Price {calculatePrice(gygabytes)} $
        </span>
      </InputBox>
      <InputBox>
        <div className="self-end mb-5 mt-5">
          <NextButton handleView={handleView} errors={"No error"} />
        </div>
      </InputBox>
    </>
  );
}

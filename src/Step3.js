import { Input } from "semantic-ui-react";

export default function Step3({ state, dispatch }) {
  const inputStyle = "bg-white mb-5 w-52 rounded-lg";
  const { cardCode, cardExpiration, cardNumber } = state;

  return (
    <>
      <h2 className="text-3xl mt-5 mb-5">Step 3</h2>
      <Input
        className={`${inputStyle}`}
        onChange={(e) =>
          dispatch({ field: "cardNumber", value: e.target.value })
        }
        name="card-number"
        type="card"
        placeholder="Credit Card Number"
        autoComplete="off"
        defaultValue={cardNumber}
      ></Input>
      <Input
        className={`${inputStyle}`}
        onChange={(e) =>
          dispatch({ field: "cardExpiration", value: e.target.value })
        }
        name="card-expiration"
        type="text"
        placeholder="Expiration Date"
        autoComplete="off"
        defaultValue={cardExpiration}
      ></Input>
      <Input
        className={`${inputStyle}`}
        onChange={(e) => dispatch({ field: "cardCode", value: e.target.value })}
        name="card-code"
        type="text"
        placeholder="CVC"
        autoComplete="off"
        defaultValue={cardCode}
      ></Input>
    </>
  );
}

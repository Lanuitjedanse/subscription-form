export default function Step4({ state, dispatch }) {
  const {
    first,
    last,
    email,
    address,
    durationSub,
    gygabytes,
    agreementOrder,
    paymentUpFront,
  } = state;
  console.log("agreementOrder", agreementOrder);
  return (
    <>
      <h2 className="text-3xl mt-5 mb-2.5">Confirm your order</h2>
      <p className="mb-2.5 mt-2.5">{first}</p>
      <p className="mb-2.5 mt-2.5">{last}</p>
      <p className="mb-2.5 mt-2.5">{email}</p>
      <p className="mb-2.5 mt-2.5">{address}</p>

      <p className="mb-2.5 mt-2.5">
        Subscription duration: {durationSub} Months
      </p>
      <p className="mb-2.5 mt-2.5">
        Payment upfront: {paymentUpFront ? "Yes" : "No"}
      </p>
      <p className="mb-2.5 mt-2.5">Amount of gygabytes: {gygabytes} GB</p>
      <input
        type="checkbox"
        className={`bg-blue-200 mb-2.5 mt-2.5`}
        id="agreementOrder"
        name="agreement"
        value={agreementOrder}
        onChange={(e) =>
          dispatch({ field: "agreementOrder", value: e.target.checked })
        }
      ></input>
      <label className="mb-5 mt-2.5" htmlFor="agreementOrder">
        I agree to the Terms and Conditions agreement
      </label>
    </>
  );
}

import ConfirmButton from "./ConfirmButton";
import PreviousButton from "./PreviousButton";

export default function SubscriberPaymentInfo({
  state,
  dispatch,
  handleView,
  onSubmit,
  calculatePrice,
}) {
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

  return (
    <>
      <h2 className="mt-5 mb-5 xs:text-xl sm:text-2xl md:text-3xl">
        Confirm your order
      </h2>
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
      <label className="mb-2.5 mt-2.5 text-center" htmlFor="agreementOrder">
        I agree to the Terms and Conditions agreement
      </label>
      <input
        type="checkbox"
        className={`bg-blue-200 mb-2.5 mt-2.5`}
        id="agreementOrder"
        name="agreement"
        checked={agreementOrder}
        onChange={(e) =>
          dispatch({ field: "agreementOrder", value: e.target.checked })
        }
      />
      <span className=" bg-white h-10 w-32 rounded-lg text-center leading-10 mt-5 mb-5">
        Price: {calculatePrice(gygabytes)} $
      </span>

      <div className="flex mt-5 mb-5 xs:space-x-2 md:space-x-40">
        <PreviousButton handleView={handleView} />
        <ConfirmButton
          handleView={handleView}
          onSubmit={onSubmit}
          agreementOrder={agreementOrder}
        />
      </div>
    </>
  );
}

import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";
import isEmpty from "lodash/isEmpty";
import InputBox from "./InputBox";

export default function SubscriberPaymentInfo({
  state,
  dispatch,
  handleView,
  calculatePrice,
}) {
  const inputStyle =
    "bg-white mb-5 w-56 rounded-sm h-11 border p-3 focus:outline-none";
  const { cardCode, cardExpiration, cardNumber, gygabytes } = state;

  return (
    <InputBox>
      <h2 className="mt-5 mb-5 xs:text-xl sm:text-2xl md:text-3xl">
        Credit Card Informations
      </h2>
      <input
        type="number"
        className={`${inputStyle}`}
        onChange={(e) => {
          dispatch({ field: "cardNumber", value: e.target.value.trim() });
        }}
        name="card-number"
        id="cardNumber"
        placeholder="Credit Card Number"
        autoComplete="off"
        defaultValue={cardNumber}
      />

      <input
        className={`${inputStyle}`}
        onChange={(e) => {
          dispatch({ field: "cardExpiration", value: e.target.value });
        }}
        name="card-expiration"
        type="month"
        min="2021-06"
        max="2028-12"
        placeholder="Expiration Date"
        autoComplete="off"
        defaultValue={cardExpiration}
      ></input>

      <input
        className={`${inputStyle}`}
        onChange={(e) => {
          dispatch({ field: "cardCode", value: e.target.value.trim() });
        }}
        name="card-code"
        type="number"
        placeholder="CVC"
        autoComplete="off"
        defaultValue={cardCode}
      ></input>

      <span className=" bg-white h-10 w-32 rounded-lg text-center leading-10">
        Price {calculatePrice(gygabytes)} $
      </span>

      <div className="flex mt-5 mb-5 xs:space-x-2 md:space-x-40">
        <PreviousButton handleView={handleView} />
        <NextButton
          handleView={handleView}
          isEmpty={isEmpty}
          errors={cardNumber && cardCode && cardExpiration}
        />
      </div>
    </InputBox>
  );
}

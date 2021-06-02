import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";
import isEmpty from "lodash/isEmpty";
import InputBox from "./InputBox";
import { useState } from "react";

export default function SubscriberPaymentInfo({
  state,
  dispatch,
  handleView,
  calculatePrice,
}) {
  const checkCreditCardNumber = (e) => {
    if (e.length < 16 || e.length > 16) {
      dispatch({
        field: "checkCardLength",
        value: 1,
      });
    } else if (e.length === 16) {
      dispatch({
        field: "checkCardLength",
        value: 2,
      });
    }
  };

  const checkExpirationDate = (e) => {
    if (e === "") {
      dispatch({
        field: "checkExpiration",
        value: 1,
      });
      return e.value;
    }
    dispatch({
      field: "checkExpiration",
      value: 2,
    });
    return e.value;
  };

  const checkCVC = (e) => {
    console.log("e", e.length);
    if (e.length < 3) {
      dispatch({
        field: "checkCVCCode",
        value: 1,
      });
      return e.value;
    } else if (e.length === 3) {
      dispatch({
        field: "checkCVCCode",
        value: 2,
      });
      return e.value;
    }
  };
  const inputStyle =
    "bg-white mb-5 w-56 rounded-sm h-11 border p-3 focus:outline-none";
  const {
    cardCode,
    cardExpiration,
    cardNumber,
    gygabytes,
    checkCardLength,
    checkExpiration,
    checkCVCCode,
  } = state;

  return (
    <>
      <h2 className="mt-5 mb-5 xs:text-xl sm:text-2xl md:text-3xl">
        Credit Card Informations
      </h2>
      <input
        type="number"
        className={`${inputStyle} ${
          checkCardLength === 1 && `border-red-500`
        } ${checkCardLength === 2 && `border-green-400`}`}
        onChange={(e) => {
          checkCreditCardNumber(e.target.value);
          dispatch({
            field: "cardNumber",
            value: e.target.value.trim(),
          });
        }}
        name="card-number"
        id="cardNumber"
        placeholder="Credit Card Number"
        autoComplete="off"
        defaultValue={cardNumber}
      />

      {checkCardLength === 1 && (
        <p className="text-red-500">
          You need to enter a valid credit card number (16 numbers)!
        </p>
      )}

      <input
        className={`${inputStyle} ${
          checkExpiration === 1 && `border-red-500`
        } ${checkExpiration === 2 && `border-green-400`}`}
        onChange={(e) => {
          checkExpirationDate(e.target.value);
          dispatch({
            field: "cardExpiration",
            value: e.target.value,
          });
        }}
        name="card-expiration"
        type="month"
        min="2021-06"
        max="2028-12"
        placeholder="Expiration Date"
        autoComplete="off"
        defaultValue={cardExpiration}
      />
      {checkExpiration === 1 && (
        <p className="text-red-500">You need to enter an expiration date!</p>
      )}

      <input
        className={`${inputStyle} ${checkCVCCode === 1 && `border-red-500`} ${
          checkCVCCode === 2 && `border-green-400`
        }`}
        onChange={(e) => {
          checkCVC(e.target.value);
          dispatch({
            field: "cardCode",
            value: e.target.value.trim(),
          });
        }}
        name="card-code"
        type="number"
        placeholder="CVC"
        autoComplete="off"
        defaultValue={cardCode}
      />
      {checkCVCCode === 1 && (
        <p className="text-red-500">The CVC code should be 3 numbers</p>
      )}

      <span className=" bg-white h-10 w-32 rounded-lg text-center leading-10">
        Price {calculatePrice(gygabytes)} $
      </span>

      <div className="flex mt-5 mb-5 xs:space-x-2 md:space-x-40">
        <PreviousButton handleView={handleView} />
        <NextButton
          handleView={handleView}
          isEmpty={isEmpty}
          errors={checkCardLength && checkExpiration && checkCVCCode}
        />
      </div>
    </>
  );
}

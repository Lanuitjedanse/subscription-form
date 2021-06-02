import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";
import isEmpty from "lodash/isEmpty";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

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
    "bg-white w-56 rounded-md h-11 border p-3 focus:outline-none";
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
      <div className="flex items-center content-center mb-5">
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

        {checkCardLength === 2 && (
          <FontAwesomeIcon
            icon={faCheck}
            className="text-green-400 absolute ml-64"
          ></FontAwesomeIcon>
        )}

        {checkCardLength === 1 && (
          <FontAwesomeIcon
            icon={faTimes}
            className="text-red-500 absolute ml-64"
          ></FontAwesomeIcon>
        )}
      </div>

      {checkCardLength === 1 && (
        <p className="text-red-500 -ml-6 text-sm">
          Credit Card should be 16 digits
        </p>
      )}

      <div className="flex items-center content-center mb-5">
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

        {checkExpiration === 2 && (
          <FontAwesomeIcon
            icon={faCheck}
            className="text-green-400 absolute ml-64"
          ></FontAwesomeIcon>
        )}

        {checkExpiration === 1 && (
          <FontAwesomeIcon
            icon={faTimes}
            className="text-red-500 absolute ml-64"
          ></FontAwesomeIcon>
        )}
      </div>
      {checkExpiration === 1 && (
        <p className="text-red-500 -ml-2 text-sm">unvalid expiration date</p>
      )}
      <div className="flex items-center content-center mb-5">
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

        {checkCVCCode === 2 && (
          <FontAwesomeIcon
            icon={faCheck}
            className="text-green-400 absolute ml-64"
          ></FontAwesomeIcon>
        )}

        {checkCVCCode === 1 && (
          <FontAwesomeIcon
            icon={faTimes}
            className="text-red-500 absolute ml-64"
          ></FontAwesomeIcon>
        )}
      </div>
      {checkCVCCode === 1 && (
        <p className="text-red-500 mr-20 text-sm">CVC should be 3 digits</p>
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

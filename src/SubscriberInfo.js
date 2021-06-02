import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";
import isEmpty from "lodash/isEmpty";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function SubscriberInfo({
  state,
  dispatch,
  handleView,
  calculatePrice,
}) {
  const checkfirstName = (e) => {
    if (e.length < 2 || /\d/.test(e)) {
      dispatch({
        field: "checkFirst",
        value: 1,
      });
    } else if (e.length >= 2 && !/\d/.test(e)) {
      dispatch({
        field: "checkFirst",
        value: 2,
      });
    }
  };

  const checkLastName = (e) => {
    if (e.length < 2 || /\d/.test(e)) {
      dispatch({
        field: "checkLast",
        value: 1,
      });
    } else if (e.length >= 2 && !/\d/.test(e)) {
      dispatch({
        field: "checkLast",
        value: 2,
      });
    }
  };

  const checkEmailUser = (e) => {
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test(e)) {
      dispatch({
        field: "checkEmail",
        value: 1,
      });
    } else {
      dispatch({
        field: "checkEmail",
        value: 2,
      });
    }
  };

  const checkAddressUser = (e) => {
    if (e.length < 10) {
      dispatch({
        field: "checkAddress",
        value: 1,
      });
    } else if (e.length >= 10) {
      dispatch({
        field: "checkAddress",
        value: 2,
      });
    }
  };

  const inputStyle =
    "bg-white w-56 rounded-md h-11 border p-3 focus:outline-none";
  const {
    first,
    last,
    email,
    address,
    gygabytes,
    checkFirst,
    checkLast,
    checkEmail,
    checkAddress,
  } = state;

  return (
    <>
      <h2 className="mt-5 mb-5 xs:text-xl sm:text-2xl md:text-3xl">
        Personal Informations
      </h2>
      <div className="flex items-center content-center mb-5">
        <input
          className={`${inputStyle} ${checkFirst === 1 && ` border-red-500`} ${
            checkFirst === 2 && `border-green-400`
          }`}
          onChange={(e) => {
            checkfirstName(e.target.value.trim());
            dispatch({
              field: "first",
              value: e.target.value.trim(),
            });
          }}
          name="first"
          id="first"
          type="text"
          placeholder="First Name"
          autoComplete="off"
          defaultValue={first}
        />
        {checkFirst === 2 && (
          <FontAwesomeIcon
            icon={faCheck}
            className="text-green-400 absolute ml-64"
          ></FontAwesomeIcon>
        )}

        {checkFirst === 1 && (
          <FontAwesomeIcon
            icon={faTimes}
            className="text-red-500 absolute ml-64"
          ></FontAwesomeIcon>
        )}
      </div>

      {checkFirst === 1 && (
        <p className="text-red-500 -ml-9 text-sm">
          You need to enter a valid name
        </p>
      )}
      <div className="flex items-center content-center mb-5">
        <input
          className={`${inputStyle} ${checkLast === 1 && `border-red-500`} ${
            checkLast === 2 && `border-green-400`
          }`}
          onChange={(e) => {
            checkLastName(e.target.value.trim());
            dispatch({ field: "last", value: e.target.value.trim() });
          }}
          name="last"
          type="text"
          id="last"
          placeholder="Last Name"
          autoComplete="off"
          defaultValue={last}
        />
        {checkLast === 2 && (
          <FontAwesomeIcon
            icon={faCheck}
            className="text-green-400 absolute ml-64"
          ></FontAwesomeIcon>
        )}

        {checkLast === 1 && (
          <FontAwesomeIcon
            icon={faTimes}
            className="text-red-500 absolute ml-64"
          ></FontAwesomeIcon>
        )}
      </div>
      {checkLast === 1 && (
        <p className="text-red-500 -ml-9 text-sm">
          You need to enter a valid name
        </p>
      )}

      <div className="flex items-center content-center mb-5">
        <input
          className={`${inputStyle} ${checkEmail === 1 && `border-red-500`} ${
            checkEmail === 2 && `border-green-400`
          }`}
          onChange={(e) => {
            checkEmailUser(e.target.value.trim());
            dispatch({ field: "email", value: e.target.value.trim() });
          }}
          name="email"
          id="email"
          type="email"
          placeholder="Email"
          autoComplete="off"
          defaultValue={email}
          required
        />
        {checkEmail === 2 && (
          <FontAwesomeIcon
            icon={faCheck}
            className="text-green-400 absolute ml-64"
          ></FontAwesomeIcon>
        )}

        {checkEmail === 1 && (
          <FontAwesomeIcon
            icon={faTimes}
            className="text-red-500 absolute ml-64"
          ></FontAwesomeIcon>
        )}
      </div>

      {checkEmail === 1 && (
        <p className="text-red-500 ml-3 text-sm">
          You need to enter a valid email address
        </p>
      )}
      <div className="flex items-center content-center mb-5">
        <input
          className={`${inputStyle} ${checkAddress === 1 && `border-red-500`} ${
            checkAddress === 2 && `border-green-400`
          }`}
          onChange={(e) => {
            checkAddressUser(e.target.value.trim());
            dispatch({ field: "address", value: e.target.value.trim() });
          }}
          name="address"
          id="address"
          type="text"
          placeholder="Address"
          autoComplete="off"
          defaultValue={address}
        />
        {checkAddress === 2 && (
          <FontAwesomeIcon
            icon={faCheck}
            className="text-green-400 absolute ml-64"
          ></FontAwesomeIcon>
        )}

        {checkAddress === 1 && (
          <FontAwesomeIcon
            icon={faTimes}
            className="text-red-400 absolute ml-64"
          ></FontAwesomeIcon>
        )}
      </div>

      {checkAddress === 1 && (
        <p className="text-red-500 -ml-6 text-sm">
          You need to enter a valid address
        </p>
      )}
      <span className=" bg-white h-10 w-32 rounded-lg text-center leading-10">
        Price {calculatePrice(gygabytes)} $
      </span>
      <div className="mt-5 mb-5 xs:space-x-2 md:space-x-40">
        <PreviousButton handleView={handleView} />

        <NextButton
          isEmpty={isEmpty}
          handleView={handleView}
          errors={checkFirst && checkLast && checkEmail && checkAddress}
        />
      </div>
    </>
  );
}

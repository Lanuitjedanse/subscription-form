import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";
import ConfirmButton from "./ConfirmButton";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import StepsVisual from "./StepsVisual";

import { useState, useEffect, useReducer } from "react";
import reducer, { initialState } from "./reducer";

export default function SubscriptionForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    first,
    last,
    email,
    address,
    gygabytes,
    paymentUpFront,
    durationSub,
    cardNumber,
    cardExpiration,
    agreementOrder,
    cardCode,
  } = state;

  let [renderView, setRenderView] = useState(0);
  const [condition, setCondition] = useState(true);

  useEffect(() => {
    setRenderView(renderView);
  }, [renderView]);

  const calculatePrice = (gbUnit) => {
    if (paymentUpFront) {
      return gbUnit * 2 - (gbUnit * 2) / 10;
    } else {
      return gbUnit * 2;
    }
  };

  const handleView = (e) => {
    if (e.target.value === "increment" || e.target.value === "submit") {
      setRenderView(renderView + 1);
    } else if (e.target.value === "decrement") {
      setRenderView(renderView - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://httpbin.org/post", {
      method: "post",
      body: JSON.stringify({
        ...state,
        price: calculatePrice(gygabytes),
      }),
    }).then(function (response) {
      setRenderView(renderView + 1);
      alert("Post request successfully sent", response.data);
    });
  };

  return (
    <div className="flex flex-col items-center content-center mt-5">
      <h1 className="text-4xl mt-5 text-center">Cloud Storage Subscription</h1>

      <StepsVisual renderView={renderView} />
      {renderView === 0 && (
        <div className="flex flex-col items-center mt-5 border-2 rounded-lg w-4/5">
          <Step1 dispatch={dispatch} state={state} />

          <div className="space-x-96">
            <div className="invisible">
              <PreviousButton handleView={handleView} />
            </div>
            <NextButton
              handleView={handleView}
              condition={gygabytes && durationSub ? false : true}
            />
          </div>
        </div>
      )}
      {renderView === 1 && (
        <div
          className={`flex flex-col items-center mt-5 border-2 rounded-lgw-4/5`}
        >
          <Step2 dispatch={dispatch} state={state} />
          <div className="space-x-96">
            <PreviousButton handleView={handleView} />

            <NextButton
              handleView={handleView}
              condition={first && last && email && address ? false : true}
            />
          </div>
        </div>
      )}
      {renderView === 2 && (
        <div
          className={`flex flex-col items-center mt-5 border-2 rounded-lg w-4/5`}
        >
          <Step3 dispatch={dispatch} state={state} />
          <div className="flex content-evenly">
            <PreviousButton handleView={handleView} />
            <NextButton
              handleView={handleView}
              condition={
                cardCode && cardNumber && cardExpiration ? false : true
              }
            />
          </div>
        </div>
      )}
      {renderView === 3 && (
        <div
          className={`flex flex-col items-center mt-5 border-2 rounded-lg w-4/5`}
        >
          <Step4 state={state} dispatch={dispatch} renderView={renderView} />
          <div className="flex-start">
            <PreviousButton handleView={handleView} />
          </div>
          <div>
            <ConfirmButton
              handleSubmit={handleSubmit}
              condition={agreementOrder ? false : true}
            />
          </div>
        </div>
      )}
      {renderView === 4 && (
        <div
          className={`flex flex-col items-center mt-5 border-2 rounded-lg w-4/5`}
        >
          <h2 className="text-3xl mt-5 mb-2.5">Your order is confirmed!</h2>
          <p className="mb-2.5 mt-2.5">{first}</p>
          <p className="mb-2.5 mt-2.5">{last}</p>
          <p className="mb-2.5 mt-2.5">
            Subscription duration: {durationSub} Months
          </p>
          <p className="mb-2.5 mt-2.5">
            Payment upfront: {paymentUpFront ? "Yes" : "No"}
          </p>
          <p className="mb-2.5 mt-2.5">Amount of gygabytes: {gygabytes} GB</p>
        </div>
      )}
      <span>Price: {calculatePrice(gygabytes)} $</span>
    </div>
  );
}

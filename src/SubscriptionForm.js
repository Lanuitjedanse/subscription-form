import SubscriptionChoice from "./SubscriptionChoice";
import SubscriberInfo from "./SubscriberInfo";
import SubscriberPaymentInfo from "./SubscriberPaymentInfo";
import SubscriptionConfirmation from "./SubscriptionConfirmation";
import StepsVisual from "./StepsVisual";
import ContentBox from "./ContentBox";
import InputBox from "./InputBox";

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
  } = state;

  let [renderView, setRenderView] = useState(0);

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

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("...state", state);

    fetch("https://httpbin.org/post", {
      method: "post",
      body: JSON.stringify({
        ...state,
        price: calculatePrice(gygabytes),
      }),
    }).then(function (response) {
      setRenderView(renderView + 1);
      alert("Post request successfully sent");
      console.log("response.data", response);
    });
  };

  return (
    <ContentBox>
      <StepsVisual renderView={renderView} />
      {renderView === 0 && (
        <InputBox>
          <SubscriptionChoice
            dispatch={dispatch}
            state={state}
            handleView={handleView}
            calculatePrice={calculatePrice}
          />
        </InputBox>
      )}
      {renderView === 1 && (
        <InputBox>
          {
            <>
              <SubscriberInfo
                dispatch={dispatch}
                state={state}
                handleView={handleView}
                onSubmit={onSubmit}
                calculatePrice={calculatePrice}
              />
            </>
          }
        </InputBox>
      )}
      {renderView === 2 && (
        <InputBox>
          <SubscriberPaymentInfo
            dispatch={dispatch}
            state={state}
            handleView={handleView}
            onSubmit={onSubmit}
            calculatePrice={calculatePrice}
          />
        </InputBox>
      )}
      {renderView === 3 && (
        <InputBox>
          <SubscriptionConfirmation
            state={state}
            dispatch={dispatch}
            renderView={renderView}
            handleView={handleView}
            onSubmit={onSubmit}
            calculatePrice={calculatePrice}
          />
        </InputBox>
      )}
      {renderView === 4 && (
        <InputBox>
          <h2 className="mt-5 mb-5 xs:text-xl sm:text-2xl md:text-3xl">
            Your order is confirmed!
          </h2>
          <p className="mb-2.5 mt-2.5">{first}</p>
          <p className="mb-2.5 mt-2.5">{last}</p>
          <p className="mb-2.5 mt-2.5">{email}</p>
          <p className="mb-2.5 mt-2.5">{address}</p>
          <p className="mb-2.5 mt-2.5">
            Subscription duration: {durationSub} Months
          </p>
          <p className="mb-2.5 mt-2.5">
            Payment upfront: {paymentUpFront ? "Yes \u2705" : "No \u274C"}
          </p>
          <p className="mb-2.5 mt-2.5">Amount of gygabytes: {gygabytes} GB</p>
          <span className=" bg-white h-10 w-32 rounded-lg text-center leading-10 mt-5 mb-5">
            Price {calculatePrice(gygabytes)} $
          </span>
        </InputBox>
      )}
    </ContentBox>
  );
}

export const initialState = {
  first: "",
  last: "",
  email: "",
  address: "",
  gygabytes: 5,
  cardNumber: "",
  cardExpiration: "",
  cardCode: "",
  durationSub: 12,
  renderView: 0,
  condition: true,
  paymentUpFront: false,
  agreementOrder: false,
  errors: false,
};

export default function reducer(state, action) {
  console.log("hello", state, action);
  return {
    ...state,
    [action.field]: action.value,
  };
}

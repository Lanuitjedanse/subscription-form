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
};

export default function reducer(state, action) {
  return {
    ...state,
    [action.field]: action.value,
  };
}

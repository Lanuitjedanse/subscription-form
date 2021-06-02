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
  checkFirst: 0,
  checkLast: 0,
  checkEmail: 0,
  checkAddress: 0,
  checkCardLength: 0,
  checkExpiration: 0,
  checkCVCCode: 0,
};

export default function reducer(state, action) {
  console.log("hello", state, action);
  return {
    ...state,
    [action.field]: action.value,
  };
}

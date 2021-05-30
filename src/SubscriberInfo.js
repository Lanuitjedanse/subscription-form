import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";
import isEmpty from "lodash/isEmpty";
import InputBox from "./InputBox";

export default function SubscriberInfo({
  state,
  dispatch,
  handleView,
  onSubmit,
  calculatePrice,
}) {
  const inputStyle =
    "bg-white mb-5 w-56 rounded-sm h-11 border p-3 focus:outline-none";
  const { first, last, email, address, gygabytes } = state;

  return (
    <>
      <h2 className="mt-5 mb-5 xs:text-xl sm:text-2xl md:text-3xl">
        Personal Informations
      </h2>
      <input
        className={`${inputStyle}`}
        onChange={(e) =>
          dispatch({ field: "first", value: e.target.value.trim() })
        }
        name="first"
        id="first"
        type="text"
        placeholder="First Name"
        autoComplete="off"
        defaultValue={first}
      />

      <input
        className={`${inputStyle}`}
        onChange={(e) => {
          dispatch({ field: "last", value: e.target.value.trim() });
        }}
        name="last"
        type="text"
        id="last"
        placeholder="Last Name"
        autoComplete="off"
        defaultValue={last}
      />

      <input
        className={`${inputStyle}`}
        onChange={(e) => {
          dispatch({ field: "email", value: e.target.value.trim() });
        }}
        name="email"
        id="email"
        type="email"
        placeholder="Email"
        autoComplete="off"
        defaultValue={email}
      />

      <input
        className={`${inputStyle}`}
        onChange={(e) => {
          dispatch({ field: "address", value: e.target.value.trim() });
        }}
        name="address"
        id="address"
        type="text"
        placeholder="Address"
        autoComplete="off"
        defaultValue={address}
      />

      <span className=" bg-white h-10 w-32 rounded-lg text-center leading-10">
        Price {calculatePrice(gygabytes)} $
      </span>

      <div className="mt-5 mb-5 xs:space-x-2 md:space-x-40">
        <PreviousButton handleView={handleView} />

        <NextButton
          isEmpty={isEmpty}
          handleView={handleView}
          errors={first && last && email && address}
        />
      </div>
    </>
  );
}

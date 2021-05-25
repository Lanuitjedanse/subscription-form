import { Input } from "semantic-ui-react";

export default function Step2({ state, dispatch }) {
  const inputStyle = "bg-white mb-5 w-52 rounded-lg";
  const { first, last, email, address } = state;

  return (
    <>
      <h2 className="text-3xl mt-5 mb-5">Step 2</h2>
      <Input
        className={`${inputStyle}`}
        onChange={(e) => dispatch({ field: "first", value: e.target.value })}
        name="first"
        type="text"
        placeholder="First Name"
        autoComplete="off"
        defaultValue={first}
      />
      <Input
        className={`${inputStyle}`}
        onChange={(e) => dispatch({ field: "last", value: e.target.value })}
        name="last"
        type="text"
        placeholder="Last Name"
        autoComplete="off"
        defaultValue={last}
      />
      <Input
        className={`${inputStyle}`}
        onChange={(e) => dispatch({ field: "email", value: e.target.value })}
        name="email"
        type="email"
        placeholder="Email"
        autoComplete="off"
        defaultValue={email}
      />
      <Input
        className={`${inputStyle}`}
        onChange={(e) => dispatch({ field: "address", value: e.target.value })}
        name="address"
        type="address"
        placeholder="Address"
        autoComplete="off"
        defaultValue={address}
      />
    </>
  );
}

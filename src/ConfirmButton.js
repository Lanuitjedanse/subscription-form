import { Button } from "semantic-ui-react";

export default function ConfirmButton({ onSubmit, agreementOrder }) {
  return (
    <>
      <Button
        onClick={(e) => onSubmit(e)}
        color="olive"
        content="Confirm"
        value="submit"
        icon="right arrow"
        labelPosition="right"
        type="Submit"
        disabled={!agreementOrder}
      />
    </>
  );
}

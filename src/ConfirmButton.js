import React from "react";
import { Button } from "semantic-ui-react";

export default function ConfirmButton(props) {
  return (
    <>
      <Button
        onClick={(e) => props.handleSubmit(e)}
        color="green"
        content="Confirm"
        value="submit"
        icon="right arrow"
        labelPosition="right"
        type="Submit"
        disabled={props.condition}
      />
    </>
  );
}

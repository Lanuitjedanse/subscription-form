import { Button } from "semantic-ui-react";

export default function NextButton(props) {
  return (
    <Button
      onClick={(e) => props.handleView(e)}
      inverted
      color="blue"
      content="Next"
      value="increment"
      icon="right arrow"
      labelPosition="right"
      disabled={props.condition}
    />
  );
}

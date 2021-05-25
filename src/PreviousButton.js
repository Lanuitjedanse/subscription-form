import { Button } from "semantic-ui-react";
export default function PreviousButton(props) {
  return (
    <Button
      onClick={(e) => props.handleView(e)}
      inverted
      color="red"
      content="Previous"
      value="decrement"
      icon="left arrow"
      labelPosition="left"
      disabled={props.condition}
    />
  );
}

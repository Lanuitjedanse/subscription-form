import { Button } from "semantic-ui-react";
export default function PreviousButton({ handleView }) {
  return (
    <Button
      onClick={(e) => handleView(e)}
      inverted
      color="red"
      content="Previous"
      value="decrement"
      icon="left arrow"
      labelPosition="left"
    />
  );
}

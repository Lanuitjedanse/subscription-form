import { Button } from "semantic-ui-react";

export default function NextButton({ handleView, errors }) {
  return (
    <Button
      onClick={(e) => handleView(e)}
      inverted
      color="blue"
      content="Next"
      value="increment"
      icon="right arrow"
      type="submit"
      labelPosition="right"
      disabled={errors === 1 || errors === 0}
    />
  );
}

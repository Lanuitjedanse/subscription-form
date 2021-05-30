import { Button } from "semantic-ui-react";

import isEmpty from "lodash/isEmpty";

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
      disabled={isEmpty(errors)}
    />
  );
}

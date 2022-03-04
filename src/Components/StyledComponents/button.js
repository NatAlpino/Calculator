import Styled from "styled-components";
import { IconButton } from "@material-ui/core";

const StyledButton = Styled(IconButton)`
  && {
    margin-right: 8px;
    height: 44px;
    width: 44px;

    background-color: ${({ color }) => {
      if (color === "pink") {
        return "#9c325c";
      }
      if (color === "rose") {
        return "#4c264b";
      }
      if (color === "purple") {
        return "#412973";
      }
    }};
  }
`;

export default StyledButton;

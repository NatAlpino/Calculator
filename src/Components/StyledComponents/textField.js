import Styled from "styled-components";
import { TextField } from "@material-ui/core"

const StyledTextField = Styled(TextField)`
&& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline {
    border-radius: 10px;
    padding: 18.5px 14px;
    background-color: #00000000;
    margin-bottom: 5%;
    margin-top: 5%;
    margin-left: 5%;
    margin-right: 5%;
    text-align: right;
    font-weight: bold;
    font-size: 18px;
    font-color: #fff
    opacity: 0.5;
    }
&& .MuiOutlinedInput-input {
  padding: 12px 14px;
  text-align: right;
  font-size: 18px;
  margin-top: 5%;
  margin-right: 5%;
}
`;
export default StyledTextField;

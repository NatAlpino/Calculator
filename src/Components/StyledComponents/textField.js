import Styled from "styled-components";
import { TextField } from "@material-ui/core"

const StyledTextField = Styled(TextField)`
&& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline {{
       border-color: #00000000;
    }
`



export default StyledTextField;

//   input {
//    width: 80%;
//     margin-right: 10px;
//     margin-top: 10px;
//     margin-left: 10px;
//     margin-bottom: 10px;
//     text-align: right;
//     font-weight: bold;
//     font-size: 18px;
//     background-color: #c4a7fa;
//     border-radius: 0.5em;
//   }
//   opacity: 0.5;
//   text-align: right;
//   font-weight: bold;
// `;
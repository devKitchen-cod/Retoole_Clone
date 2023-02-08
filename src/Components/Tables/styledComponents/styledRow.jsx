import { TableRow } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: "white",

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
export default StyledTableRow;

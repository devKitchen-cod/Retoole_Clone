import { Box } from "@mui/material";
import React from "react";

const MyChipCom = () => {
  return (
    <Box
      size="sm"
      sx={{
        display: "block",
        width: "100px",
        marginLeft: "80px",
        backgroundColor: "rgb(243, 188, 188)",
        color: "red",
        borderRadius: "5px",
        padding: "0px",
        textAlign: "center",
        fontWeight: "600",
        fontSize: "15px",
        border: "none",
      }}
    >
      <span style={{ marginTop: "20px" }}>+ $ 555.2552</span>
    </Box>
  );
};

export default MyChipCom;

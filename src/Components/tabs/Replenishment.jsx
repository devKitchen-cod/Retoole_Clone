import { Button, Grid, Paper } from "@mui/material";
import Input from "@mui/joy/Input";
import { Box } from "@mui/system";
import React from "react";
import MyChipCom from "../myChipCom";
import TablesRep from "../Tables/Table-Replenishment";

const Replenishment = () => {
  return (
    <Grid container direction={"column"} xs={12} rowSpacing={5}>
      <Grid item>
        <Paper elevation={5}>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Grid
              container
              direction={"row"}
              xs={8}
              //   marginLeft
              sx={{
                // display: "flex"  ,
                justifyContent: "space-between",
                padding: "20px",
                textAlign: "center",
                marginLeft: "30px",
              }}
            >
              <Grid item>
                <span
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  Target Market Qty
                </span>
                <span style={{ fontSize: "30px", fontWeight: "600" }}>
                  {" "}
                  13400
                </span>
              </Grid>
              <Grid item>
                <span
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  In Market Qty
                </span>
                <span style={{ fontSize: "30px", fontWeight: "600" }}>
                  {" "}
                  13400
                </span>
              </Grid>
              <Grid item>
                <span
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  Recommended Qty
                </span>
                <span style={{ fontSize: "30px", fontWeight: "600" }}>
                  {" "}
                  13400
                </span>
              </Grid>
            </Grid>

            <Grid container xs={7} sx={{ marginLeft: "0px" }}>
              <Grid item xs={12} sx={{}}>
                <Box sx={{ marginLeft: "50px" }}>
                  <Grid
                    container
                    xs={12}
                    sx={{
                      padding: "20px",
                      textAlign: "center",
                    }}
                  >
                    <Grid xs={6} sx={{ marginBottom: "20px" }}>
                      <span
                        style={{
                          display: "block",
                          fontSize: "13px",
                          fontWeight: "600",
                        }}
                      >
                        Budgeted Cost
                      </span>
                      <span style={{ fontSize: "30px", fontWeight: "600" }}>
                        {" "}
                        $ 4,155.27
                      </span>
                    </Grid>
                    <Grid xs={6} sx={{ marginLeft: "0px" }}>
                      <span
                        style={{
                          display: "block",
                          fontSize: "13px",
                          fontWeight: "600",
                        }}
                      >
                        Requested Qty
                      </span>
                      <span style={{ fontSize: "30px", fontWeight: "600" }}>
                        {" "}
                        0
                      </span>{" "}
                    </Grid>
                    <Grid xs={6}>
                      <span
                        style={{
                          display: "block",
                          fontSize: "13px",
                          fontWeight: "600",
                        }}
                      >
                        Recommended Cost
                      </span>
                      <span style={{ fontSize: "30px", fontWeight: "600" }}>
                        {" "}
                        $ 53,264.46
                      </span>{" "}
                    </Grid>
                    <Grid xs={6}>
                      <span
                        style={{
                          display: "block",
                          fontSize: "13px",
                          fontWeight: "600",
                        }}
                      >
                        Order Cost
                      </span>
                      <span style={{ fontSize: "30px", fontWeight: "600" }}>
                        {" "}
                        $ 0.0
                      </span>
                      <MyChipCom />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper elevation={5}>
          <Box>
            <TablesRep />
          </Box>
        </Paper>
      </Grid>
      <Grid
        item
        xs={12}
        display={"flex"}
        justifyContent={"end"}
        marginTop={"20px"}
      >
        <Paper elevation={2} sx={{ height: "60px", padding: "15px" }}>
          <Box sx={{ marginTop: "10px", display: "flex" }}>
            <span style={{ marginRight: "15px", marginTop: "5px" }}>Notes</span>
            <Input
              placeholder="Enter Order Notes"
              variant="outlined"
              size="sm"
              sx={{
                marginRight: "10px",
                borderColor: "rgb(219, 219, 219) !important",
              }}
            />
            <Button variant="contained" sx={{ width: "100px" }}>
              Save
            </Button>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Replenishment;

import { Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TableDetails from "../Tables/Table-Details";

const Details = () => {
  const data = [
    {
      tittle: "Replen Qty Requested",
      count: "40",
    },
    {
      tittle: "Total Replen Cost Requested",
      count: "$ 4,875.46",
    },
    {
      tittle: "Replen Qty Requested",
      count: "40",
    },
    {
      tittle: "Total Replen Cost Requested",
      count: "$ 4,875.46",
    },
    {
      tittle: "Replen Qty Requested",
      count: "40",
    },
    {
      tittle: "Total Replen Cost Requested",
      count: "$ 4,875.46",
    },
    {
      tittle: "Replen Qty Requested",
      count: "40",
    },
  ];
  return (
    <Grid container direction={"column"} xs={12} rowSpacing={5}>
      <Grid item>
        <Paper elevation={5}>
          <Box sx={{ display: "flex" }}>
            <Grid container xs={12} sx={{ display: "flex" }}>
              <Grid item xs={12}>
                <Box>
                  <Grid
                    container
                    xs={12}
                    sx={{
                      padding: "20px",
                      textAlign: "center",
                    }}
                  >
                    {data.map((item) => (
                      <Grid xs={3} sx={{ marginBottom: "20px" }}>
                        <span
                          style={{
                            display: "block",
                            fontSize: "13px",
                            fontWeight: "600",
                          }}
                        >
                          {item.tittle}
                        </span>

                        <span style={{ fontSize: "30px", fontWeight: "600" }}>
                          {" "}
                          {item.count}
                        </span>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Grid>
      <Grid item>
        <Paper elevation={5}>
          <TableDetails />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Details;

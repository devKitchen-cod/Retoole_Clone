import { Box, Button, Grid, Paper } from "@mui/material";
import React from "react";
import TableOpenings from "../Tables/Table-Openings-Buildings";
import TabOpeningsUnits from "../Tables/Table-Openings-Units";

const Openings = () => {
  const data = [
    {
      tittle: "Units",
      count: "0",
    },
    {
      tittle: "King Beds",
      count: "0",
    },
    {
      tittle: "Qeen Beds",
      count: "0",
    },
    {
      tittle: "Kitchens",
      count: "0",
    },
    {
      tittle: "Double Beds",
      count: "0",
    },
    {
      tittle: "Sofa Beds",
      count: "0",
    },
    {
      tittle: "Single Beds",
      count: "0",
    },
    {
      tittle: "Bathrooms",
      count: "0",
    },
  ];
  return (
    <Grid container direction={"column"} xs={12} rowSpacing={3}>
      <Grid item>
        <Paper elevation={5}>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Grid container xs={12} sx={{ display: "flex" }}>
              <Grid item xs={12} sx={{}}>
                <Box sx={{}}>
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
      <span style={{ marginTop: "30px", fontSize: "16px", fontWeight: "600" }}>
        Buildings
      </span>
      <Grid item xs={12}>
        <Paper elevation={5}>
          <Box sx={{}}>
            <TableOpenings />
          </Box>
        </Paper>
      </Grid>
      <span style={{ marginTop: "30px", fontSize: "16px", fontWeight: "600" }}>
        Units
      </span>
      <Grid item xs={12}>
        <Paper elevation={5}>
          <Box sx={{}}>
            <TabOpeningsUnits />
          </Box>
        </Paper>
      </Grid>

      <Grid
        item
        xs={4}
        sx={{ display: "flex", justifyContent: "end", marginTop: "20px" }}
      >
        <Button
          variant="contained"
          sx={{ width: "200px" }}
        >
          Save
        </Button>
      </Grid>
    </Grid>
  );
};

export default Openings;

import { DatePicker, LocalizationProvider } from "@mui/lab";
import {
  Button,
  Grid,
  Input,
  MenuItem,
  Paper,
  Select,
  TextField,
  tooltipClasses,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Tables from "../Tables/Table-Cycle-Count";

const CycleCount = () => {
  const [value, setValue] = React.useState(null);
  const shelf = 0;
  const transit = 0;
  const total = 0;

  return (
    <Paper
      elevation={1}
      sx={{
        margin: "10px",
      }}
    >
      <Box
        sx={{
          margin: "20px",
          paddingBottom: "18px",
        }}
      >
        <Grid container direction="column">
          <Grid item xs={5} sx={{}}>
            <Box
              sx={{
                margin: "5px",
                height: "6vh",
                display: "flex",
                justifyContent: "start",
                alignContent: "baseline",
              }}
            >
              <Box sx={{ marginTop: "10px" }}>
                <span>Cycle Count Date*</span>
              </Box>

              <Box sx={{ marginLeft: "78px" }}>
                <TextField
                  error
                  size="small"
                  sx={{
                    height: "15px",
                    width: "200px",
                    border: "gray",
                  }}
                  helperText="This feld is requered."
                />
              </Box>
            </Box>

            <Box
              sx={{
                marginTop: "20px",
                display: "flex",
              }}
            >
              <Box>
                <span>Number of days of laundry unaccounted for:*</span>
              </Box>
              <Box>
                <Select
                  sx={{
                    height: "30px",
                    marginLeft: "50px",
                  }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sx={{ marginTop: "30px" }}>
            <Paper elevation={1}>
              <Box sx={{ height: "9vh" }}>
                <Grid container direction={"row"}>
                  <Grid item xs={4} sx={{}}>
                    <Box sx={{ textAlign: "center" }}>
                      <span style={{ display: "block" }}>
                        Shelf Count Total
                      </span>
                      <span style={{ fontSize: "30px" }}> {shelf}</span>
                    </Box>
                  </Grid>
                  <Grid item xs={4} sx={{}}>
                    <Box sx={{ textAlign: "center" }}>
                      <span style={{ display: "block" }}>
                        Shelf Count Total
                      </span>
                      <span style={{ fontSize: "30px" }}> {shelf}</span>
                    </Box>
                  </Grid>{" "}
                  <Grid item xs={4} sx={{}}>
                    <Box sx={{ textAlign: "center" }}>
                      <span style={{ display: "block" }}>
                        Shelf Count Total
                      </span>
                      <span style={{ fontSize: "30px" }}> {shelf}</span>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} sx={{ marginTop: "30px" }}>
            <Tables />
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "end ",
              marginTop: "1em",
            }}
          >
            <Button variant="contained" sx={{ width: "200px" }}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default CycleCount;

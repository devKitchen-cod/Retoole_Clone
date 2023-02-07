import {
  Button,
  Grid, 
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Tables from "../Tables/Table-Cycle-Count";
import styles from "./styles/cycle_count.module.scss";
const CycleCount = () => {
  const shelf = 0;

  return (
    <Paper elevation={1} className={styles.myPaper}>
      <Box className={styles.myBox}>
        <Grid className={styles.myGridCont} container direction="column">
          <Grid className={styles.myGridItem_menu} item xs={5}>
            <Box className={styles.myBox_menu_date_count}>
              <Box className={styles.myBox_menu_date}>
                <span>Cycle Count Date*</span>
              </Box>

              <Box className={styles.myBox_menu_input}>
                <TextField
                  className={styles.date_input}
                  error
                  size="small"
                  helperText="This feld is requered."
                />
              </Box>
            </Box>

            <Box className={styles.myBox_laundry}>
              <Box>
                <span>Number of days of laundry unaccounted for:*</span>
              </Box>

              <Box>
                <Select
                  className={styles.mySelect_laundry}
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

          <Grid className={styles.myGridItem_topBar} item xs={12}>
            <Paper elevation={1}>
              <Box className={styles.myBox_topBar} sx={{ height: "9vh" }}>
                <Grid container direction={"row"}>
                  <Grid item xs={4}>
                    <Box className={styles.myBox_item1}>
                      <span className={styles.item_title}>
                        Shelf Count Total
                      </span>
                      <span className={styles.item_value}> {shelf}</span>
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box className={styles.myBox_item2}>
                      <span className={styles.item_title}>
                        Shelf Count Total
                      </span>
                      <span className={styles.item_value}> {shelf}</span>
                    </Box>
                  </Grid>{" "}
                  <Grid item xs={4}>
                    <Box className={styles.myBox_item3}>
                      <span className={styles.item_title}>
                        Shelf Count Total
                      </span>
                      <span className={styles.item_value}> {shelf}</span>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>

          <Grid className={styles.myGridItem_table} item xs={12}>
            <Tables />
          </Grid>

          <Grid className={styles.myGridItem_save} item xs={12}>
            <Button className={styles.myButton_save} variant="contained">
              Save
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default CycleCount;

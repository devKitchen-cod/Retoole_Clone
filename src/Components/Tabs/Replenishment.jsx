import { Button, Grid, Paper } from "@mui/material";
import Input from "@mui/joy/Input";
import { Box } from "@mui/system";
import React from "react";
import MyChipCom from "../myChipCom";
import TablesRep from "../Tables/Table-Replenishment";
import styles from "./styles/replenishment.module.scss";
const Replenishment = () => {
  return (
    <Grid
      className={styles.myGridCont}
      container
      direction={"column"}
      xs={12}
      rowSpacing={5}
    >
      <Grid className={styles.myGridItem_topBar} item>
        <Paper className={styles.myPaper_topBar} elevation={5}>
          <Box className={styles.myBox_topBar}>
            <Grid
              className={styles.myGridCont_topBar}
              container
              direction={"row"}
              xs={8}
            >
              <Grid item>
                <span className={styles.item_title}>Target Market Qty</span>
                <span className={styles.item_value}> 13400</span>
              </Grid>
              <Grid item>
                <span className={styles.item_title}>In Market Qty</span>
                <span className={styles.item_value}> 13400</span>
              </Grid>
              <Grid item>
                <span className={styles.item_title}>Recommended Qty</span>
                <span className={styles.item_value}> 13400</span>
              </Grid>
            </Grid>

            <Grid container xs={7}>
              <Grid item xs={12}>
                <Box className={styles.myBox_topBar_cost}>
                  <Grid
                    container
                    xs={12}
                    className={styles.myGridCont_items}
                   
                  >
                    <Grid  sx={{marginBottom: '20px'}} xs={6}>
                      <span
                        className={styles.budgetItem_title}
                       
                      >
                        Budgeted Cost
                      </span>
                      <span className={styles.budgetItem_value}>
                        {" "}
                        $ 4,155.27
                      </span>
                    </Grid>
                    <Grid xs={6}>
                      <span
                        className={styles.budgetItem_title}
                      
                      >
                        Requested Qty
                      </span>
                      <span className={styles.budgetItem_value}> 0</span>{" "}
                    </Grid>
                    <Grid xs={6}>
                      <span
                        className={styles.budgetItem_title}
                        
                      >
                        Recommended Cost
                      </span>
                      <span className={styles.budgetItem_value}>
                        {" "}
                        $ 53,264.46
                      </span>{" "}
                    </Grid>
                    <Grid xs={6}>
                      <span
                        className={styles.budgetItem_title}
                        
                      >
                        Order Cost
                      </span>
                      <span className={styles.budgetItem_value} >
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
        className={styles.myGridItem_orderNotes}
       
      >
        <Paper elevation={2} className={styles.myPaper_orderNotes} >
          <Box className={styles.myBox_orderNotes} >
            <span >Notes</span>
            <Input
            className={styles.myInput_orderNotes}
              placeholder="Enter Order Notes"
              variant="outlined"
              size="sm"
             
            />
            <Button className={styles.myButton_orderNotes_save} variant="contained" >
              Save
            </Button>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Replenishment;

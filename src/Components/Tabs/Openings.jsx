import { Box, Button, Grid, Paper } from "@mui/material";
import React from "react";
import TableOpenings from "../Tables/Table-Openings-Buildings";
import TabOpeningsUnits from "../Tables/Table-Openings-Units";
import styles from "./styles/openings.module.scss";
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
          <Box>
            <Grid container xs={12}>
              <Grid item xs={12}>
                <Box>
                  <Grid container xs={12} className={styles.myGridCont_topBar}>
                    {data.map((item) => (
                      <Grid
                        className={styles.topBar_items}
                        xs={3}
                        sx={{ marginBottom: "20px" }}
                      >
                        <span className={styles.item_title}>{item.tittle}</span>
                        <span className={styles.item_value}> {item.count}</span>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Grid>
      <span className={styles.tip}>Buildings</span>
      <Grid item xs={12}>
        <Paper elevation={5}>
          <Box>
            <TableOpenings />
          </Box>
        </Paper>
      </Grid>
      <span className={styles.tip}>Units</span>
      <Grid item xs={12}>
        <Paper elevation={5}>
          <Box>
            <TabOpeningsUnits />
          </Box>
        </Paper>
      </Grid>

      <Grid item xs={4} className={styles.myGridItem_save}>
        <Button className={styles.myButton_save} variant="contained">
          Save
        </Button>
      </Grid>
    </Grid>
  );
};

export default Openings;

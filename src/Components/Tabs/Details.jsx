import { Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TableDetails from "../Tables/Table-Details";
import styles from "./styles/details.module.scss";
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
          <Box>
            <Grid container xs={12}>
              <Grid item xs={12}>
                <Box>
                  <Grid container xs={12} className={styles.myGridCont_topBar}>
                    {data.map((item) => (
                      <Grid xs={3} className={styles.myGridItem_topBar}>
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
      <Grid item>
        <Paper elevation={5}>
          <TableDetails />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Details;

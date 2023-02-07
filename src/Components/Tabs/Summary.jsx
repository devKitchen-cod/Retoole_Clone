import { Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import DownloadModal from "../modals/summary-download-modal";
import MyChipCom from "../myChipCom";
import TableSummary from "../Tables/Table-Summary";
import styles from "./styles/summary.module.scss";
const Summary = () => {
  const data = [
    {
      tittle: "Replen Qty Requested",
      count: "40",
      title2: "Total Replen Cost Requested",
      cost: "$ 4,875.46",
      isChipRed: false,
      isChipGreen: false,
      value: "",
    },
    {
      tittle: "Onboarding Qty Requested",
      count: "40,000",
      title2: "Total Onboarding Cost ",
      cost: "$ 44,875.46",
      isChipRed: false,
      isChipGreen: false,
    },
    {
      tittle: "Total Qty Requested",
      count: "4,847",
      title2: "Total Cost Requested",
      cost: "$ 46,875.46",
      isChipRed: false,
      isChipGreen: false,
    },
    {
      tittle: "Total Qty Actual",
      count: "4,968",
      title2: "Total Cost Actual",
      cost: "$ 48,875.46",
      isChipRed: false,
      isChipGreen: false,
    },
    {
      tittle: "Replen Qty Actual",
      count: "40",
      title2: "Replen Cost Actual",
      cost: "$ 3,875.46",
      isChipRed: true,
      isChipGreen: false,
    },
  ];
  const [open, setOpen] = useState(false);

  return (
    <Grid container direction={"column"} xs={12} rowSpacing={0}>
      <Grid item>
        <Paper elevation={5}>
          <Box>
            <Grid container xs={12}>
              <Grid item xs={12}>
                <Box>
                  <Grid container xs={12} className={styles.myGridCont_topBar}>
                    {data.map((item) => (
                      <Grid className={styles.topBar_items} xs={2}>
                        <span className={styles.item_title}>{item.tittle}</span>

                        <span className={styles.item_value}> {item.count}</span>
                        <span className={styles.item_title1}>
                          {item.title2}
                        </span>
                        <span className={styles.item_value}>
                          {item.cost}
                          {item.isChipGreen ? <span>green</span> : <></>}
                          {item.isChipRed ? (
                            <div className={styles.chip}>
                              <MyChipCom />
                            </div>
                          ) : (
                            <></>
                          )}
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
          <Box>
            <TableSummary />
          </Box>
        </Paper>
      </Grid>
      <Grid className={styles.modal} item xs={4}>
        <DownloadModal isOpen={open} />
      </Grid>
    </Grid>
  );
};

export default Summary;

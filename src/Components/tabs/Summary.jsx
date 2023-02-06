import {  Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import DownloadModal from "../modals/summary-download-modal";
import MyChipCom from "../myChipCom";
import TableSummary from "../Tables/Table-Summary";

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

  // const handleOpenDownloadModal = () => {
  //   setOpen(open);

  // };
  return (
    <Grid container direction={"column"} xs={12} rowSpacing={0}>
      <Grid item>
        <Paper elevation={5}>
          <Box sx={{ display: "flex" }}>
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
                      <Grid xs={2} sx={{ marginBottom: "20px" }}>
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
                        <span
                          style={{
                            display: "block",
                            fontSize: "13px",
                            fontWeight: "600",
                            marginTop: "20px",
                          }}
                        >
                          {item.title2}
                        </span>
                        <span style={{ fontSize: "30px", fontWeight: "600" }}>
                          {item.cost}
                          {item.isChipGreen ? <span>green</span> : <></>}
                          {item.isChipRed ? (
                            <div
                              style={{ display: "block", marginLeft: "-20px" }}
                            >
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
      <Grid item xs={4} sx={{ display: "flex", justifyContent: "end", marginTop: '20px' }}>
        <DownloadModal isOpen={open} />
      </Grid>
    </Grid>
  );
};

export default Summary;

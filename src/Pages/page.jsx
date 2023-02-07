import React from "react";
import { Box, Grid, MenuItem, Paper, Select, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import CycleCount from "../Components/Tabs/CycleCount";
import Replenishment from "../Components/Tabs/Replenishment";
import Summary from "../Components/Tabs/Summary";
import Openings from "../Components/Tabs/Openings";
import Details from "../Components/Tabs/Details";
import styles from "./styles/page.module.scss";

const Page = () => {
  const [value, setValue] = React.useState("1");
  const [data, setData] = React.useState([
    {
      title: "City*",
      value: 10,
    },
    {
      title: "Order placed in:",
      value: 10,
    },
    {
      title: "For delivery in:",
      value: 10,
    },
  ]);

  const availableValues = [
    {
      label: "Ten",
      value: 10,
    },
    {
      label: "Twenty",
      value: 20,
    },
    {
      label: "Thirty",
      value: 30,
    },
  ];

  const handleChange = (event) => {
    setData(
      data.map((item) => {
        if (item.title === event.target.name) {
          item.value = event.target.value;
          return item;
        } else return item;
      })
    );
  };

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={styles.myBox}>
      <Paper elevation={2} className={styles.myPaper}>
        <Grid container maxWidth={"lg"} xs={12} className={styles.myGridCont}>
          <Grid item className={styles.myGridItem_selects} xs={7}>
            {data.map((item) => (
              <Box
                className={styles.params_select}
                component="span"
                key={`${item.title}-${item.value}`}
              >
                <Box
                  className={styles.tittle}
                  sx={{ width: "200px", paddingTop: "10px" }}
                >
                  <span>{item.title}</span>
                </Box>

                <Box className={styles.selectBox}>
                  <Select
                    className={styles.mySelect}
                    name={item.title}
                    value={item.value}
                    defaultValue={item.value}
                    onChange={handleChange}
                  >
                    {availableValues.map((item) => (
                      <MenuItem
                        value={item.value}
                        key={`${item.label}-${item.value}`}
                      >
                        {item.label}
                      </MenuItem>
                    ))}
                  </Select>
                </Box>
              </Box>
            ))}
          </Grid>

          <Grid item className={styles.myGridItem_order} xs={5}>
            <Box className={styles.myBox_order}>
              <Box className={styles.myBox_order_span}>
                <span>Order</span>
              </Box>

              <Select
                className={styles.mySelect_order}
                value={availableValues[0].value}
                onChange={handleChange}
              >
                {availableValues.map((item) => (
                  <MenuItem
                    value={item.value}
                    key={`${item.label}-${item.value}`}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          </Grid>
        </Grid>

        <Paper elevation={8} className={styles.myPaper_Tabs}>
          <Box
            className={styles.myBox_Tabs}
            sx={{
              typography: "body1",
            }}
          >
            <TabContext className={styles.myTabContext} value={value}>
              <Box
                className={styles.myBox_tabList}
                sx={{
                  backgroundColor: "rgb(219, 219, 219)",
                  borderTopLeftRadius: "4px",
                  borderTopRightRadius: "4px",
                }}
              >
                <TabList
                  onChange={handleChangeTab}
                  aria-label="lab API tabs example"
                >
                  <Tab
                    sx={{ textTransform: "none !important" }}
                    label="Cycle count"
                    value="1"
                  />
                  <Tab
                    sx={{ textTransform: "none !important" }}
                    label="Replenishment"
                    value="2"
                  />
                  <Tab
                    sx={{ textTransform: "none !important" }}
                    label="Openings"
                    value="3"
                  />
                  <Tab
                    sx={{ textTransform: "none !important" }}
                    label="Summary"
                    value="4"
                  />
                  <Tab
                    sx={{ textTransform: "none !important" }}
                    label="Details"
                    value="5"
                  />
                </TabList>
              </Box>
              <TabPanel value="1">
                <CycleCount />
              </TabPanel>
              <TabPanel value="2">
                <Replenishment />
              </TabPanel>
              <TabPanel value="3">
                <Openings />
              </TabPanel>
              <TabPanel value="4">
                <Summary />
              </TabPanel>
              <TabPanel value="5">
                <Details />
              </TabPanel>
            </TabContext>
          </Box>
        </Paper>
      </Paper>
    </Box>
  );
};

export default Page;

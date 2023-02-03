import React from "react";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import CycleCount from "../Components/tabs/CycleCount";
import Replenishment from "../Components/tabs/Replenishment";
import Summary from "../Components/tabs/Summary";
import Openings from "../Components/tabs/Openings";
import Details from "../Components/tabs/Details";

// import { Container } from "@mui/system";
const Page = () => {
  // const [age, setAge] = React.useState("");
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
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        // border: "2px solid red",
      }}
    >
      <Paper
        elevation={2}
        sx={{
          // height: "60em",
          width: "90em",
        }}
      >
        <Grid container maxWidth={"lg"} xs={12} sx={{ display: "flex" }}>
          <Grid item sx={{ display: "block", float: "left" }} xs={7}>
            {data.map((item) => (
              <Box
                component="span"
                sx={{
                  paddingTop: "20px",
                  paddingLeft: "15px",
                  display: "flex",
                  width: "100%",
                  height: "30px",
                }}
                key={`${item.title}-${item.value}`}
              >
                <Box sx={{ width: "200px", paddingTop: "10px" }}>
                  <span>{item.title}</span>
                </Box>

                <Box>
                  <Select
                    sx={{
                      width: "250px",
                      height: "35px",
                    }}
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

          <Grid
            item
            xs={5}
            sx={{
              float: "right",
              display: "block",
            }}
          >
            <Box
              sx={{
                display: "flex",
                float: "right",
                paddingTop: "20px",
                paddingRight: "30px",
              }}
            >
              <Box
                sx={{
                  paddingRight: "120px",
                  paddingTop: "10px",
                }}
              >
                <span>Order</span>
              </Box>

              <Select
                sx={{
                  width: "250px",
                  height: "35px",
                }}
                // name={item.title}
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

        <Paper elevation={8} sx={{ margin: "30px" }}>
          <Box
            sx={{
              maxWidth: "100%",
              typography: "body1",
            }}
          >
            <TabContext value={value}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
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

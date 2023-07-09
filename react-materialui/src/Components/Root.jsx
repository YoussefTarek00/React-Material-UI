import { Outlet, useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { Avatar } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Logout, Brightness7, Brightness4, Menu } from "@mui/icons-material";
import { useMemo, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import getDesignTokens from "./Style/MyThemes";
import myList from "./Data/PagesData";

const drawerWidth = 240;
const Root = () => {
  const navigate = useNavigate();

  const theme = useTheme();

  // const aaa = useLocation();
  // console.log(aaa.pathname);

  const [mode, setMyMode] = useState(
    localStorage.getItem("currentMode") === null
      ? "light"
      : localStorage.getItem("currentMode") === "dark"
      ? "dark"
      : "light"
  );

  const [noneOrBlock, setNoneOrBlock] = useState("none");

  const [drawerType, setDrawerType] = useState("permanent");

  const showDrawer = () => {
    setDrawerType("temporary");
    setNoneOrBlock("block");
  };

  const hideDrawer = () => {
    setDrawerType("permanent");
    setNoneOrBlock("none");
  };

  const themee = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={themee}>
      <CssBaseline />
      <div>
        <AppBar
          sx={{
            width: { md: `calc(100% - ${drawerWidth}px)` },
            ml: { xs: 0, md: `${drawerWidth}px` },
          }}
          position="static"
        >
          <Toolbar>
            <IconButton
              onClick={() => {
                showDrawer();
              }}
              sx={{ mr: "8px", display: { md: "none" } }}
            >
              <Menu />
            </IconButton>
            <Link
              sx={{
                flexGrow: 1,
                textDecoration: "none",
                "&:hover": { fontSize: "16.5px" },
              }}
              color="inherit"
              href="/"
            >
              My expenses
            </Link>
            <Typography sx={{ mr: 1 }} variant="body1" color="inherit">
              Youssef Tarek
            </Typography>
            <Avatar alt="YT" src="YT" />
          </Toolbar>
        </AppBar>

        <Drawer
          sx={{
            display: { xs: noneOrBlock, md: "block" },
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant={drawerType}
          anchor="left"
          open={true}
          onClose={() => {
            hideDrawer();
          }}
        >
          <List>
            <ListItem
              sx={{ display: "flex", justifyContent: "center", mb: "14px" }}
              disablePadding
            >
              <IconButton
                sx={{ ml: 1 }}
                onClick={() => {
                  localStorage.setItem(
                    "currentMode",
                    mode !== "light" ? "light" : "dark"
                  );

                  setMyMode(mode !== "light" ? "light" : "dark");
                }}
                color="inherit"
              >
                {theme.palette.mode === "dark" ? (
                  <Brightness7 sx={{ color: "orange" }} />
                ) : (
                  <Brightness4 />
                )}
              </IconButton>
            </ListItem>
            <Divider />

            {myList.map((item) => {
              return (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      navigate(item.path);
                    }}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              );
            })}

            <ListItem disablePadding>
              <ListItemButton
              // onClick={() => {
              //   navigate("/logout");
              // }}
              >
                <ListItemIcon>
                  <Logout />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>

        <Box
          component="main"
          sx={{
            mt: "66px",
            ml: { md: `${drawerWidth}px` },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default Root;

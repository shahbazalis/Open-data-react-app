import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputIcon from "@material-ui/icons/Input";
import Tooltip from "@material-ui/core/Tooltip";
import MenuIcon from "@mui/icons-material/Menu";
import { useHistory } from "react-router-dom";

const drawerWidth: number = 240;
const drawerWidthClosed = 60;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const mdTheme = createTheme();
interface Props {
  open: boolean; // your props validation
  openHandler: (event: boolean) => void;
  lbl: string;
}

const Topbar = (props: Props) => {
  const [open, setOpen] = React.useState(true);
  let history = useHistory();
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleSignOut = () => {
    let path = `/`;
    history.push(path);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Tooltip title="Sign Out">
              {/* <Avatar
            id="btn-sign-out"
            alt="Signout"
            className={clsx(classes.btnSignout)}
            onClick={handleSignOut}
            style={style}
          > */}
              <InputIcon onClick={handleSignOut} />
              {/* </Avatar> */}
            </Tooltip>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

export default Topbar;

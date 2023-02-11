import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

export const NavBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  position: "static",
  borderBottom: `4px solid ${theme.palette.grey[800]}`,
}));

export const Heading = styled(Typography)(() => ({
  flexGrow: 1,
  textTransform: "uppercase",
  color: "rgb(229, 9, 20)",
  fontWeight: "bold",
  pointerEvents: "none",
}));

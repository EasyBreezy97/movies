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
  fontWeight:"normal",
  fontSize:"25px",
  cursor:"pointer"
}));

export const ContentWrapper = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "5fr auto",
  alignItems: "center",
  width: "100%",
  "@media (max-width: 900px)": {
    display: "flex",
    flexDirection: "column",
  },
}));

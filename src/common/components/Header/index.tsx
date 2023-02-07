import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import {
  NavBar,
  Heading,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./styled";

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          ></IconButton>
          <Heading
            variant="h5"
            noWrap
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            Movies
          </Heading>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Movies & Shows..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </NavBar>
    </Box>
  );
}

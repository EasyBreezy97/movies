import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { NavBar, Heading } from "@/common/components/Header/styled";
import SearchBar from "@/features/movie-and-tv/SearchBar";

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
              display: { xs: "none", md: "inline" },
            }}
          >
            Movies
          </Heading>
          <SearchBar />
        </Toolbar>
      </NavBar>
    </Box>
  );
}

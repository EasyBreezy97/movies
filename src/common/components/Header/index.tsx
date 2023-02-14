import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import {
  NavBar,
  Heading,
  ContentWrapper,
} from "@/common/components/Header/styled";
import SearchBar from "@/features/movie-and-tv/SearchBar";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const onClick = () => {
    router.push("/");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavBar>
        <Toolbar>
          <ContentWrapper onClick={onClick}>
            <Heading variant="caption" noWrap>
              Movies
            </Heading>
            {router.pathname === "/" && <SearchBar />}
          </ContentWrapper>
        </Toolbar>
      </NavBar>
    </Box>
  );
};

export default Header;

import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  SearchIconWrapper,
  Search as StyledSearch,
  StyledInputBase,
} from "@/common/components/Search/styled";

const Search = () => {
  return (
    <StyledSearch>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Movies & Shows..."
        inputProps={{ "aria-label": "search" }}
      />
    </StyledSearch>
  );
};

export default Search;

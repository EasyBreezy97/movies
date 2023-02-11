import React, { useState, ChangeEvent } from "react";
import { debounce } from "lodash";
import useSearch from "./hooks/useSearch";
import { DEBOUNCE_TIME } from "@/common/helpers/constants";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";

const matcher = (option, value) => option.name === value.title;

const SearchBar = () => {
  const [open, setOpen] = useState(false);

  const { data, error, isLoading, setQueryParams } = useSearch();

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setQueryParams(e.target.value);
  };
  const delayedSearch = debounce((e) => {
    onSearch(e);
  }, DEBOUNCE_TIME);

  return (
    <div>
      <Autocomplete
        sx={{ width: 700, p: 2 }}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        isOptionEqualToValue={matcher}
        getOptionLabel={(option) => option.title || ""}
        options={data || []}
        loading={isLoading}
        renderInput={(params) => (
          <TextField
            {...params}
            onChange={delayedSearch}
            label="Movies and tv shows"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {isLoading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />
    </div>
  );
};

export default SearchBar;

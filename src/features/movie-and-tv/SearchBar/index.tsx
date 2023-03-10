import React, { useState, ChangeEvent, SyntheticEvent } from "react";
import { debounce } from "lodash";
import useSearch from "./hooks/useSearch";
import { DEBOUNCE_TIME } from "@/common/helpers/constants";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import ErrorBox from "@/common/components/ErrorBox";

const matcher = (
  option: { title: string; vote_average: string; name: string },
  value: { title: string; vote_average: string; name: string },
) => option.name === value.title || option.name === value.name;

const SearchBar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const onShowSelect = (e: SyntheticEvent<Element, Event>, data: any) => {
    router.push(`/details/${data?.media_type}=${data?.id}`);
  };

  const { data, error, isLoading, setQueryParams } = useSearch();

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setQueryParams(e.target.value);
  };
  const delayedSearch = debounce((e) => {
    onSearch(e);
  }, DEBOUNCE_TIME);

  return (
    <Autocomplete
      sx={{
        width: { xs: "100%", sm: "100%", md: "500px" },
        p: 2,
        display: "block",
      }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      onChange={onShowSelect}
      isOptionEqualToValue={matcher}
      getOptionLabel={(option: {
        title: string;
        name: string;
        vote_average: string;
      }) => {
        return `${option?.title || option?.name} - (Avg: ${
          option.vote_average
        }) `;
      }}
      options={data || []}
      loading={isLoading}
      renderInput={(params) => {
        return (
          <>
            {error && <ErrorBox error={error} />}
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
          </>
        );
      }}
    />
  );
};

export default SearchBar;

import React, { FC } from "react";
import Alert from "@mui/material/Alert";
import { AxiosError } from "axios";
interface IErrorBox {
  error: AxiosError | Error | any;
}
const ErrorBox: FC<IErrorBox> = ({ error }) => {
  console.log({error});

  return (
    <div>
      {error && (
        <Alert severity="error">
          {error?.response?.data?.status_message || error?.message || error}
        </Alert>
      )}
    </div>
  );
};

export default ErrorBox;

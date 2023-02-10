import React, { FC } from "react";
import Skeleton from "@mui/material/Skeleton";

interface ISkeletonGroup {
  quantity?: number;
  height?: number;
}
const SkeletonGroup: FC<ISkeletonGroup> = ({ quantity = 5, height = 75 }) => {
  return (
    <div>
      {[...Array(quantity)].map((_, i) => (
        <Skeleton key={i} height={height} sx={{ bgcolor: "grey.800" }} />
      ))}
    </div>
  );
};

export default SkeletonGroup;

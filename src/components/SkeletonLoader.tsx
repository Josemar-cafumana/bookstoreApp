import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Props {
  count: number;
}

const SkeletonLoader = ({ count }: Props) => {
  return (
    <Skeleton
      containerClassName=" flex justify-center flex-wrap gap-4"
      className=" relative h-[18rem] w-[13rem] rounded-md"
      count={count}
    />
  );
};

export default SkeletonLoader;

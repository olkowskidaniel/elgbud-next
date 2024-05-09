"use client";

import { BeatLoader } from "react-spinners";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  width: "100%",
  height: "100%",
  background: "transparent",
};

const Spinner = ({ loading, style }) => {
  return (
    <BeatLoader
      size={7}
      color="white"
      loading={loading}
      cssOverride={style || override}
      aria-label="Loading Spinner"
    />
  );
};

export default Spinner;

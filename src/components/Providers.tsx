"use client";

import { FC, ReactNode } from "react";

import { Next13ProgressBar } from "next13-progressbar";

interface LayoutProps {
  children: ReactNode;
}

const Providers: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {children}
      <Next13ProgressBar
        height="5px"
        color="#003cff0"
        options={{ showSpinner: false }}
        showOnShallow
      />
    </>
  );
};

export default Providers;

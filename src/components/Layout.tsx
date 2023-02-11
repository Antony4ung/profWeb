import { Box } from "./Box";
import { FC, ReactNode } from "react";

export const Layout : FC<{children:ReactNode}> = ({ children }) => (
  <div
    style={{
      maxWidth:"100vw",
    }}
  >
    {children}
    
  </div>
);

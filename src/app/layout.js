import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";
import Head from "next/head";

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body
        style={{
          background:
            // linear-gradient(to right bottom, rgba(0,0,0, 0.4), rgba(255, 255, 255, 0.2)),
            "url(/images/bg-img2.avif) no-repeat",
          backgroundSize: "100% 100%",
          backgroundAttachment: "fixed",
        }}
      >
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {props.children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

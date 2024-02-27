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
            "linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(/images/bg-img.jpeg) repeat",
          backgroundSize: "cover",
        }}
      >
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {props.children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

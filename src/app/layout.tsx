"use client";

import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3b82f6",
    },
    secondary: {
      main: "#ffffff",
    },
    background: {
      default: "#000000",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        color: "secondary",
      },
      styleOverrides: {
        root: {
          textTransform: "none", // Disable uppercase transformation globally
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none", // Remove underline by default
          "&:hover": {
            textDecoration: "none", // Optional: Remove underline on hover
          },
        },
      },
    },
  },
});

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <Container maxWidth="lg" sx={{ pb: "16rem" }}>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Navbar />
              {props.children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </Container>
        <Footer />
      </body>
    </html>
  );
}

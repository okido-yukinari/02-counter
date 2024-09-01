"use client";

import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Container, Typography, Button, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

function App() {
  const [count, setCount] = useState(0);

  function upCount() {
    setCount(count + 1);
  }
  function downCount() {
    setCount(count - 1);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh", // 画面の高さいっぱいに広げる
          bgcolor: "background.default", // テーマの背景色を使用
        }}
      >
        <Container maxWidth="sm">
          <Box
            sx={{
              my: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" component="h1" gutterBottom>
              カウンター
            </Typography>
            <Typography
              variant="h2"
              component="p"
              gutterBottom
              aria-live="polite"
            >
              {count}
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                onClick={downCount}
                variant="contained"
                color="secondary"
                aria-label="カウントを減らす"
                startIcon={<RemoveIcon />}
              >
                減らす
              </Button>
              <Button
                onClick={upCount}
                variant="contained"
                color="primary"
                aria-label="カウントを増やす"
                startIcon={<AddIcon />}
              >
                増やす
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;

import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  TextField,
  Box
} from "@mui/material";

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Material UI Experiment
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        <Container maxWidth="sm">
          <Card elevation={4}>
            <CardContent>
              <Typography variant="h5" align="center" gutterBottom>
                Welcome to Material UI
              </Typography>

              <Typography
                variant="body2"
                align="center"
                color="text.secondary"
                gutterBottom
              >
                Login to continue
              </Typography>

              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
              />

              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
              />

              <Button
                variant="contained"
                fullWidth
                style={{ marginTop: "20px" }}
              >
                Login
              </Button>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
}

export default App;

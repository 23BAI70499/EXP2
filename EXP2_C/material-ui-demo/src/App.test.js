function App() {
  return (
    <>
      {/* App Bar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Material UI Demo
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="sm" style={{ marginTop: "40px" }}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Login
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
              color="primary"
              fullWidth
              style={{ marginTop: "20px" }}
            >
              Login
            </Button>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

export default App;

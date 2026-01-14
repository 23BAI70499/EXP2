import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function Home() {
  return <h4>This is Home Page</h4>;
}

function Services() {
  return <h4>This is Services Page</h4>;
}

function Contact() {
  return <h4>This is Contact Page</h4>;
}

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">MyApp</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/services">Services</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <hr />

        <h4>Experiment-4: Responsive Navigation Bar Using Component Library</h4>

        <h5 className="mt-3">Aim</h5>
        <p>To design a responsive navigation bar using a UI component library.</p>

        <h5 className="mt-3">Procedure</h5>
        <ol>
          <li>Import Navbar component.</li>
          <li>Add navigation links.</li>
          <li>Ensure responsiveness.</li>
        </ol>
      </Container>
    </Router>
  );
}

export default App;

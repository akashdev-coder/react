import React from 'react';
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Dashboard.css'; // Custom CSS for Dashboard
import Sidebar from './Sidebar'; // Corrected import statement

function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#">Akash Aubeeluck React dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title="Akash Aubeeluck" id="basic-nav-dropdown">
              <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container fluid>
        <Row>
          <Col md={3} className="sidebar">
            <Sidebar /> {/* Use Sidebar component */}
          </Col>
          <Col md={9} className="main-content">
            <h1>Main Content</h1>
            {/* Add your main content here */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;

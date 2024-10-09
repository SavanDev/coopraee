import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Facebook, Instagram, Whatsapp } from "react-bootstrap-icons";
import { LinkContainer } from "react-router-bootstrap";

const NavigationBar: React.FC = () => {
	return (
		<Navbar bg="success" expand="lg">
			<Container>
				<Navbar.Brand href="/" className="text-white">
					<img
						src="img/CoopRAEE_blanco.png"
						width="30"
						height="30"
						className="d-inline-block align-top me-2"
					/>
					CoopRAEE
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<LinkContainer to="/">
							<Nav.Link>Inicio</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/about">
							<Nav.Link>Sobre nosotros</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/contact">
							<Nav.Link>Contacto</Nav.Link>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
				<Navbar.Text>
					<Button
						variant="primary"
						className="icon-link text-light me-2"
						href="https://www.facebook.com/coopraee"
						target="_blank"
					>
						<Facebook />
					</Button>
					<Button
						variant="secondary"
						className="icon-link text-light me-2"
						href="https://www.instagram.com/coopraee/"
						target="_blank"
					>
						<Instagram />
					</Button>
					<Button
						variant="success"
						className="icon-link text-light me-2 border-light"
						href="https://wa.me/542494516304"
						target="_blank"
					>
						<Whatsapp />
					</Button>
				</Navbar.Text>
			</Container>
		</Navbar>
	);
};

export default NavigationBar;

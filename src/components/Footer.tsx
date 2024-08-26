import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
	EnvelopeFill,
	GlobeAmericas,
	TelephoneFill,
} from "react-bootstrap-icons";

const Footer: React.FC = () => {
	return (
		<footer className="bg-success text-light pt-4 mt-5">
			<Container>
				<Row>
					<Col md={4} className="text-center">
						<img
							src="./img/CoopRAEE_sin_leyenda_blanco.png"
							className="w-50 py-4"
						/>
					</Col>
					<Col md={3}>
						<h5>Enlaces Rápidos</h5>
						<ul className="list-unstyled">
							<li className="py-1">
								<a
									href="/"
									className="link-light link-offset-2 link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
								>
									Inicio
								</a>
							</li>
							<li className="py-1">
								<a
									href="/about"
									className="link-light link-offset-2 link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
								>
									Sobre nosotros
								</a>
							</li>
							<li className="py-1">
								<a
									href="/contact"
									className="link-light link-offset-2 link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
								>
									Contacto
								</a>
							</li>
						</ul>
					</Col>
					<Col md={3}>
						<h5>Contacto</h5>
						<p>
							<EnvelopeFill className="me-2" />
							<b>coopraee@gmail.com</b>
						</p>
						<p>
							<TelephoneFill className="me-2" />
							<b>+54 249 4516304</b>
						</p>
						<p>
							<GlobeAmericas className="me-2" />
							<b>Santamarina 460, Tandil</b>
						</p>
					</Col>
				</Row>
			</Container>
			<Container className="bg-dark text-center p-4 mt-4" fluid>
				<h5>&copy; 2024 CoopRAEE. Todos los derechos reservados.</h5>
			</Container>
		</footer>
	);
};

export default Footer;

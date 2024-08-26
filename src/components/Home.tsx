import React from "react";
import { Button, Col, Container, Ratio, Row, Stack } from "react-bootstrap";
import { Facebook, Instagram, Whatsapp } from "react-bootstrap-icons";
import SlotCounter from "react-slot-counter";

const Home: React.FC = () => {
	return (
		<>
			<Container className="cepraee p-5" fluid>
				<Container className="text-center text-white cepraee-text p-4 rounded">
					<img src="/img/counter.png" />
					<h1 className="display-2">
						¡Bienvenidos a <b className="text-success">CoopRAEE</b>!
					</h1>
				</Container>
			</Container>
			<Container className="bg-success text-center p-5 text-light" fluid>
				<h1 className="display-5">
					Desechos electrónicos reciclados durante el año 2024
				</h1>
				<h2>
					<SlotCounter value={80377} /> kg.
				</h2>
			</Container>
			<Container className="p-5 mt-4">
				<Row>
					<Col>
						<h1 className="display-2 mb-4">¿Quiénes somos?</h1>
						<p>
							<b>CoopRAEE</b> es una cooperativa dedicada a la gestión
							responsable de residuos electrónicos.
						</p>
						<p>
							Su misión es promover la sostenibilidad mediante la
							revalorización, reutilización y reciclaje de aparatos eléctricos y
							electrónicos en desuso, evitando su impacto ambiental negativo.
						</p>
						<p>
							Además, <b>CoopRAEE</b> fomenta la inclusión social y digital al
							donar equipos reacondicionados a instituciones y comunidades que
							los necesitan, contribuyendo así a un desarrollo más equitativo y
							sostenible.
						</p>
						<Stack
							direction="horizontal"
							className="gap-3 justify-content-center pt-4"
						>
							<Button
								variant="primary"
								className="icon-link"
								href="https://www.facebook.com/coopraee"
								target="_blank"
								size="lg"
							>
								<Facebook /> Facebook
							</Button>
							<Button
								variant="secondary"
								className="icon-link"
								href="https://www.instagram.com/coopraee/"
								target="_blank"
								size="lg"
							>
								<Instagram /> Instagram
							</Button>
							<Button
								variant="success"
								className="icon-link"
								href="https://wa.me/542494516304"
								target="_blank"
								size="lg"
							>
								<Whatsapp /> WhatsApp
							</Button>
						</Stack>
					</Col>
					<Col className="my-auto text-center">
						<img
							src="/img/CoopRAEE_sin_leyenda_negro.png"
							className="d-inline-block align-top"
						/>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Home;

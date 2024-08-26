import React from "react";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import {
	EnvelopeFill,
	Facebook,
	GlobeAmericas,
	Instagram,
	Whatsapp,
} from "react-bootstrap-icons";

const Contact: React.FC = () => {
	return (
		<Container className="bg-success rounded p-5 mt-4 text-white">
			<Row>
				<Col>
					<h1 className="display-2">Contacto</h1>
					<p>Puedes contactarnos mediante correo electrónico a:</p>
					<p>
						<EnvelopeFill className="me-2" />
						<b>coopraee@gmail.com</b>
					</p>
					<p>Mandarnos por WhatsApp al:</p>
					<p>
						<Whatsapp className="me-2" />
						<b>+54 249 4516304</b>
					</p>
					<p>O ir a nuestra sucursal ubicada en:</p>
					<p>
						<GlobeAmericas className="me-2" />
						<b>Santamarina 460, Tandil</b>
					</p>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.6918055806136!2d-59.13232702339293!3d-37.32612740632783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95911f948919b255%3A0xc0ce4e891a0653de!2sAv.%20Santamarina%20460%2C%20B7000%20Tandil%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1724647332177!5m2!1ses-419!2sar"
						width="600"
						height="250"
						className="border:0 rounded"
						allowFullScreen={false}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
					<h2>Redes sociales</h2>
					<Stack direction="horizontal" className="gap-3">
						<Button
							variant="primary"
							className="icon-link"
							href="https://www.facebook.com/coopraee"
							size="lg"
						>
							<Facebook /> Facebook
						</Button>
						<Button
							variant="secondary"
							className="icon-link"
							href="https://www.instagram.com/coopraee/"
							size="lg"
						>
							<Instagram /> Instagram
						</Button>
					</Stack>
				</Col>
				<Col className="my-auto text-center">
					<img
						src="/img/CoopRAEE_sin_leyenda_blanco.png"
						className="d-inline-block align-top"
					/>
				</Col>
			</Row>
		</Container>
	);
};

export default Contact;

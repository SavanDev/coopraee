import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";

const About: React.FC = () => {
	return (
		<>
			<Container className="bg-success rounded p-5 mt-4 text-white">
				<Row>
					<Col>
						<h1 className="display-2">Sobre CoopRAEE</h1>
						<p>
							<b>CoopRAEE</b> es una cooperativa de trabajo argentina con sede
							en Tandil, Buenos Aires, dedicada a la revalorización y reciclaje
							de aparatos eléctricos y electrónicos (AEE).
						</p>
						<p>
							Fundada con la misión de promover la sostenibilidad ambiental,
							COOPRAEE se especializa en la recepción, recuperación y
							comercialización de residuos electrónicos, transformando lo que
							antes era basura en recursos valiosos para la comunidad y la
							economía local.
						</p>
					</Col>
					<Col className="my-auto text-center">
						<img
							src="img/CoopRAEE_blanco.png"
							className="d-inline-block align-top"
						/>
					</Col>
				</Row>
				<Accordion defaultActiveKey="0" className="mt-4">
					<Accordion.Item eventKey="0">
						<Accordion.Header>Productos y Servicios</Accordion.Header>
						<Accordion.Body>
							<p>
								COOPRAEE recolecta y procesa una amplia variedad de dispositivos
								electrónicos, incluidos teléfonos celulares, computadoras,
								electrodomésticos y otros aparatos.
							</p>
							<p>
								Estos dispositivos, que de otro modo podrían haber terminado en
								vertederos, son reciclados y reacondicionados, lo que permite su
								reinserción en el mercado o su adecuada disposición final,
								minimizando el impacto ambiental.
							</p>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="1">
						<Accordion.Header>Alcance y Compromiso</Accordion.Header>
						<Accordion.Body>
							<p>
								La cooperativa opera principalmente en la región de Tandil, pero
								su impacto se extiende a toda la provincia de Buenos Aires,
								educando a la comunidad sobre la importancia del reciclaje de
								residuos electrónicos.
							</p>
							<p>
								Además de sus actividades de reciclaje, COOPRAEE organiza
								programas de concientización para destacar el daño ambiental
								causado por los desechos electrónicos y promover prácticas de
								consumo responsable.
							</p>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="2">
						<Accordion.Header>Misión</Accordion.Header>
						<Accordion.Body>
							<p>
								La misión de COOPRAEE es fomentar una economía circular en la
								que los residuos electrónicos no se consideren desechos, sino
								recursos potenciales que, a través de procesos adecuados, pueden
								volver a ser útiles.
							</p>
							<p>
								La cooperativa se compromete a reducir la huella ecológica de
								los AEE y a contribuir al desarrollo sostenible de la comunidad
								mediante la creación de empleos verdes y la promoción de una
								mayor conciencia ambiental.
							</p>
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</Container>
		</>
	);
};

export default About;

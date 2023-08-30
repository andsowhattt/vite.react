import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import React from 'react'
import styled from 'styled-components';
import Web from '../3D/Web';

const Desc = styled.div`
	width: 200px;
	height: 70px;
	padding: 20px;
	background-color: white;
	border-radius: 10px;
	position: absolute;
	top: 500px;
	right: 100px;

	@media only screen and (max-width: 768px) {
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
	}
`;

const WebDesign = () => {
	return (
		<>
			<Canvas>
				<Stage environment='city' intensity={0.6}>
					<Web />
				</Stage>
				<OrbitControls enableZoom={false} autoRotate/>
			</Canvas>
			<Desc>I design products with a pixel-perfect focus on both your Figma design and usability.
			</Desc>
		</>
	)
}

export default WebDesign;
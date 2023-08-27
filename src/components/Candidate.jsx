import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import { FaMinus } from 'react-icons/fa';

const Section = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`

const Container = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	width: 1400px;
	display: flex;
	justify-content: space-between;
`

const Motto = styled.div`
	flex: 2;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;
`
const Title = styled.h1`
	font-size: 74px;
`
const Motivation = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`

const Line = styled(FaMinus)`
	height: 15px;
	
`

const Subtitle = styled.h2`
	color: #da4ea2;
`
const Desc = styled.p`
	font-size: 24px;
	color: lightgray;
`
const Button = styled.button`
	background-color: #da4ea2;
	color: white;
	font-weight: 500;
	padding: 10px;
	width: 100px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
`

const Animation = styled.div`
	flex: 3;
	position: relative;
`
const Img = styled.img`
	width: 800px;
	height: 600px;
	object-fit: contain;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	animation: animate 2s infinite ease alternate;

	@keyframes animate {
		to{
			transform: translateY(20px);
		}
	}
`;

const Candidate = () => {
	return (
		<Section>
			<Navbar />
			<Container>
				<Motto>
					<Title>Think. Make. Solve.</Title>
					<Motivation>
						<Line />
						<Subtitle>What we do</Subtitle>
					</Motivation>
					<Desc>We enjoy creating delightful, human-centered digital experiences.</Desc>
					<Button>Learn More</Button>
				</Motto>
				<Animation>
					{/* 3d model */}
					<Img src='./img/astronaut.png' alt='astronaut' />
				</Animation>
			</Container>
		</Section>
	)
}

export default Candidate;
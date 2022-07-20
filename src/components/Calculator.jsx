import styled from "styled-components";
import { Box } from "@mui/system";
import { useState } from "react";

export default function Calculator() {
	const [num, setNum] = useState(0);
	const [oldnum, setOldNum] = useState(0);
	const [operator, setOperator] = useState();

	function inputNum(e) {
		var input = e.target.value;
		if (num === 0) {
			setNum(input);
		} else {
			setNum(num + input);
		}
	}

	function clear() {
		setNum(0);
	}

	function porcentage() {
		setNum(num / 100);
	}

	function changeSign() {
		if (num > 0) {
			setNum(-num);
		} else {
			setNum(Math.abs(num));
		}
	}

	function operatorHandler(e) {
		var operatorInput = e.target.value;
		setOperator(operatorInput);
		setOldNum(num);
		setNum(0);
	}

	function calculate() {
		if (operator === "/") {
			setNum(parseFloat(oldnum) / parseFloat(num));
		}
		if (operator === "*") {
			setNum(parseFloat(oldnum) * parseFloat(num));
		}
		if (operator === "-") {
			setNum(parseFloat(oldnum) - parseFloat(num));
		}
		if (operator === "+") {
			setNum(parseFloat(oldnum) + parseFloat(num));
		}
	}

	return (
		<>
			<Container>
			<Contents>
				<h1>Clone Calculadora Apple !</h1>

				<Calculatorbtn>
					<Box m={12}/>
					<h1>{num}</h1>
					<button onClick={clear}>AC</button>
					<button onClick={changeSign}>+/-</button>
					<button onClick={porcentage}>%</button>
					<button className="orange" onClick={operatorHandler} value="/">
						/
					</button>
					<button className="gray" onClick={inputNum} value="7">
						7
					</button>
					<button className="gray" onClick={inputNum} value="8">
						8
					</button>
					<button className="gray" onClick={inputNum} value="9">
						9
					</button>
					<button className="orange" onClick={operatorHandler} value="*">
						*
					</button>
					<button className="gray" onClick={inputNum} value="4">
						4
					</button>
					<button className="gray" onClick={inputNum} value="5">
						5
					</button>
					<button className="gray" onClick={inputNum} value="6">
						6
					</button>
					<button className="orange" onClick={operatorHandler} value="-">
						-
					</button>
					<button className="gray" onClick={inputNum} value="1">
						1
					</button>
					<button className="gray" onClick={inputNum} value="2">
						2
					</button>
					<button className="gray" onClick={inputNum} value="3">
						3
					</button>
					<button className="orange" onClick={operatorHandler} value="+">
						+
					</button>
					<button className="gray" onClick={inputNum} value="0">
						0
					</button>
					<button className="gray" onClick={inputNum} value=".">
						.
					</button>
					<button className="hiddenBtn">,</button>
					<button className="orange" onClick={calculate}>
						=
					</button>
				</Calculatorbtn>
			</Contents>
			</Container>
		</>
	);
}

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: 20px;
	@media screen and (max-width: 400px){
		padding: 0px 5px 
	}
`
const Contents = styled.div`
	width: 400px;	
	text-align: center;
	h1{
		margin-bottom: 5%;
	}
`;

const Calculatorbtn = styled.div`
	background-color: black;
	border-radius: 1em;
	padding: 1em;
	h1 {
		color: white;
		text-align: end;
		margin-right: 1em;
		font-size: 3.5em;
		@media screen and (max-width: 400px){
			font-size: 2.5em;
		}
	}
	.orange {
		background-color: #ff9500;
		color: white;
	}
	.gray {
		background-color: #505050;
		color: white;
	}
	.hiddenBtn {
		visibility: hidden;
	}

	button {
		width: 3em;
		height: 3em;
		font-size: 1.5em;
		border: none;
		border-radius: 50%;
		margin: 0.3em;
		@media screen and (max-width: 390px){
				width: 2.4em;
				height: 2.4em;
				@media screen and (max-width: 330px) {
					width: 2em;
					height: 2em;
				}
		}

		:hover {
			cursor: pointer;
		}
	}
`;

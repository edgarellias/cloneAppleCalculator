import styled from "styled-components";
import { Box, Container } from "@mui/system";
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
			<Box m={5} />
			<Container maxWidth="xs">
				<h1>Clone Calculadora Apple !</h1>

				<Calculatorbtn>
					<Box m={12} />
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
			</Container>
		</>
	);
}

const Calculatorbtn = styled.div`
	background-color: black;
	border-radius: 1em;
	padding: 1em;
	h1 {
		color: white;
		text-align: end;
		margin-right: 1em;
		font-size: 3.5em;
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

		:hover {
			cursor: pointer;
		}
	}
`;

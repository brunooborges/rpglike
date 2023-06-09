import styled from 'styled-components';

import char from '../../assets/char.png';

export const Container = styled.div<{ size: number; left: number; top: number; sidePos: number }>`
	width: ${(props) => props.size}px;
	height: ${(props) => props.size}px;
	position: absolute;
	left: ${(props) => props.left}px;
	top: ${(props) => props.top}px;
	background-image: url(${char});
	background-position: 0px ${(props) => props.sidePos}px;
`;
export const Name = styled.div`
	font-size: 14px;
	position: relative;
	top: -20px;
	left: -10px;
	text-align: center;
`;

import { useState } from 'react';
import { mapSpots } from '../data/mapSpots';
import { CharacterSides } from '../types/CharacterSides';

export const useCharacter = (propName: string) => {
	const [name, setName] = useState('');
	const [pos, setPost] = useState({ x: 3, y: 5 });
	const [side, setSide] = useState<CharacterSides>('down');

	const moveLeft = () => {
		setPost((pos) => ({
			x: canMove(pos.x - 1, pos.y) ? pos.x - 1 : pos.x,
			y: pos.y,
		}));
		setSide('left');
	};
	const moveRight = () => {
		setPost((pos) => ({
			x: canMove(pos.x + 1, pos.y) ? pos.x + 1 : pos.x,
			y: pos.y,
		}));
		setSide('right');
	};
	const moveDown = () => {
		setPost((pos) => ({
			x: pos.x,
			y: canMove(pos.x, pos.y + 1) ? pos.y + 1 : pos.y,
		}));
		setSide('down');
	};

	const moveUp = () => {
		setPost((pos) => ({
			x: pos.x,
			y: canMove(pos.x, pos.y - 1) ? pos.y - 1 : pos.y,
		}));
		setSide('up');
	};

	const canMove = (x: number, y: number) => {
		if (mapSpots[y] !== undefined && mapSpots[y][x] !== undefined) {
			return mapSpots[y][x] === 1;
		}
		return false;
	};

	const charName = (propName: string) => {
		setName(propName);
	};

	return {
		charName,
		x: pos.x,
		y: pos.y,
		side,
		moveLeft,
		moveRight,
		moveDown,
		moveUp,
	};
};

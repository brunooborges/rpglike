import { useEffect, useState } from 'react';
import * as C from './App.styles';

import { Character } from './components/Character';
import { useCharacter } from './hooks/useCharacter';

export const App = () => {
	const [charName, setCharName] = useState('');
	const [char2Name, setChar2Name] = useState('');

	const char = useCharacter(charName);
	const char2 = useCharacter(char2Name);

	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown);
	}, []);

	const handleKeyDown = (e: KeyboardEvent) => {
		switch (e.code) {
			case 'KeyA':
			case 'ArrowLeft':
				char.moveLeft();
				break;
			case 'KeyW':
			case 'ArrowUp':
				char.moveUp();
				break;
			case 'KeyD':
			case 'ArrowRight':
				char.moveRight();
				break;
			case 'KeyS':
			case 'ArrowDown':
				char.moveDown();
				break;
		}
	};

	const handleCharName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCharName(e.target.value);
	};

	const handleChar2Name = (e: React.ChangeEvent<HTMLInputElement>) => {
		setChar2Name(e.target.value);
	};

	return (
		<C.Container>
			<C.Map>
				<Character
					x={char.x}
					y={char.y}
					side={char.side}
					name={charName}
				/>
				<Character
					x={char2.x}
					y={char2.y}
					side={char2.side}
					name={char2Name}
				/>
			</C.Map>
			<button onClick={() => char2.moveLeft()}>Esquerda</button>
			<button onClick={() => char2.moveRight()}>Direita</button>
			<button onClick={() => char2.moveUp()}>Cima</button>
			<button onClick={() => char2.moveDown()}>Baixo</button>
			<input
				type="text"
				onChange={handleCharName}
				placeholder="Digite o nome do Player 1"
			/>
			<input
				type="text"
				onChange={handleChar2Name}
				placeholder="Digite o nome do Player 2"
			/>
		</C.Container>
	);
};

export default App;

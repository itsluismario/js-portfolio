import React, { useEffect, useState } from "react";
import Template from "../templates/Template";
import getRandomCharacter from "@utils/getData";
import '@styles/main.css';
import '@styles/vars.styl';


const App = () => {
	const [character, setCharacter] = useState(null);

	const findCharacter = async () => {
		const character = await getRandomCharacter();
		setCharacter(character);
	};

	useEffect(() => {
		findCharacter();
	}, []);
    
	return character ? <Template character={character} key={character.email}/> : null;
};

export default App;

import { useState, useEffect } from 'react';

import useTextToSpeach from "../../hooks/useTextToSpeach";

const FullText = ({ onLearn }) => {
	const [text, setText] = useState('My grandfather planted a turnip in the garden. The turnip grew big, very big.');
	const T2S = useTextToSpeach({ text });

	const handleListenClick = (e) => {
		e.preventDefault();

		T2S.speak();
	};

	useEffect(() => {
		return T2S.cancel;
	}, []);

	const parseSentences = (text) => {
		return text.split('.');
	};

	const handleTextChange = (e) => {
		setText(e.target.value);
	};

	const handleLearnClick = (e) => {
		onLearn(parseSentences(text));
	};

	return (
		<div>
			<label>
				<textarea value={ text } placeholder="Enter text here" onChange={ handleTextChange }></textarea>
			</label>
			<div>
				<button onClick={ handleLearnClick } aria-label="learn button">Learn</button>
				<button onClick={ handleListenClick } aria-label="listen button">Listen full text</button>
			</div>
		</div>
	);
}

export default FullText;

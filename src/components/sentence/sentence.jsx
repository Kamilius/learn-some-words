import { useEffect } from "react";

import Word from "../word/word";
import useTextToSpeach from "../../hooks/useTextToSpeach";

import styles from "./sentence.module.css";

const Sentence = ({ children }) => {
  const T2S = useTextToSpeach({ text: children });

  const clickHandler = (e) => {
    e.preventDefault();

    T2S.speak();
  };

  useEffect(() => {
    return T2S.cancel;
  }, []);

  const words = children.split(' ');

  return (
    <span className={ styles.sentence }>
      <span className={ styles.readSentence } onClick={clickHandler}>🔊</span>
      { words.map((word) => (<Word key={word}>{word}</Word>)) }.
    </span>
  )
}

export default Sentence;

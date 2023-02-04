import { useEffect } from "react";

import useTextToSpeach from "../../hooks/useTextToSpeach";

import styles from "./word.module.css";

const Word = ({ children }) => {
  const T2S = useTextToSpeach({ text: children });

  const clickHandler = (e) => {
    e.preventDefault();

    T2S.speak();
  };

  useEffect(() => {
    return T2S.cancel;
  }, []);

  return (
    <span className={styles.word} onClick={clickHandler}>{children}</span>
  )
}

export default Word;

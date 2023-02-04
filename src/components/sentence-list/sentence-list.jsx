import { useState } from 'react';

import Sentence from '../sentence/sentence';

import styles from './sentence-list.module.css';


const SentenceList = ({ sentences = [] }) => {
  return (
    <div className={styles['sentence-list']}>
      {sentences.map((sentence, index) => (
        <Sentence key={sentence}>{sentence}</Sentence>
      )) }
    </div>
  )
}

export default SentenceList;

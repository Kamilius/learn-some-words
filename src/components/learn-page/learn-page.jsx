import { useState } from 'react';

import FullText from "../full-text/full-text";
import SentenceList from "../sentence-list/sentence-list";

const LearnPage = () => {
  const [sentences, setSentences] = useState([]);

  return (
    <div className="learn-page">
      <FullText onLearn={ setSentences } />
      <SentenceList sentences={sentences}></SentenceList>
    </div>
  )
};

export default LearnPage;

import { useRef } from 'react';

const useTextToSpeach = ({ text }) => {
  const T2S = window.speechSynthesis || speechSynthesis;
  const utterance = useRef(null);

  if ("speechSynthesis" in window || speechSynthesis) {
    utterance.current = new SpeechSynthesisUtterance(text ?? '');
    utterance.current.lang = 'en-US';
    utterance.current.rate = 0.75;
    utterance.current.pitch = 1.0;
    utterance.current.volume = 1.0;
  }

  return {
    speak: () => {
      T2S.speak(utterance.current);
    },
    cancel: () => {
      T2S.cancel();
    }
  }
};

export default useTextToSpeach;

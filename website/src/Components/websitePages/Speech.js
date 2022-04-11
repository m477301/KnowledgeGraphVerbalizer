import React from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import { GiSpeaker } from "react-icons/gi";
/*The Text to Speech part of the code. Implemented using npm install react-speech-kit.
Obtained from https://www.npmjs.com/package/react-speech-kit
*/
const Speech = (props) => {
  const { speak } = useSpeechSynthesis();
  return (
    <GiSpeaker size={50} onClick={() => speak({ text: props.paragraph })} />
  );
};
export default Speech;

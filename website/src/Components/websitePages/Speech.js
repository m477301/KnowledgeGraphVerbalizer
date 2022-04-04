import React from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import { GiSpeaker } from "react-icons/gi";

const Speech = (props) => {
  const { speak } = useSpeechSynthesis();
  return (
    <GiSpeaker size={50} onClick={() => speak({ text: props.paragraph })} />
  );
};
export default Speech;

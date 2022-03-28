import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

const Speech = (props) => {
  const [textvalue, setTextvalue] = useState("");
  const { speak } = useSpeechSynthesis();
  return (
    <div className="text_to_speech">
      <h2>Text to Speech </h2>
      <div className="text_area">
        {/* <textarea
          //   value={textvalue}
          //   onChange={(e) => setTextvalue(e.target.value)}

          rows="10"
        ></textarea> */}
      </div>
      <div className="submit_text">
        <button onClick={() => speak({ text: props.paragraph })}>Speech</button>
      </div>
    </div>
  );
};
export default Speech;

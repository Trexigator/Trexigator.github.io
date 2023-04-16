import * as tf from "@tensorflow/tfjs";
import * as qna from "@tensorflow-models/qna";
import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useRef } from "react";
import { Fragment } from "react";
import { Box } from "@chakra-ui/react";

function App() {
  const passageRef = useRef(null);
  const questionRef = useRef(null);
  const [answer, setAnswer] = useState();
  const [model, setModel] = useState(null);
  const loadModel = async () => {
    const loadedModel = await qna.load();
    setModel(loadedModel);
    console.log('Model loaded')
  }

  useEffect(()=>{loadModel()}, [])

  const answerQuestion = async (e) =>{
    console.log("AQ called");
    if (e.which === 13 && model !== null ){
    console.log('Question submitted.')
    const passage = passageRef.current.value
    const question = questionRef.current.value
    const answers = await model.findAnswers(question,
    passage)
    setAnswer(answers);
    console.log(answers)
    }
    }
    

  return (
    <Box
      bg="url('/path/to/image.jpg') center / cover no-repeat"
      w="100vw"
      h="100vh"
      >
    {model == null ?
  <div>
    <div>Model Loading...</div>
  </div> :
  <Fragment>
    passage
    <textarea ref={passageRef} rows="30" cols="100"></textarea>
    Ask a question
    <input ref={questionRef} onKeyPress={answerQuestion} size="80"></input>
    answers
    {answer ? (answer.map((ans,idx)=><div><b>Answer{idx+1} = </b>{ans.text} {ans.score}</div>)):""}
  </Fragment>

  }
    </Box>
  );
}

export default App;

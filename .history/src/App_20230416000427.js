import * as tf from "@tensorflow/tfjs";
import * as qna from "@tensorflow-models/qna";
import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useRef } from "react";
import { Fragment } from "react";

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
    const answers = await model.findAnswers(question, passage)
    setAnswer(answers);
    console.log(answers)
    }
    }

  return (
    <div className="App">
    {model == null ?
  <div>
    <div>Model Loading...</div>
  </div> :
  <div className="center">
  <Fragment>
    <span style = "margin: 20px" >Enter a paragraph: </span><br></br>
    <textarea ref={passageRef} rows="30" cols="100"></textarea>
    <br></br>
    Ask a question:<br></br>
    <input ref={questionRef} onKeyPress={answerQuestion} size="80"></input>
    <br></br>
    Answer:
    {/*{answer ? (answer.map((ans,idx)=><div><b>Answer{idx+1} = </b>{ans.text} {ans.score}</div>)):""}*/}
    {answer ? (answer.slice(0, 1).map((ans,idx)=><div>{ans.text} </div>)):""}
  </Fragment>
  </div>

  }
    </div>
  );
}

export default App;

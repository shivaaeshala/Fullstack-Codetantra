import React, {useState} from "react";

const quizQuestions = [
    {
        id: 1,
        que: "MERN stack stands for?",
        options: [
            "MongoDb Express React Node.js",
            "MySql Express React Node.js",
        ],
        answer: 0
    },
    {
        id: 2,
        que: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: 0
    },
    {
        id: 3,
        que: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        answer: 3
    }
]

function Quizz() {
    const [queNo, setQueNo] = useState(1)
    const [selectedOption, setSelectedOption] = useState({})
    const [showResults, setShowResults] = useState(false)
    const [score, setScore] = useState(0)
    const [attempted, setAttempted] = useState(0)

    const results = () => {
        setShowResults(true);
        setAttempted(Object.keys(selectedOption).length);
        
        let tempScore = 0;
        quizQuestions.forEach((item) => {
            if (selectedOption[item.id] === item.answer) {
                tempScore += 1;
            }
        });
        setScore(tempScore);
    };


    return (
        <div>
            <h1>Welcome to the Quiz</h1>
            {!showResults && 
                <div> 
                    <h3>Question {queNo}</h3>
                    <div>
                        <h5>{quizQuestions[queNo - 1].que}</h5>
                        {
                            quizQuestions[queNo - 1].options.map((item, index) => {
                                return (
                                <div key={index}>
                                    <label>
                                    <input
                                        type="radio"
                                        name={`option${queNo}`}
                                        checked={selectedOption[queNo] === index}
                                        onChange={() => {
                                        setSelectedOption({
                                            ...selectedOption,
                                            [queNo]: index
                                        });
                                        }}
                                    />{" "}
                                    {item}
                                    </label>
                                </div>
                                );
                            })
                            }

                        <div>
                            {
                            queNo > 1 && <button onClick={() => {setQueNo(queNo-1)}}>Previous</button>
                            }
                            {
                            queNo < quizQuestions.length && <button onClick={() => {setQueNo(queNo+1)}}>Next</button>
                            }
                            <button onClick={results}>Submit</button>
                        </div>
                    </div>
                </div>
            }
            {
                showResults &&
                <div>
                    <h3>Results</h3>
                    <h5>Attempted: {attempted}</h5>
                    <h5>Score: {score}</h5>
                </div>
            }
        </div>
    )
}

export default Quizz
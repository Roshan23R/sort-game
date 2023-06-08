import React, { useState, useEffect } from "react";
import "./style.css"; // Import the corresponding CSS file

const SortingGame = () => {
  const [selectedOrder, setSelectedOrder] = useState("asc");
  const [generatedAnswer, setGeneratedAnswer] = useState([]);
  const [optionsPlaced, setOptionsPlaced] = useState([]);
  const [isCheckButtonDisabled, setIsCheckButtonDisabled] = useState(true);
  const [isCorrect, setIsCorrect] = useState(null);
  const [isAnswerShown, setAnswerShown] = useState(false);

  useEffect(() => {
    resetGame();
  }, []);

  const handleSortOrderChange = (e) => {
    setSelectedOrder(e.target.value);
    // resetGame();
  };

  const checkAnswer = () => {
    const userAnswer = optionsPlaced.map(
      (option) => Number(option.firstChild.textContent.trim()) // Use firstChild to access the span element's textContent
    );

    let sortedAnswer = [...generatedAnswer];

    if (selectedOrder === "desc") {
      sortedAnswer.sort((a, b) => b - a); // Sort the sortedAnswer array in descending order
    } else {
      sortedAnswer.sort((a, b) => a - b); // Sort the sortedAnswer array in ascending order
    }
    console.log(sortedAnswer);

    if (JSON.stringify(userAnswer) === JSON.stringify(sortedAnswer)) {
      setIsCorrect(true);
      setAnswerShown(false);
    } else {
      setIsCorrect(false);
      setAnswerShown(true);
      fillOptionsWithAnswer();
    }
  };

  useEffect(() => {
    const allBucketsFilled = optionsPlaced.length === generatedAnswer.length;
    setIsCheckButtonDisabled(!allBucketsFilled);
  }, [optionsPlaced, generatedAnswer]);


  const showCorrectAnswer = (sortedAnswer) => {
    const optionsContainer = document.querySelector(".options");

    optionsPlaced.forEach((option) => {
      option.classList.remove("placed");
      optionsContainer.appendChild(option);
    });

    const correctAnswer = sortedAnswer.map((value, index) => (
      <div className="option" key={index}>
        <span>{value}</span>
      </div>
    ));

    setOptionsPlaced(correctAnswer);
  };

  const fillOptionsWithAnswer = () => {
    const optionsContainer = document.querySelector(".options");

    optionsContainer.innerHTML = "";

    let sortedAnswer = generatedAnswer.slice();

    if (selectedOrder === "desc") {
      sortedAnswer = sortedAnswer.sort((a, b) => b - a);
    } else {
      sortedAnswer = sortedAnswer.sort((a, b) => a - b);
    }

    sortedAnswer.forEach((value) => {
      const option = document.createElement("div");
      option.classList.add("option");
      option.textContent = value;
      optionsContainer.appendChild(option);
    });
  };


  const resetGame = () => {
    setIsCorrect(null);
    setIsCheckButtonDisabled(true);
    const generatedIntegers = generateRandomIntegers();
    setGeneratedAnswer(generatedIntegers);
    setOptionsPlaced([]);
    if(isAnswerShown){
      let optionsContainer = document.querySelector(".options");
      optionsContainer.innerHTML = "";
      setAnswerShown(false);
    }

    let optionsContainer = document.querySelector(".options");
    const optionsInBuckets = document.querySelectorAll(".bucket .option");
    optionsInBuckets.forEach((option) => {
      option.classList.remove("placed");
      optionsContainer.appendChild(option);
    });
  };

  const generateRandomIntegers = () => {
    const integers = [];
    for (let i = 0; i < 5; i++) {
      const randomInt = Math.floor(Math.random() * 900) + 100;
      integers.push(randomInt);
    }
    return integers;
  };

  const dragStart = (e) => {
    e.currentTarget.classList.add("dragging");
  };

  const dragEnd = (e) => {
    e.currentTarget.classList.remove("dragging");
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add("hovered");
  };

  const dragLeave = (e) => {
    e.currentTarget.classList.remove("hovered");
  };

  const dragDrop = (e) => {
    const option = document.querySelector(".dragging");
    const optionsInBucket = e.currentTarget.querySelectorAll(".option");

    if (optionsInBucket.length === 0) {
      e.currentTarget.appendChild(option);
    } else if (optionsInBucket.length === 1) {
      const existingOption = optionsInBucket[0];
      option.parentNode.appendChild(existingOption);
      e.currentTarget.appendChild(option);
    }

    e.currentTarget.classList.remove("hovered");
    e.currentTarget.appendChild(option);
    option.classList.add("placed");
    setOptionsPlaced([...optionsPlaced, option]);
    setIsCheckButtonDisabled(false);
  };


  return (
    <div className="contain">
      <div className="container">
        <div id="head">
          <p className="heading">Sort the Values</p>
        </div>
        <div className="sort-options">
          <input
            type="radio"
            id="ascending"
            name="sort-order"
            value="asc"
            checked={selectedOrder === "asc"}
            onChange={handleSortOrderChange}
          />
          <label htmlFor="ascending">Ascending</label>
          <input
            type="radio"
            id="descending"
            name="sort-order"
            value="desc"
            checked={selectedOrder === "desc"}
            onChange={handleSortOrderChange}
          />
          <label htmlFor="descending">Descending</label>
        </div>

        <div className="options-container">
          <div className="options">
            {generatedAnswer.map((value, index) => (
              <div
                className="option"
                draggable="true"
                onDragStart={dragStart}
                onDragEnd={dragEnd}
                key={index}
              >
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bucket-container">
          <div
            className="bucket"
            id="bucket1"
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            onDrop={dragDrop}
          ></div>
          <div
            className="bucket"
            id="bucket2"
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            onDrop={dragDrop}
          ></div>
          <div
            className="bucket"
            id="bucket3"
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            onDrop={dragDrop}
          ></div>
          <div
            className="bucket"
            id="bucket4"
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            onDrop={dragDrop}
          ></div>
          <div
            className="bucket"
            id="bucket5"
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            onDrop={dragDrop}
          ></div>
        </div>
        <div className="btn">
          <button
            className="check-btn"
            onClick={checkAnswer}
            disabled={isCheckButtonDisabled}
          >
            Check
          </button>
          <button className="reset-btn" onClick={resetGame}>
            Reset
          </button>
        </div>

        <div className="result-container">
          {isCorrect !== null && (
            <div
              className="result"
              style={{ color: isCorrect ? "green" : "red" }}
            >
              {isCorrect
                ? "Congratulations! Your answer is correct."
                : "Sorry, your answer is incorrect. Correct answer is shown above."}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SortingGame;

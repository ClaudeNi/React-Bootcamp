import React from "react";

const Result = (props) => {
  const formEl = document.querySelector("#survey-form");

  const goBack = () => {
    formEl.classList.remove("disabled");
    enableInputs();
    props.callBackParent();
  };

  const submitForm = () => {
    formEl.classList.remove("disabled");
    formEl.submit();
    enableInputs();
    props.callBackParent();
  };

  const enableInputs = () => {
    const allInputs = document.querySelectorAll(".form-input");
    allInputs.forEach((inputEl) => {
      inputEl.disabled = false;
    });
  };

  return (
    <div className="container">
      <div>
        <span className="result-label">First Name:</span>{" "}
        <span className="result-input">{sessionStorage.firstName}</span>
      </div>
      <div>
        <span className="result-label">Last Name:</span>{" "}
        <span className="result-input">{sessionStorage.lastName}</span>
      </div>
      <div>
        <span className="result-label">Age:</span>{" "}
        <span className="result-input">{sessionStorage.age}</span>
      </div>
      <div className="free-text-div">
        <span className="result-label">Free Text:</span>{" "}
        <span className="result-input">{sessionStorage.freeText}</span>
      </div>
      <div>
        <button className="result-btn" onClick={goBack}>
          Go Back
        </button>
        <button className="result-btn" onClick={submitForm}>
          Send Survey
        </button>
      </div>
    </div>
  );
};

export default Result;

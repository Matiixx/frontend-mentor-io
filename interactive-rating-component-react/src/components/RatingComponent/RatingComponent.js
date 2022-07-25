import React, { useState } from "react";
import Grade from "../Grade/Grade";
import LogoStar from "../LogoStar/LogoStar";
import GreetingsPage from "../GreetingsPage/GreetingsPage";
import "./RatingComponent.css";

export default function RatingCompotent() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState(0);

  const handleGradeClick = (grade) => {
    setSelectedGrade(grade);
  };

  const isSelected = (grade) => {
    return selectedGrade === grade;
  };

  const handleSubmit = () => {
    if (selectedGrade) setIsSubmitted(true);
  };

  return (
    <div className="rating-container">
      {!isSubmitted && (
        <>
          <LogoStar />
          <h1 className="rating-h1">How did we do?</h1>
          <p className="rating-p">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="grades-container">
            <Grade
              gradeNumber={1}
              handleClick={handleGradeClick}
              isSelected={isSelected(1)}
            />
            <Grade
              gradeNumber={2}
              handleClick={handleGradeClick}
              isSelected={isSelected(2)}
            />
            <Grade
              gradeNumber={3}
              handleClick={handleGradeClick}
              isSelected={isSelected(3)}
            />
            <Grade
              gradeNumber={4}
              handleClick={handleGradeClick}
              isSelected={isSelected(4)}
            />
            <Grade
              gradeNumber={5}
              handleClick={handleGradeClick}
              isSelected={isSelected(5)}
            />
          </div>
          <div className="submit-button" onClick={handleSubmit}>
            Submit
          </div>
        </>
      )}

      {isSubmitted && <GreetingsPage selectedGrade={selectedGrade} />}
    </div>
  );
}

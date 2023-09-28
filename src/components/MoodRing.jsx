import { useState } from "react";
import styled from "styled-components";

const OuterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  border: dashed 4px #e051ff;

  .happy {
    background-color: green;
    color: white;
    font-size: 34px;
  }

  .sad {
    background-color: #1b11e2;
    color: white;
    font-size: 34px;
  }
  .mehh {
    background-color: #d8df1a;
    color: white;
    font-size: 34px;
  }
`;

const MyForm = styled.form`
  /* display: flex;
  justify-content: center; */
  /* flex-wrap: wrap; */
  padding: 16px;

  input {
    width: 100%;

    fieldset {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    }

    label {
      margin: 4px 0;
    }

    label,
    input {
      width: 100%;
    }

    button {
      background-color: orange;
      border-radius: 25px;
    }
  }
`;

export const MoodRing = () => {
  const [mood, setMood] = useState("My mood is...");
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMood(value);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <OuterWrapper>
      <MyForm onSubmit={handleSubmit}>
        <fieldset>
          How are you feeling?
          <label>
            <br />
            <br />
            Happy{" "}
            <input
              type="radio"
              name="myMood"
              value="happy"
              onChange={handleChange}
            />
            <br />
          </label>
          <label>
            Sad{" "}
            <input
              type="radio"
              name="myMood"
              value="sad"
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Mehh
            <input
              type="radio"
              name="myMood"
              value="mehh"
              onChange={handleChange}
            />
          </label>
        </fieldset>
        <button type="submit">Choose Mood</button>
      </MyForm>
      <p className={mood}>{mood}</p>
    </OuterWrapper>
  );
};

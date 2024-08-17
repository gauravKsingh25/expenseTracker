import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../context/globalContext";

import { plus } from "../../utils/icons";
import Button from "../button/Button";
export default function Form() {
  const { addIncome } = useGlobalContext();

  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    category: "",
    description: "",
    date: null,
  });

  const { title, amount, category, description, date } = inputState;

  const handleInput = (name) => (e) => {
    const value =
      name === "amount" ? parseFloat(e.target.value) : e.target.value;
    setInputState({ ...inputState, [name]: value });
  };

  const handleDateChange = (date) => {
    setInputState({ ...inputState, date: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", inputState);

    // Validate input fields before submitting
    if (isNaN(amount) || amount <= 0) {
      console.error("Amount must be a positive number");
      return;
    }

    if (!date) {
      console.error("Date is required");
      return;
    }

    addIncome(inputState);
    setInputState({
      title: "",
      amount: "",
      category: "",
      description: "",
      date: null,
    });
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <div className="input-control">
        <input
          type="text"
          value={title}
          name="title"
          placeholder="Income Title"
          onChange={handleInput("title")}
        />
      </div>
      <div className="input-control">
        <input
          type="number"
          value={amount}
          name="amount"
          placeholder="Income Amount"
          onChange={handleInput("amount")}
        />
      </div>

      <div className="selects input-control">
        <select
          required
          value={category}
          name="category"
          id="category"
          onChange={handleInput("category")}
        >
          <option value="" disabled>
            Select Option
          </option>
          <option value="salary">Salary</option>
          <option value="freelancing">Freelancing</option>
          <option value="investments">Investments</option>
          <option value="stocks">Stocks</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="bank">Bank Transfer</option>
          <option value="youtube">YouTube</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="input-control">
        <DatePicker
          id="date"
          placeholderText="Enter a Date"
          selected={date}
          dateFormat="dd/MM/yyyy"
          onChange={handleDateChange}
        />
      </div>

      <div className="input-control">
        <textarea
          name="description"
          value={description}
          placeholder="Add A Description"
          id="description"
          cols="30"
          rows="4"
          onChange={handleInput("description")}
        />
      </div>

      <div className="submit-btn">
        <Button
          name={"Add Income"}
          icon={plus}
          bPad={".8rem 1.6rem"}
          bRad={"30px"}
          bg={"var(--color-accent"}
          color={"#fff"}
        />
      </div>
    </FormStyled>
  );
}

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  input,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 2px solid #fff;
    background: transparent;
    resize: none;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    color: rgba(34, 34, 96, 0.9);
    &::placeholder {
      color: rgba(34, 34, 96, 0.4);
    }
  }
  .input-control {
    input {
      width: 100%;
    }
  }
  .selects {
    display: flex;
    justify-content: flex-end;
    select {
      color: rgba(34, 34, 96, 0.4);
      &:focus,
      &active {
        color: rgba(34, 34, 96, 1);
      }
    }
  }
  .submit-btn {
    button {
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
      &:hover {
        background: var(--color-green) !important;
      }
    }
  }
`;

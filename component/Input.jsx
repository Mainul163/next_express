"use client";
import React, { useState } from "react";

const Input = () => {
  const [bookName, setBookName] = useState("");
  const [bookTopic, setBookTopic] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(bookName, bookTopic);
  };
  return (
    <div>
      <h1>hello Input</h1>
      <br />
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="BookName">Book Name:</label>
        <input
          type="text"
          id="bookName"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
          required
        />
        <br />
        <br /> <br />
        <label htmlFor="BookTopic">Book Topic:</label>
        <input
          type="text"
          id="bookTopic"
          value={bookTopic}
          onChange={(e) => setBookTopic(e.target.value)}
          required
        />
        <br /> <br /> <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Input;

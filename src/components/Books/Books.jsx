import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("data/booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="mt-30">
      <div>
        <h3 className="text-4xl font-bold text-center mb-10">Books</h3>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {books.map((book, idx) => (
          <Card key={idx} book={book}></Card>
        ))}
      </div>
    </div>
  );
};

export default Books;

import React from "react";
import { useEffect, useState } from "react";

function Content() {
  const [techies, setTechies] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const pageSize = 6;

  useEffect(() => {
    fetch("/techies.json")
      .then((res) => res.json())
      .then((data) => setTechies(data));
  }, []);

  const showMore = () => {
    setStartIndex((prev) => {
      const nextIndex = prev + 3; // slide by 3
      // prevent overflow
      return nextIndex + pageSize > techies.length ? prev : nextIndex;
    });
  };

  const visibleItems = techies.slice(startIndex, startIndex + pageSize);
  return (
    <section className="container mx-auto px py-40">
      <div className="container font-display justify-center text-center">
        <h1>Work with GET request</h1>
        <div className="flex flex-col justify-center items-center gap-4 mt-6 mb-10">
          {/* Grid of cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 card">
            {visibleItems.map((person, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow p-5 border border-gray-100 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg text-text-dark">
                  {person.name}
                </h3>
                <p className="text-sm text-gray-600">{person.title}</p>
                <p className="text-sm mt-2">{person.email}</p>
                <p className="text-sm">{person.phone}</p>
              </div>
            ))}
          </div>
          {/* Show More Button */}
          {startIndex + pageSize < techies.length && (
            <div className="text-center mt-8">
              <button onClick={showMore} className="button">
                Show More
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Content;

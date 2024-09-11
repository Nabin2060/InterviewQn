import React from "react";
import { useState } from "react";

const SearchFilter = () => {
  //array
  const items = [
    "Javascript",
    "Java",
    "Paython",
    "PHP",
    "C",
    "Swift",
    "Go",
    "C++",
    "C#",
    "Ruby",
  ];
  const [searchTerm, setSearchTerm] = useState('');

  const filterItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input type="=text"
       placeholder="search"
      value={searchTerm}
      onChange={(e)=>setSearchTerm(e.target.value)}
       />
      <button className="color-red">Search</button>

      <ul>
        {filterItems.map((item,index) =>(
            <li key={index}>{item}</li>
          ))}
      </ul>
    </div>
  );
};

export default SearchFilter;





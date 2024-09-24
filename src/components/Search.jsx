import React, { useContext } from 'react';
import { GrSearch } from 'react-icons/gr';
import MainContex from '../MainContex';

const Search = () => {
  const { search, setSearch } = useContext(MainContex);
  return (
    <div className="search">
      <div className="icon">
        <GrSearch />
      </div>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Brands"
      />
    </div>
  );
};

export default Search;

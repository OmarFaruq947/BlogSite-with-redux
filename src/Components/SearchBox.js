import React from 'react';
import searchLogo from '../assets/search.svg';

const SearchBox = () => {
    return (
        <>
            <input className="outline-none border-none bg-gray-50 h-full w-full mr-2" type="search" name="search" placeholder="Search" />
    <img className="inline h-6 cursor-pointer" src={searchLogo} alt="Search" />
        </>
    );
};

export default SearchBox;
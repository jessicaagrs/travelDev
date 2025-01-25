'use client';
import { useRef, useState } from 'react';
import { CancelIcon } from './CancelIcon';
import { SearchIcon } from './SearchIcon';

export const SearchHeader = () => {
  const [viewIconCancel, setViewIconCancel] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setViewIconCancel(!!event.target.value);
  };

  const handleClickSearch = () => {
    if (viewIconCancel && inputRef.current) {
      inputRef.current.value = '';
      setViewIconCancel(false);
    }
  };

  return (
    <div className="relative">
      <input
        className="placeholder:text-custom200 text-sm w-80 p-2 bg-transparent border-b-2 border-custom200 focus:outline-none selection:bg-transparent"
        placeholder="Pesquisar"
        type="text"
        name="search"
        onChange={handleSearch}
        ref={inputRef}
      />
      <button
        title="search"
        className="absolute right-2 bottom-2"
        onClick={handleClickSearch}
      >
        {viewIconCancel ? <CancelIcon /> : <SearchIcon />}
      </button>
    </div>
  );
};

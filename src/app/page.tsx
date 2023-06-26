'use client';
import {useState} from "react";
import Search from "@/components/Search";

export default function Home() {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (value) => {
        // Here, you can access the search value when Enter is pressed
        console.log(value);
        setSearchValue(value);
    };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-md items-center justify-between font-mono text-sm lg:flex-inline">
        <h1 className={'text-5xl my-10'}>Curious Search</h1>
        <Search onSearch={handleSearch} />
      </div>
    </main>
  )
}

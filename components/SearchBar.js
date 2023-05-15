import { useState } from "react"


const SearchBar = ({ searchValue, setSearchValue }) => {


    const onChangeValueChange = (event) => {
        setSearchValue(event.target.value)
        console.log(event.target.value)
    }
    return (
        <>
            <input
                className='w-full p-2 rounded-lg text-gray-950 border-2 border-gray-950 font-light placeholder:text-gray-200'
                placeholder='¿Qué plantilla necesitas?'
                value={searchValue}
                onChange={onChangeValueChange} />
        </>
    )
}

export default SearchBar

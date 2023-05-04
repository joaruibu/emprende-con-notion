

const SearchBar = ({ searchValue, setSearchValue }) => {
    const onChangeValueChange = (event) => {
        setSearchValue(event.target.value)
    }
    return (
        <>
            <input
                className='w-full p-2 rounded-lg bg-gray-900 text-white font-bold placeholder:text-gray-200'
                placeholder='Busca tu tarea'
                value={searchValue}
                onChange={onChangeValueChange} />
            <h1 className='font-bold text-white'>{searchValue}</h1>
        </>
    )
}

export default SearchBar

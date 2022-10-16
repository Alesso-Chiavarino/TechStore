import { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchProvider = ({children}) => {

    const [search, setSearch] = useState([])
    const [text, setText] = useState('')

    const searchProducts = (prods) => {
        setSearch(prods)
    }

    const writeText = (text) => {
        setText(text)
    }

  return (
    <SearchContext.Provider value={{search , searchProducts, writeText, text }} >
        {children}
    </SearchContext.Provider>
  )
}

export default SearchProvider;
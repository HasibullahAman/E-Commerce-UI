import { Search } from "lucide-react"

const SearchBar = () => {
    return (
        <div className="">
            <Search />
            <input id="search" placeholder="Search..." className="text-sm outline-0" />
        </div>
    )
}

export default SearchBar

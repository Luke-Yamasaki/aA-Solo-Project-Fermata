import "./Search.css";

export function Search() {
    return (
        <div className="searchbar">
            <div className="search-icon"></div>
            <form className="searchbar-form" action="search" metho="post">
                <input className="search-input" type="search" spellCheck="on" autoCorrect="off" incremental="true" onkeyup="searchBar()" placeholder="Search Fermata" name="q" minlength="3" max-length="255">
                </input>
            </form>
        </div>
    )
}

export default Search;

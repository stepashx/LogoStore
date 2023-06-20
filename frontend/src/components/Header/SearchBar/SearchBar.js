import styles from "./SearchBar.module.css"

function SearchBar({onChange, placeholder}) {
    return (
        <div className={styles.searchBar}>
            <input
                className={styles.searchInput}
                type="text"
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
}

export default SearchBar
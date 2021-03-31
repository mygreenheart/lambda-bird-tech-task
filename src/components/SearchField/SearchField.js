import React from 'react'
import "./SearchField.css"

export default function SearchField(props) {
    return (
        <div>
            <form action="" className="search-bar">
                <input type="search" name="search" pattern=".*\S.*" required onChange={props.searchHandle} />
                <button className="search-btn" type="submit" onClick={props.searchSubmit}>
                    <span>Search</span>
                </button>
            </form>
        </div>
    )
}

import React from 'react'

export default function SearchForm(props) {
    
    
    return (
        
        
        
        
        
        <form onSubmit={props.handleSubmit}>
            <input placeholder="Search a Song Name" type="text" name="searchInput" value={props.searchInput} onChange={props.handleInput}/>
            <input type="submit"></input>
        </form>
    )
}



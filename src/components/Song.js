import React from 'react'
import GetLyrics from './GetLyrics'

export default function Song( props ) {
    const { info } = props;
   
    let wikiSearch = `https://en.wikipedia.org/wiki/${info.artists[0].name.replace(' ','_')}`
    return (
        
        <div className="song-container">

    
            <div className='album-art'><img alt="album art" src={info.album.images[1].url}/></div>
            <div className="song-container-details">
                <div className="artist-name"><a href={wikiSearch}>{info.artists[0].name}</a></div>
                <div className="song-info">{info.album.name} · {info.name} </div>
                <div className="release-date">Release Date: {info.album.release_date}</div><br/>
                <GetLyrics hasLyrics={false} artistName={info.artists[0].name} songName={info.name}/>
                <hr></hr>
            </div>
        </div>
    )
}

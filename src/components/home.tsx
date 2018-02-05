import * as React from 'react';

export const Home = (props) => {
    console.log('Home>', props.match);
    return(
        <div id='home'>
            Page Home
        </div>
    )
};
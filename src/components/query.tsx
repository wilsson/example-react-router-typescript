import * as React from 'react';

export const Query = (props) => {
    console.log('Query>', props.match, location.search);
    return(
        <div id='query'>
            query: {JSON.stringify(props.match.params)}
        </div>
    )
};
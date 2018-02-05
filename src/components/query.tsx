import * as React from 'react';

export const Query = (props) => {
    console.log('Query>', props.match)
    return(
        <div id='query'>
            {props.match.params.name}
        </div>
    )
};

export const Topic = (props) => {
    return <h1>{props.match.params.name}</h1>
  }
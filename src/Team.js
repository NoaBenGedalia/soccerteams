import React from 'react';

const Team = ({key, favorite, crest, name, yearFounded}) => {
    return(
        <tbody className="lh-copy">
            <tr className='stripe-dark '>
                <td className="pa3">{favorite}</td>
                <td className="pa3"><img alt='Crest' src={crest} width="100" height="100"/></td>
                <td className="pa3">{name}</td>
                <td className="pa3">{yearFounded}</td>
            </tr>
        </tbody>
    );
}

export default Team;
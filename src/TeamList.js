import React from 'react';
import Team from './Team';

const TeamList = ({teamsDetails}) => {
    return(
        <div className="pa4">
            <div className="overflow-auto">
                <table className="f6 w-100 mw8 center" cellSpacing="0">
                    <thead>
                        <tr className='stripe-dark br3 pa3 ma2'>
                            <th className="tc fw6 tl pa3 bg-white">My Favorite</th>
                            <th className="tc fw6 tl pa3 bg-white">Crest</th>
                            <th className="tc fw6 tl pa3 bg-white">Name</th>
                            <th className="tc fw6 tl pa3 bg-white">Year Founded</th>
                        </tr>
                    </thead>
                    {
                        teamsDetails.map((user, i) => {
                            return (
                            <Team
                                //favorite={<Checkbox checked={checkboxes[i+1]} onChange={this.handleChange} />}
                                favorite={<input type="checkbox" id="heart"/>}
                                key={i} 
                                name={teamsDetails[i].name} 
                                //Year={teamsDetails[i].Year} 
                                yearFounded={teamsDetails[i].founded}
                                crest={teamsDetails[i].logo_path}
                            />
                            //test
                            
                            //end test
                            );
                        })
                    }
                </table>
            </div>
        </div>
    );
}

export default TeamList;

//'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' ----- tr
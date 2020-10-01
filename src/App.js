import React, { Component } from 'react';
import TeamList from './TeamList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';

let range = n => [...Array(n).keys()];

const NUMBER_OF_TEAMS = 30;

class App extends Component {
    constructor(){
        super()
        this.state = {
            teamsDetails : [],
            searchfield: '',
        };
    }

    componentDidMount() {
        const teamsIds = range(NUMBER_OF_TEAMS).slice(1);
        const allTeamsPromises = teamsIds.map(teamId => {
            const url = `https://soccer.sportmonks.com/api/v2.0/teams/${teamId}?api_token=OmBCBRtFJIF1zLE6IzkFjXfvmCRhGFT4qefA9kHuvhmdUKfAnCohMpMwBwnB`;
            return fetch(url).then(response => response.json())
        })
        Promise.all(allTeamsPromises)
        .then(allTeamsJsons => {
            const allTemas = allTeamsJsons.reduce((acc, teamJson) => {
                return [...acc, teamJson.data];
            }, [])
            this.setState({teamsDetails: allTemas});
        })
        this.setState({checkBoxValues: false});
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
            const { teamsDetails} = this.state;
            const filteredTeams = teamsDetails.filter(team =>{
                return team.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(!this.state.teamsDetails.length){
            return <h1>Louding</h1>
             } else {
                return(
                    <div className='tc'>
                        <h1 className='f1'>Who is your favorite Soccer Team?</h1>
                        <SearchBox searchChange={this.onSearchChange}/>
                        <Scroll>
                           <TeamList teamsDetails={filteredTeams}/>
                        </Scroll>
                    </div>
            );
        }

    }  
}

export default App;
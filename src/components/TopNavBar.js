import React from 'react';

export class TopNavBar extends React.Component {
    render() {
        return (
            <header className="App-header">
                <img src={"https://www.logodesignlove.com/images/classic/nba-logo.jpg"} className="App-logo" alt="logo" />
            </header>
        );
    }
}


export const TEAM_PIC_URL_PREFIX = 'https://stats.nba.com/media/img/teams/logos';

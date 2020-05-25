import React from 'react'
import People from './People'

function Roster (props) {
    const rosterMap = props.existingList.map((players) => (
        <People
            key={players.id}
            editPlayerName={props.editPlayerName}
            deletePlayer={props.deletePlayer}
            data={players}/>
    ))

    return (
        <div className='roster'>
            {rosterMap}
        </div>
    )
}

export default Roster
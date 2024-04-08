import React, { useState } from 'react'

const Player = ({ name, symbol, isActive, onChangeName }) => {
    const [playerName, setPlayerName] = useState(name)
    const [isEditing, setIsEditing] = useState(false)

    function handleEditClick() {
        setIsEditing(editing => !editing)  // that grantee that working with thr previous state
        if (isEditing) {
            onChangeName(symbol, playerName)
        }
    }

    function handleOnChange(e) {
        setPlayerName(e.target.value)
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className='player'>
                {isEditing ? <input type='text' required value={playerName} onChange={handleOnChange} /> : <span className='player-name'>{playerName}</span>}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}

export default Player

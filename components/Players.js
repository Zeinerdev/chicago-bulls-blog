const players = [
    { name: 'Michael Jordan', image: '/images/jordan.jpg' },
    { name: 'Scottie Pippen', image: '/images/pippen.jpg' },
    { name: 'Dennis Rodman', image: '/images/rodman.jpg' },
    { name: 'Derrick Rose', image: '/images/rose.jpg' },
  ];
  
  const Players = () => {
    return (
      <div className="players-container">
        {players.map((player, index) => (
          <div className="player-card" key={index}>
            <img src={player.image} alt={player.name} />
            <h3>{player.name}</h3>
          </div>
        ))}
      </div>
    );
  };
  
  export default Players;
  
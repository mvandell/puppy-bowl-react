import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

const cohortName = "2306-GHP-ET-WEB-PT-SF";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;

export default function AllPlayers() {
    const [puppies, setPuppies] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        async function getPlayerList() {
            try {
                const response = await fetch(`${API_URL}`);
                const result = await response.json();
                console.log(result.data.players);
                setPuppies(result.data.players);
            
            } catch (error) {
                console.error("Uh oh, trouble fetching players!", error)
            }}
        getPlayerList();
    },[])

    function handleSearch(event) {
        event.preventDefault();
        setSearchInput(event.target.value);
        if (searchInput.length > 0) {
            puppies.filter((puppy) => {
                return <p>{puppy.name.match(searchInput)}</p>;
            })
        }
    }

    useEffect(() => {
        async function removePlayer(playerId) {
            try {
                const response = await fetch(API_URL, {method: 'DELETE',});
                const result = await response.json();
                console.log(result);
            } catch (err) {
                console.error(err);
            }
        }
    })

    return (
        <>
            {/* Search Bar */}
            <form>
                <label>Search:
                    <input type="text" onChange={handleSearch} value={searchInput}/>
                </label>
            </form>
            <div>
                {
                    !searchInput && puppies.map((player)=>{
                        return (
                            <div key={player.id}>
                                <Link to={`/${player.id}`}>{player.name}</Link>
                                <button onClick={removePlayer(player.id)} >Delete Player</button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
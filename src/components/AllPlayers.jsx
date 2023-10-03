import { useState, useEffect } from "react"

const cohortName = "2306-GHP-ET-WEB-PT-SF";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export default function AllPlayers() {
    const [puppies, setPuppies] = useState([]);

    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch(`${API_URL}/players`);
                const result = await response.json();
                console.log(result.data.players);
                setPuppies(result.data.players);
            
            } catch (error) {
                console.error("Uh oh, trouble fetching players!", error)
            }}
        getData();
    },[])
    return (
        <>
            {/* Search Bar */}
            <form>
                <label>Search:
                    <input type="text" onChange={(event) => puppies.filter((puppyName) => puppyName.contains(event.target.value))} />
                </label>
            </form>
            <div  >
                {
                    puppies.map((player)=>{
                        return (
                            <div key={player.name}>
                                <p>{player.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
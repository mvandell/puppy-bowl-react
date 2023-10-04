import { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom";

const cohortName = "2306-GHP-ET-WEB-PT-SF";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;

export default function SinglePlayer() {
    const params = useParams();
    const [puppy, setPuppy] = useState(null);
    const puppyId = params.id;
    const navigate = useNavigate();

    useEffect(() => {
        async function getSinglePlayer() {
            try {
                const response = await fetch(`${API_URL}/${puppyId}`);
                const result = await response.json();
                console.log(result.data.player);
                setPuppy(result.data.player);
            
            } catch (error) {
                console.error("Uh oh, trouble fetching player!", error)
            }}
        getSinglePlayer();
    },[])
    console.log(puppy);

    useEffect(() => {
        async function removePlayer(id) {
            try {
                const response = await fetch(`${API_URL}/${id}`, {method: 'DELETE',});
                const result = await response.json();
                console.log(result);
                navigate("/");
            } catch (err) {
                console.error(err);
            }
        }
    })

    return (
        <>
            <Link to="/">Back</Link>
           <h1>{puppy.name}</h1> 
           <h2>{puppy.breed}</h2>
           <h3>{`${puppy.name} is on the ${puppy.status}`}</h3>
           <img src={puppy.imageUrl} alt={`${puppy.name}'s picture`} />
           <br/>
           <button onClick={()=>removePlayer(puppyId)} >Delete Player</button>
        </>
    );
};
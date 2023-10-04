import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom";

const cohortName = "2306-GHP-ET-WEB-PT-SF";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export default function SinglePlayer() {
    const params = useParams();
    const [puppy, setPuppy] = useState(null);
    const puppyId = params.id;

    useEffect(() => {
        async function getSinglePlayer() {
            try {
                const response = await fetch(`${API_URL}/players/${puppyId}`);
                const result = await response.json();
                console.log(result.data.player);
                setPuppy(result.data.player);
            
            } catch (error) {
                console.error("Uh oh, trouble fetching player!", error)
            }}
        getSinglePlayer();
    },[])
    console.log(puppy);
    return (
        <>
            <Link to="/">Back</Link>
           <h1>{puppy.name}</h1> 
           <h2>{puppy.breed}</h2>
           <h3>{`${puppy.name} is on the ${puppy.status}`}</h3>
           <img src={puppy.imageUrl} alt={`${puppy.name}'s picture`} />
        </>
    );
};
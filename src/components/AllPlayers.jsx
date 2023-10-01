import { useState, useEffect } from "react"

const cohortName = "2306-GHP-ET-WEB-PT-SF";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export default function AllPlayers() {
    const [puppies, setPuppies] = useState(null);

    useEffect(() => {
        try {
            const getData = async() => {
            const response = await fetch(API_URL + '/players');
            const result = await response.json();
            setPuppies(result.data.players)
        }
        } catch (error) {
            console.error("Uh oh, trouble fetching players!", error)
        }
    },[])
    return (
        <>
            <div>
                {
                    puppies.map((puppy)=>{
                        return (
                            <div>
                                <h3>{puppy.name}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
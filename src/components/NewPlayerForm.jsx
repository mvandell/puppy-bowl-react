const cohortName = "2306-GHP-ET-WEB-PT-SF";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export default function NewPlayerForm() {
    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        fetch(API_URL, {method: form.method, body: formData});
        const formObj = Object.fromEntries(formData.entries());
        console.log(formObj);

    return (
        <>
        <form method="post" onSubmit={handleSubmit}>
            <h2>Add a New Player</h2>
            <label>
                Player Name: <input name="name" />
            </label>
            <br />

            <label>
                Breed: <input name="breed" />
            </label>
            <br />

            <label>
                Image URL: <input name="imageUrl"  />
            </label>
            <br />

            <label>
                Status: 
                <select name="status">
                    <option value="bench" >Bench</option>
                    <option value="field" >Field</option>
                </select>
            </label>
            <br />

            <label>
                Team ID: <input name="teamId"  />
            </label>
            <br />

            <button type="reset">Reset</button>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}}
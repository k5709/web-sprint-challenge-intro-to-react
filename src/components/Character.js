// Write your Character component here
import React from "react"
import StyledCharacters from "./StyledDiv"


const Characters = (props) => {
    const { data } = props;

return(
    <div className="organization-station">
       {data.map((listOfCharacters) => {
        return (
            <React.Fragment>
                <StyledCharacters>
            <h1 className="SWnames">{listOfCharacters.name}</h1>
            <h2>Gender: {listOfCharacters.gender}</h2>
            <h2>Height: {listOfCharacters.height}</h2>
            <h2>Mass: {listOfCharacters.mass}</h2> 
            <h2>BirthYear: {listOfCharacters.birth_year}</h2>
            <h2>HairColor: {listOfCharacters.hair_color}</h2>
            <h2>EyeColor: {listOfCharacters.eye_color}</h2>
               </StyledCharacters>
            </React.Fragment >
        )
       })}
    </div>
    )
}
export default Characters
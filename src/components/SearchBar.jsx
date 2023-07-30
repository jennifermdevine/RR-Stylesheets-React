export default function SearchBar () {
    const searchBarStyle = {
        width: "30%",
        height: "30px",
        border: "2px solid lightgreen",
        borderRadius: "40px",
        padding: "0px 20px"
    }

    return (
        <div>
            <input style={searchBarStyle} type="text" placeholder="Search for users"></input>
        </div>
    )
}
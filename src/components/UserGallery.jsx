import UserCard from './UserCard'

export default function UserGallery () {
    const galleryStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        padding: "20px 0px 0px 0px"
    }

    return (
        <div style={galleryStyle}>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
        </div>
    )
}
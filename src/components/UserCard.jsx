import './UserCard.css'

export default function UserCard () {
    return (
        <div className="card">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small/profile-icon-design-free-vector.jpg" alt="profile" style={{width: "100px", borderRadius: "50%"}} />
        <p className="user-bio">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
        </p>
        </div>
    )
}
const UserCard = ({User, Email}) => {
    return(
        <>
        <div>
            <h2>{User}</h2>
            <p>{Email}</p>
        </div>
        </>
    )
}

export default UserCard;

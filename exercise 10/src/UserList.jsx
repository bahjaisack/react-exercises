const UserList= ({users}) => {
    return(
        <div>
        <h2>User List</h2>
        {users.length > 0 ? (
                <ul>
                    {users.map((user)=>(
                        <li key={user.id}>{user.name} ({user.email})</li>
                    ))}
                </ul>
            ) : (<p>users not found</p>
       ) }
        </div>
    )
}
export default UserList
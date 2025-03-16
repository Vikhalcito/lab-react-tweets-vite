function User (name, handle) {
console.log(name,handle)
    return (
        <span className="user">
            <span className="name">{name.name}</span>
            <span className="handle">{handle.handle}</span>
          </span>
    )

}

export default User ;
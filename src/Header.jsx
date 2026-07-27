function Header({title,name,focus}) {
    return (
        <>
        <h1>{title}</h1>
            <h2>Welcome back, {name} </h2>
            <h2>Today's Focus: {focus}</h2>
                </>
    )
}

export default Header
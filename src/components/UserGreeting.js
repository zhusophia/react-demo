export const UserGreeting = () => {
    const isLoggedIn = true
    return (
        <div> Welcome {isLoggedIn ? 'Soph' : 'Guest' }</div>
    )

    // if you want to render somethign or NOTHING
    // {isLoggedIn  && 'Soph'}
}
import React from 'react';

function HomePage() {
    return (
        <div>
            <h2>Employee Login</h2>
            <form type="submit">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button type="submit">Sign In</button>
            </form>

            <h2>Customer Login</h2>
            <form type="submit">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button type="submit">Sign In</button>
            </form>

            <h2>Register Here</h2>
            <form type="submit">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button type="submit">Register</button>
            </form>

        </div>
    )
}

export default HomePage

import React from 'react';

const LoginForm = props => {
    return (
        <div>
            <form>
                <input type="text" name="name" placeholder="Username" />
                <input type="password" name="password" placeholder="password" />
                <button>Sign In</button>
            </form>
        </div>
    )
}

export default LoginForm
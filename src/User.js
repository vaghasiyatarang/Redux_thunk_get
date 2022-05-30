import React from 'react'

const User = ({users}) => {

    return (
        <div>
            <h1>User Component</h1>

            <table border="1">
                <thead>
                    <tr>
                        <th>User name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                {
                    users.map((user, i) => {

                        return (
                            <tbody key={i}>
                                <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>

        </div>
    )
}

export default User
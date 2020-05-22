import React from 'react';
import User from '../../components/User';

const userPage = () => (
    <div>
        <h1>The Auth Page</h1>
        <User name="satrio" age={13} />
    </div>
);

export default userPage;

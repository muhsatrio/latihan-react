import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import User from '../components/User';

const indexPage = () => (
    <div>
        <h1>The Main Page</h1>
        <p>Go to <Link href="/auth">Auth</Link></p>
        <button onClick={() => Router.push('/auth')}>Auth</button>
    </div>
);

export default indexPage;

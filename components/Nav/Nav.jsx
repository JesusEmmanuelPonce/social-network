import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="nav bg-dark justify-content-between">
        <div>
            <Link href="/">
                <a className="nav-link text-light">Home</a>
            </Link>
        </div>
        <div className="d-flex">
            <Link href="/login">
                <a className="nav-link text-light">Login</a>
            </Link>
            <Link href="/register">
                <a className="nav-link text-light">Register</a>
            </Link>
        </div>
    </nav>
    );
};

export default Nav

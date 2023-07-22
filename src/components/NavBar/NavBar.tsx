import React from 'react';

interface IProps {
    navList: React.ReactNode;
    margin?: string | undefined;
}

const NavBar: React.FC<IProps> = ({ navList, margin }): JSX.Element => {
    return (
        <nav style={{ marginBottom: margin }}>
            {navList}
        </nav>
    );
}

export default NavBar;

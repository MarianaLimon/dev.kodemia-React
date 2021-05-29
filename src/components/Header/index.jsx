import React from 'react';

import HeaderLogo from './HeaderLogo';
import HeaderSearch from './HeaderSearch';
import HeaderLogin from './HeaderLogin';
import HeaderCreateAcount from './HeaderCreateAcount';

import './index.css';
// import Styles from './header.module.css'


class Header extends React.Component {
    render() {
        return (
            <nav className="header d-flex justify-content-between">
                {/* </nav><nav className=´{d-flex ${Styles.Header}}´> */}
                <div className="container">
                    <div className="row">
                        <div className="col-6 d-flex">
                            <HeaderLogo />
                            <HeaderSearch />
                        </div>
                        <div className="col-6 d-flex justify-content-end">
                            <HeaderLogin />
                            <HeaderCreateAcount />
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header
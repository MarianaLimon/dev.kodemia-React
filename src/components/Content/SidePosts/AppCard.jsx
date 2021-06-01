import React from 'react';

class AppCard extends React.Component {
    constructor(props) {
        super(props);

        this.props = props
    }

    render() {
        return (
            <div className="card overflow-hidden mb-3">
                {this.props.children}
            </div>   
        )
    }
}

export default AppCard;
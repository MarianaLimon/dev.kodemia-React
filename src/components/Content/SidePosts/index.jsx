import React from 'react';

import AppCard from './AppCard';

// import Styles from './header.module.css'

class Posts extends React.Component {
    render() {
        return (
            <main>
                <AppCard>
                    <img className="w-100 pb-2" src="https://res.cloudinary.com/practicaldev/image/fetch/s--PiVreI22--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kujgr3zhpj47hks2vqyo.png" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-secondary ml-auto">Save</a>
                    </div>
                </AppCard>
                <AppCard>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-secondary ml-auto">Save</a>
                    </div>
                </AppCard>
                <AppCard>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-secondary ml-auto">Save</a>
                    </div>
                </AppCard>
                <AppCard>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-secondary ml-auto">Save</a>
                    </div>
                </AppCard>
            </main>
        )
    }
}

export default Posts
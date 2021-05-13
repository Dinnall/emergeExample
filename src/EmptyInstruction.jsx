import React from 'react';

class EmptyInstruction extends React.Component {
    render() {
        return (
            <div>
                <div className="landing-page">
                    <div className="container">
                        <div className="info">
                            <h1>Fill out your card balance details to calculate payoff results.</h1>
                            <p> You could be closer to being debt-free than you think</p>
                        </div>
                        <div className="image">
                            <img src="https://images.pexels.com/photos/6348114/pexels-photo-6348114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                        </div>
                    </div>
                </div>
            </div>);
    }
}
export default EmptyInstruction;
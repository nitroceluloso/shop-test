import React, { Component } from 'react';

class ClickOut extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false
        }

        this.domRef = React.createRef();
    }

    handleListener = (flagAdd = false) => {
        if (flagAdd) {
            document.addEventListener("click", this.clickHandlerOutside);
        } else {
            document.addEventListener("click", this.clickHandlerOutside);
        }
    }

    clickHandlerOutside = ({ target }) => {
        const { display } = this.state;
        const isClickInside = this.domRef.current && this.domRef.current.contains(target);

        if(display && !isClickInside) this.changeVisibility();
    }

    changeVisibility = () => {
        const { display } = this.state;
        this.setState({ display : !display }, () => {
            this.handleListener(!display)
        });
    }

    componentWillUnmount() {
        this.handleListener();
    }

    render() {
        const { children = [] } = this.props;
        const { display } = this.state;

        return (
            <div ref={this.domRef}>
                {
                    React.cloneElement(children, { display, changeVisibility: this.changeVisibility })
                }
            </div>
        );
    }
}

export default ClickOut;
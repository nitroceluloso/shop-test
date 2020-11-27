import React, { Component } from 'react';
import './CounterFilter.scss';

import InputSearch from "../../../../shared/input-search/InputSearch";
import Button from "../../../../shared/button/Button";
import classnames from "classnames";

class CounterFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOnFocus: false
        }
    }

    componentDidUpdate(prevProps) {
        // const { filter: prevFilter } = prevProps;
        // if(this.props.filter === '' && prevFilter !== '');
    }

    onFocusHandler = () => {
        this.setState({ isOnFocus: true });
    }

    onBlurHandler = () => {
        this.setState({ isOnFocus: false });
    }
    render() {
        const { onChangeHandler, filter, onClearFilter } = this.props;
        const { isOnFocus } = this.state;

        const classStr = classnames('counter-filter', { 'flex flex-align-center flex-space-between': isOnFocus });

        return (
            <header className={classStr}>
                <InputSearch
                    value={filter}
                    onFocusHandler={this.onFocusHandler}
                    onChangehandler={onChangeHandler}
                />
                {
                    isOnFocus &&
                    <Button
                        text="Cancel"
                        onClickHandler={() => {
                            this.onBlurHandler();
                            onClearFilter();
                        }}
                    />
                }
            </header>
        );
    }
}

export default CounterFilter;
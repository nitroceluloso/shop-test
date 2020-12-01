import React, { Component } from 'react';
import './CounterFilter.scss';

import InputSearch from "../../../../shared/input-search/InputSearch";
import Button from "../../../../shared/button/Button";
import classnames from "classnames";

class CounterFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onFocusHandler = () => {
        const { hasErrorLoading = false, onFocusChangeHandler = () => {} } = this.props;
        if(!hasErrorLoading) onFocusChangeHandler(true);
    }

    onBlurHandler = () => {
        const { onFocusChangeHandler = () => {} } = this.props;
        onFocusChangeHandler(false)
    }

    closeFilter = () => {
        const { onClearFilter = ()=> {} } = this.props;
        onClearFilter();
        this.onBlurHandler();
    }

    render() {
        const { onChangeHandler, filter, isOnFocus, hasErrorLoading } = this.props;

        const classStr = classnames(
            'counter-filter',
            { 'flex flex-align-center flex-space-between': isOnFocus }
        );

        return (
            <header className={classStr}>
                <InputSearch
                    value={filter}
                    disabled={hasErrorLoading}
                    onFocusHandler={this.onFocusHandler}
                    onChangehandler={onChangeHandler}
                />
                {
                    isOnFocus &&
                    <Button
                        text="Cancel"
                        onClickHandler={this.closeFilter}
                    />
                }
            </header>
        );
    }
}

export default CounterFilter;
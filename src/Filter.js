import React from 'react';

import * as filterTypes from './filterTypes';

class Filter extends React.PureComponent {

    render() {

        return(

            <div>
                <button disabled={this.props.filterType === filterTypes.ALL} 
                    onClick={() => this.props.onFilterClick(filterTypes.ALL)}>All</button>
                <button disabled={this.props.filterType === filterTypes.ACTIVE}
                    onClick={() => this.props.onFilterClick(filterTypes.ACTIVE)}>Active</button>
                <button disabled={this.props.filterType === filterTypes.COMPLETED}
                    onClick={() => this.props.onFilterClick(filterTypes.COMPLETED)}>Completed</button>
            </div>

        );

    }

}

export default Filter;
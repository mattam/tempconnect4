import React, { Component } from 'react'
import PropTypes from 'prop-types'

import columnData from './data'
import Cell from '../cells'

class Column extends Component {
  render() {
    return (
      <div onClick={() => this.props.handleMove(this.props.id)}>
        {this.props.cells.map(cell => {
          return <Cell key={cell.id} id={cell.id} state={cell.state} />
        })}
      </div>
    )
  }
}

Column.propTypes = {
  cells: PropTypes.arrayOf(PropTypes.object),
}

Column.defaultProps = {
  cells: [],
}

export default Column

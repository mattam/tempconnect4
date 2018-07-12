import React, { Component } from 'react'
import PropTypes from 'prop-types'
import values from 'lodash.values'
import filter from 'lodash.filter'

import Column from '../columns'

class Board extends Component {
  state = {
    move: 'red',
    data: this.props.data,
  }

  toggleMove = prevMove => {
    return prevMove === 'red' ? 'black' : 'red'
  }

  handleMouseOut = colId => {
    // TODO - dry this up
    const clickedCol = this.state.data[colId]
    const emptyCells = filter(clickedCol.cells, cell => cell.state == 'white')

    if (emptyCells.length === 0) {
      return
    }

    const bottomCell = emptyCells[emptyCells.length - 1]

    const updatedCell = {
      ...bottomCell,
      hoverState: null,
    }
    clickedCol.cells[updatedCell.id] = updatedCell

    this.setState((prevState, props) => {
      prevState.data[colId] = clickedCol

      return {
        data: prevState.data,
      }
    })
  }

  handleMouseOver = colId => {
    // TODO - dry this up
    const clickedCol = this.state.data[colId]
    const emptyCells = filter(clickedCol.cells, cell => cell.state == 'white')

    if (emptyCells.length === 0) {
      return
    }

    const bottomCell = emptyCells[emptyCells.length - 1]

    const updatedCell = {
      ...bottomCell,
      hoverState: this.state.move,
    }
    clickedCol.cells[updatedCell.id] = updatedCell

    this.setState((prevState, props) => {
      prevState.data[colId] = clickedCol

      return {
        data: prevState.data,
      }
    })
  }

  handleMove = colId => {
    // TODO - dry this up
    const clickedCol = this.state.data[colId]
    const emptyCells = filter(clickedCol.cells, cell => cell.state == 'white')

    if (emptyCells.length === 0) {
      alert('Column is full')
      return
    }

    const bottomCell = emptyCells[emptyCells.length - 1]

    const updatedCell = {
      ...bottomCell,
      state: this.state.move,
      hoverState: null,
    }
    clickedCol.cells[updatedCell.id] = updatedCell

    this.setState((prevState, props) => {
      prevState.data[colId] = clickedCol

      return {
        data: prevState.data,
        move: this.toggleMove(prevState.move),
      }
    })
  }

  render() {
    console.log('data', this.state.data)
    return (
      <React.Fragment>
        <div className="board">
          {values(this.state.data).map(col => {
            return (
              <Column
                key={col.id}
                id={col.id}
                cells={values(col.cells)}
                handleMove={this.handleMove}
                handleMouseOver={this.handleMouseOver}
                handleMouseOut={this.handleMouseOut}
              />
            )
          })}
        </div>
        <style jsx>{`
          .board {
            display: flex;
          }
        `}</style>
      </React.Fragment>
    )
  }
}

export default Board

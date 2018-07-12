import React from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Cell = ({ state, hover, id, hoverState }) => {
  // const circleClasses = classNames({
  //   'cell-content': true,
  //   'hover-red': hoverState === 'red',
  //   'hover-black': hoverState === 'black',
  //   red: state === 'red',
  //   black: state === 'black',
  // })

  const cellStyle = {
    height: '80%',
    width: '80%',
    background: state,
    borderRadius: '50%',
    border: 'none',
  }

  const hoveredCellStyle = {
    height: '80%',
    width: '80%',
    background: hoverState === 'red' ? '#fdc6c6' : '#adabab',
    borderRadius: '50%',
  }

  let style = state === 'white' && hoverState ? hoveredCellStyle : cellStyle

  return (
    <React.Fragment>
      <div className="cell-container">
        <div style={style} />
      </div>
      <style jsx>{`
        .cell-container {
          height: 80px;
          width: 80px;
          background: #f2c94c;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </React.Fragment>
  )
}

Cell.propTypes = {
  state: PropTypes.string,
  hover: PropTypes.bool,
}

Cell.defaultProps = {
  state: 'white',
  hover: false,
}

export default Cell

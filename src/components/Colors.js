import React from 'react'


class Color extends React.Component {
    render(){
        const {colors} = this.props 
        return(
            <div className='colors'>
                  {
                    colors.map((color, index) => (
                      <button style={{ backgroundColor: color }} key={index}></button>
                    ))
                  }
                </div>
        )
    }
}

export default Color
import React from 'react'


class Detail extends React.Component {
    render(){
        const {src,tab,Ref} = this.props 
        return(
            <div className='thumb' ref={Ref}>
                  {
                    src.map((img, index) => (
                      <img src={img} key={index} alt='' onClick={() => tab(index)} />
                    ))
                  }
                </div>
        )
    }
}

export default Detail
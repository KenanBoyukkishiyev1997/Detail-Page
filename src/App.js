import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Colors from './components/Colors'
import Src from './components/Details'
import './App.scss';

class App extends Component {
  state = {
    products: [
      {
        "_id": '1',
        "title": "Nike Shouse",
        "src": [
          "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
          'https://www.upsieutoc.com/images/2020/06/27/img2.jpg',
          'https://www.upsieutoc.com/images/2020/06/27/img3.jpg',
          'https://www.upsieutoc.com/images/2020/06/27/img4.jpg',
        ],
        'description': 'React tutorial',
        'content': 'Welcome to our my Project ',
        'price': 23,
        "colors": ['red', 'black', 'teal', 'crimson'],
        'count': 1
      }
    ],
    index: 0
  }

  myRef = React.createRef()


  handleTab = index => {
    this.setState({ index: index })
    const images = this.myRef.current.children
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace('active', '')
    }
    images[index].className = 'active'
  }

  componentDidMount() {
    const { index } = this.state;
    this.myRef.current.children[index].className = 'active'
  }
  render() {
    const { products, index } = this.state;
    return (
      <Container fixed>
        {
          products.map(product => (
            <div className='detail' key={product._id}>
              <div className='big-img' >
                <img src={product.src[index]} alt='' />

              </div>

              <div className='box'>
                <div className='row'>
                  <h2>{product.title}</h2>
                  <span>$ {product.price}</span>
                </div>
                <Colors colors={product.colors} />
                <p>{product.description}</p>
                <p>{product.content}</p>



                <Src src={product.src} tab={this.handleTab} ref={this.myRef} />



                <button className='cart'>Add To Cart</button>
              </div>


            </div>

          ))
        }
      </ Container>
    )
  }
}

export default App;

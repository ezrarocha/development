import React, {Component} from 'react';
import {Button, Card, CardContent, Typography} from '@mui/material';

const styles = {
    card: {
      display: 'flex',
      backgroundColor: "#f7f3f0"
  
    },
    cover: {
      width: 500,
      
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      
      
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
}

class BookItem extends Component {

    constructor() {
      super()
    }
  
    // toggleFavorite = () => {
    //   this.props.favoriteItem(this.props.imageNum);
    // }
  
    // generateDietaryRestrictions = (restriction) => {
    //   return <span>{restriction} </span>
    // }
  
    render() {  
      return (
        <Card style={styles.card}>
          <div className={styles.details}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {this.props.name}
            </Typography>
            <div style={{display:"flex"}}>
            <Typography color="textSecondary" style={{marginRight:10}}>
              {this.props.author}
            </Typography>
            <Typography color="textSecondary">
              <i>Released: </i>{this.props.date}
            </Typography>
            </div>
  
            {/* <Typography variant="body2" component="p" >
              {this.props.description}
            </Typography>
            <br/> */}
  
  
            {/* {this.props.Other.length !== 0 ? (
                <Button 
                style={{
                  backgroundColor: "#FBC02D",
              }}
                  variant="contained" 
                  color="secondary" 
                  startIcon={<Favorite/>}
                  onClick={() => this.toggleFavorite()}>
                  Remove from favorites
                </Button>
                ) : (
                <Button
                style={{
                  backgroundColor: "#D50000",
              }}
                  variant="contained"
                  color="primary"
                  startIcon={<FavoriteBorder/>}
                  onClick={() => this.toggleFavorite()}
                  >
                  Add to favorites
                </Button>
              )} */}
  
            </CardContent>
            </div>
            <img src={require(this.props.image)}
            className="Img"/>
          </Card>
      );
    }
  }
  
export default BookItem;

// export default function BookItem({item}) {
//     return (
//         <div class="item-box">
//             <img src={item.image}></img>
//             <h3>{item.name}</h3>
//             <p>{item.author}</p>
//             <p>{item.date}</p>
//             {/* <button onClick={() => updateCart(item.name, item.price)}>Add to Cart</button> */}
//             <p></p>
//         </div>
//     );
// }
import './App.css';
// import bookData from "./book-data.json";
import BookItem from "./BookItem.js"
import {itemInfo, filterInfo} from './data.js';

// bookData.forEach((item) => {
//   item.image = process.env.PUBLIC_URL + "/" + item.image;
// });

class App extends Component {
  constructor() {
    super()
    this.state = {
      itemInfo,
      filterInfo,
      filters: [],
      checked: []
    }
  }

  checkedItem = (imgNum) => {
    let checked = this.state.checked;
    checked[imgNum-1] = !checked[imgNum-1];
    this.setState({checked, itemInfo: this.keepChecked(this.state.itemInfo)});
    this.setState({itemInfo: this.getFilteredItems(this.state.filters)});
  }
}

filterItems = (name, type) => {
  let totalFilters = [];

  if (this.state.filters.some((f) => f.name == name)) {
    totalFilters = this.state.filters.filter((element) => { return element.name !== name });
  } else {
    totalFilters = [...this.state.filters, {name, type}];
  }

  this.setState({
    filters: totalFilters,
    itemInformation: this.getFilteredItems(totalFilters)
  });
}

keepChecked = (items) => {
  let checkedItems = [];

  items.forEach(item => {
    if(this.state.checked[item.imageNum-1]) {
      item.Other = ['Favorites'];
    } else {
      item.Other = [];
    }
    favoritedItems.push(item);
  });

  return favoritedItems;
}

// function App() {
//   return (
//     <div className="App">
//       <h1>Star Wars - Essential Legends Checklist</h1>

//       <div className="item-grid">
//         {bookData.map((item, index) => ( 
//           <BookItem item={item}/>
//         ))}
//       </div>
//     </div>
//   );
// }
// export default App;

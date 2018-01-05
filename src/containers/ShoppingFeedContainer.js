import { connect } from 'react-redux'
import { addToCart } from '../actions/AppActions'
import ShoppingFeed from '../components/ShoppingFeed'

// const getFilteredFeed = ( feedItems, filter ) => {
//   switch (filter) {
//     case 'FILTER_ITEMS_BY_SEARCH':
//      return
//   }
// }

const mapStateToProps =  state => {
  return  {
    feedItems: state.feedItems
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddToCart: id => {
      dispatch(addToCart(id))
    }
  }
}

const ShoppingFeedContainer = connect(mapStateToProps, mapDispatchToProps)(ShoppingFeed)

export default ShoppingFeedContainer

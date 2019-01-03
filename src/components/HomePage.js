import React , {Component} from 'react';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import { CardSection, SearchBar } from './common';
import SellingAdds from './SellingAdds';
import BuyingAdds from './BuyingAdds';


const tabOptions = {
    tabBarOptions: {
        activeTintColor:'#6B6CDA',
        inactiveTintColor:'#D3D3D3',
        style:{
            backgroundColor:'white',
            borderTopWidth:1,
            borderTopColor:'#D3D3D3',
            marginLeft:20,
            marginRight:20
        },
        indicatorStyle: {
            backgroundColor: '#6B6CDA',
            width:120,
            left:'50%',
            marginLeft:-150
        },
    },
}


const ProductNavigator = createMaterialTopTabNavigator({
  'آگهی های خرید': {screen: BuyingAdds},
  'آگهی های فروش':{screen: SellingAdds}
}, tabOptions);

const AppContainer = createAppContainer(ProductNavigator);

class HomePage extends Component{
  render(){
    return(
      <React.Fragment>
        <CardSection />
        <AppContainer style={{backgroundColor:'#F7F7FD'}}/>
      </React.Fragment>
    );
  }
}
export default HomePage;
// const mapStateToProps = state => {
//   // return { advertisments: state.advertisments };
// };

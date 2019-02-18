import { createAppContainer, createStackNavigator } from "react-navigation";

import Home from "./components/Home/HomeScreen";
import Profile from "./components/Profile/ProfileScreen";

const Stack = createStackNavigator(
  {
    Home: { screen: Home },
    Profile: { screen: Profile }
  },
  {
    initialRouteName: "Home",
    headerMode: "none",
    navigationOptions: {}
  }
);

export default RepoApp = createAppContainer(Stack);

// export default () => (
//   <Root>
//     <RepoApp />
//   </Root>
// );

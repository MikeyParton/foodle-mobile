import { TabNavigator, StackNavigator } from "react-navigation"

// const RecentChats = ({ navigation }) => {
//   const { navigate } = navigation
//   return(
//     <View style={styles.container}>
//       <Text>Recent</Text>
//       <Button
//         onPress={() => navigate('Chat', { user: 'Lucy' })}
//         title="Chat with Lucy"
//       />
//     </View>
//   )
// }
//
// const Contacts = () => (
//   <View style={styles.container}>
//     <Text>All contacts</Text>
//   </View>
// )
//
// class ChatScreen extends React.Component {
//   static navigationOptions = ({ navigation }) => {
//
//     const { state, setParams } = navigation
//     const { user, mode } = state.params
//     const isInfo = mode === 'info'
//
//     return {
//       title: (
//         <Text>
//           {
//             isInfo
//               ? `${user}'s Contact Info`
//               : `Chat With ${user}`
//           }
//         </Text>
//       ),
//       headerRight: (
//         <Button
//           title={ isInfo ? 'Done' : 'Info' }
//           onPress={() => setParams({ mode: isInfo ? 'none' : 'info' })}
//         />
//       )
//     }
//
//   }
//
//   render() {
//     const { params } = this.props.navigation.state
//     return (
//       <View>
//         <Text>Chat with {params.user}</Text>
//       </View>
//     );
//   }
// }
//
// const MainScreenNavigator = TabNavigator({
//   Recent: { screen: RecentChats },
//   Contacts: { screen: Contacts }
// })

// const SimpleApp = StackNavigator(
//   {
//     Home: { screen: MainScreenNavigator },
//     Chat: { screen: ChatScreen }
//   },
//   {
//     mode: 'modal'
//   }
// )

import AppNavigator from "../navigation/navigationStack";
import { LOGIN_USER_SUCCESS } from '../actions/types';

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams("Login")
);

const navigationReducer = (state = initialState, action) => {

  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return AppNavigator.router.getStateForAction(
          AppNavigator.router.getActionForPathAndParams("EmployeeList")
        );
    default:
        return state;
    };
};

export default navigationReducer;



// import { NavigationActions } from "react-navigation";
// import AppNavigator from "../navigation/navigationStack";
// import { LOGIN_USER_SUCCESS } from '../actions/types'
//
// const ActionForLoggedOut = AppNavigator.router.getActionForPathAndParams("Login");
// const ActionForLoggedIn = AppNavigator.router.getActionForPathAndParams("EmployeeList");
// const stateForLoggedOut = AppNavigator.router.getStateForAction(ActionForLoggedOut);
// const stateForLoggedIn = AppNavigator.router.getStateForAction(ActionForLoggedIn);
//
// const initialState = { stateForLoggedOut, stateForLoggedIn };
//
// const navigationReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "@@redux/INIT":
//       return {
//         ...state,
//         stateForLoggedIn: AppNavigator.router.getStateForAction(
//           ActionForLoggedIn,
//           stateForLoggedOut
//         )
//       };
//
//     case LOGIN_USER_SUCCESS:
//       return {
//         ...state,
//         stateForLoggedIn: AppNavigator.router.getStateForAction(
//           ActionForLoggedIn,
//           stateForLoggedOut
//         )
//       };
//
//     // case Logout:
//     //   return {
//     //     ...state,
//     //     stateForLoggedOut: AppNavigator.router.getStateForAction(
//     //       NavigationActions.reset({
//     //         index: 0,
//     //         actions: [NavigationActions.navigate({ routeName: "login" })]
//     //       })
//     //     )
//     //   };
//
//     default:
//       return {
//         ...state,
//         stateForLoggedIn: AppNavigator.router.getStateForAction(
//           action,
//           state.stateForLoggedIn
//         )
//       };
//   }
// };
//
// export default navigationReducer;

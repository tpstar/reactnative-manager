import AppNavigator from "../navigation/navigationStack";
import { LOGIN_USER_SUCCESS, NAVIGATE, GO_BACK, EMPLOYEE_CREATED_GO_TO_EMPLOYEE_LIST } from '../actions/types';

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams("Login")
);

const navigationReducer = (state = initialState, action) => {

  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return AppNavigator.router.getStateForAction(
          AppNavigator.router.getActionForPathAndParams("EmployeeList")
        );
    case NAVIGATE:
      console.log('I am in NAVIGATE');
      const nextState = AppNavigator.router.getStateForAction(action, state);
      return nextState || state;
    case GO_BACK:
      console.log('Go Back');
      const nextStateGoBack = AppNavigator.router.getStateForAction(action, state);
      // console.log(nextStateGoBack)
      return nextStateGoBack || state;
    case EMPLOYEE_CREATED_GO_TO_EMPLOYEE_LIST:
      console.log('go to employee list');
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

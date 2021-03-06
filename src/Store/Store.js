import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
export const AddUser = "ADD_USER";
export const EditUser = "Edit_User";
export const DeleteUser = "Delete_User";
export const FetchUser = "Fetch_user";

const initialState = {
  formdata: [], // name, id, age
  id: 0,
};

const surveyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FetchUser:
      return {
        formdata: action.newState,
        id: action.newState.at(-1).id,
      };
    case AddUser:
      console.log("form data ::::::::", action.formdata);
      const filterData = {
        ...action.formdata,
        TotalMarks:
          parseFloat(action.formdata.Maths) +
          parseFloat(action.formdata.Physics) +
          parseFloat(action.formdata.Computers),
        avgMarks:
          (parseFloat(action.formdata.Maths) +
            parseFloat(action.formdata.Physics) +
            parseFloat(action.formdata.Computers)) /
          3,
      };
      console.log("form data333333333 ::::::::", filterData);
      const newFormData = [filterData, ...state.formdata];
      const newId = state.id + 1;
      return {
        formdata: newFormData,
        id: newId,
      };

    case DeleteUser:
      const FilteredFormData = state.formdata.filter(
        (user) => user.id !== action.id
      );
      return {
        formdata: FilteredFormData,
        id: state.id,
      };

    case EditUser:
      const EditedFormData = state.formdata.map((user) => {
        if (user.id === action.newUpadtedUser.id) {
          return action.newUpadtedUser;
        }
        return user;
      });
      return {
        formdata: EditedFormData,
        id: state.id,
      };

    default:
      return state;
  }
};

const store = createStore(
  surveyReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  applyMiddleware(thunk)
);

store.subscribe(() => {
  console.log("store value ", store.getState());
});
export default store;

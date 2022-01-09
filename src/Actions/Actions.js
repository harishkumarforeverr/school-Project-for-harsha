import axios from "axios";
import { message } from "antd";
import { AddUser, EditUser, DeleteUser, FetchUser } from "../Store/Store";
// export const FetchUserDisptacher = (setLoading) => {
//   return async (dispatch) => {
//     setLoading(true);
//     message.success("Data is fetched Sucessfully ");
//         const newState = respo.data.map((obj,i) => ({
//           id: i+1 ,
//           name: obj.title.slice(0, 10),
//           age: i+1,
//           key: i+1,
//           updated:false
//         }));
//         dispatch({
//           type: FetchUser,
//           newState,
//         });
//     setLoading(false);
//   };
// };

export const AddUserDispatch = (
  newFormData,
  // setLoading, 
) => {
  return async (dispatch) => {
    // setLoading(true);
    message.success("Data is stored Sucess full ");
    dispatch({
      type: AddUser,
      newFormData 
    }); 
    // setLoading(false);
  };
};
// export const EditUserDispatcher = (
//   newUpadtedUser,
//   setLoading,
//   setInputFields
// ) => {
//   return async (dispatch) => {
//     setLoading(true);
//     dispatch({
//       type: EditUser,
//       newUpadtedUser,
//     });
//     setInputFields({
//       name: "",
//       age: "",
//       id: "",
//       key: "",
//     });
//     setLoading(false);
//   };
// };
// export const DeleteUserDispatch = (id, setLoading) => {
//   return async (dispatch) => {
//     setLoading(true);
//     message.success("Data is deleted  Sucessfully "); 
//     dispatch({
//       type: DeleteUser,
//       id,
//     });
//     setLoading(false);
//   };
// };

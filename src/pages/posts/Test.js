// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from 'react-redux'
// import {useNavigate} from "react-router-dom";
//
// import {
//     ref,
//     uploadBytes,
//     getDownloadURL,
//     listAll,
//     list,
// } from "firebase/storage";
// import { v4 } from "uuid";
// import { storage } from "../../firebase/storage";
//
//
// function FB() {
//     // const dispatch = useDispatch();
//     // const navigate = useNavigate();
//     const users = useSelector(({users}) => {
//         return users.currentUser;
//     })
//     // let formObj = {
//     //     imageUrl: users.currentUser.image,
//     //     userName: users.currentUser.username
//     // }
//     // console.log(users);
//     const [imageUpload, setImageUpload] = useState(null);
//     const [imageUrls, setImageUrls] = useState(users.currentUser.image);
//     // console.log(imageUrls); //! trạng thái của image hiện tại. Chính là đường dẫn url
//     const imagesListRef = ref(storage, "images/");
//     const uploadFile = () => {
//         if (imageUpload == null) return;
//         const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
//         uploadBytes(imageRef, imageUpload).then((snapshot) => {
//             alert(`Uploading ${snapshot} `);
//             getDownloadURL(snapshot.ref).then((url) => { //! url của ảnh
//                 setImageUrls(url);
//             });
//         });
//     };
//
//     useEffect(() => {
//         listAll(imagesListRef).then((response) => {
//             response.items.forEach((item) => {
//                 getDownloadURL(item).then((url) => {
//                     setImageUrls(url);
//                 });
//             });
//         });
//     }, []);
//
//     const handleSubmit = (event) => {
//         event.preventDefault(); //Ngăn chặn hành động mặc định của form
//         // Xử lý dữ liệu bằng JavaScript
//         // Gửi dữ liệu đến server bằng Fetch API hoặc axios
//         const test = {
//             username: "duy1996",
//             image: imageUrls
//         }
//         // let arrPut = {
//         //     id:users.currentUser.id,
//         //     user: test
//         // }
//         // const handleEditUser = (arr) => {
//         //     console.log(arr.user);
//         //     dispatch(editMainUser(arr));
//         // }
//         // console.log(users.currentUser);
//         // handleEditUser(arrPut)
//
// //   dispatch(editMainUser(users.currentUser.id,1)).then((data) => {
// //     console.log(test);
// //     console.log(data);
//
// //     // navigate('/home');
// // })
//     }
//
//     return (
//         <div className="App">
//             <div className="card mb-4">
//                 {/* Title START */}
//                 <div className="card-header border-0 pb-0">
//                     <h1 className="h5 card-title">Account Settings</h1>
//                     <p className="mb-0">He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to.</p>
//                 </div>
//                 {/* Card header START */}
//                 {/* Card body START */}
//                 <div className="card-body">
//                     {/* Form settings START */}
//                     <form className="row g-3" onSubmit={handleSubmit}>
//                         {/* First name */}
//                         <div className="col-sm-6 col-lg-4">
//                             <label className="form-label">First name</label>
//                             <input type="text" className="form-control" placeholder defaultValue="Sam" />
//                         </div>
//                         {/* Last name */}
//                         <div className="col-sm-6 col-lg-4">
//                             <label className="form-label">Last name</label>
//                             <input type="text" className="form-control" placeholder defaultValue="Lanson" />
//                         </div>
//                         {/* Additional name */}
//                         <div className="col-sm-6 col-lg-4">
//                             <label className="form-label">Additional name</label>
//                             <input type="text" className="form-control" placeholder />
//                         </div>
//                         {/* User name */}
//                         <div className="col-sm-6">
//                             <label className="form-label">User name</label>
//                             <input type="text" className="form-control" placeholder defaultValue={users.currentUser.username} />
//                         </div>
//                         {/* Birthday */}
//                         <div className="col-lg-6">
//                             <label className="form-label">Birthday </label>
//                             <input type="text" className="form-control flatpickr" defaultValue="12/12/1990" />
//                         </div>
//                         {/* Allow checkbox */}
//                         <div className="col-12">
//                             <div className="form-check">
//                                 <input className="form-check-input" type="checkbox" defaultValue id="allowChecked" defaultChecked />
//                                 <label className="form-check-label" htmlFor="allowChecked">
//                                     Allow anyone to add you to their team
//                                 </label>
//                             </div>
//                         </div>
//                         {/* Phone number */}
//                         <div className="col-sm-6">
//                             <label className="form-label">Phone number</label>
//                             <input type="text" className="form-control" placeholder defaultValue="(678) 324-1251" />
//                             {/* Add new number */}
//                             <a className="btn btn-sm btn-dashed rounded mt-2" href="#!"> <i className="bi bi-plus-circle-dotted me-1" />Add new phone number</a>
//                         </div>
//                         {/* Phone number */}
//                         <div className="col-sm-6">
//                             <label className="form-label">Email</label>
//                             <input type="text" className="form-control" placeholder defaultValue="sam@webestica.com" />
//                             {/* Add new email */}
//                             <a className="btn btn-sm btn-dashed rounded mt-2" href="#!"> <i className="bi bi-plus-circle-dotted me-1" />Add new email address</a>
//                         </div>
//                         {/* Page information */}
//                         <div className="col-12">
//                             <label className="form-label">Overview</label>
//                             <textarea className="form-control" rows={4} placeholder="Description (Required)" defaultValue={"Interested has all Devonshire difficulty gay assistance joy. Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitors we private removed. Moderate do subjects to distance."} />
//                             <small>Character limit: 300</small>
//                         </div>
//                         <input
//                             type="file"
//                             onChange={(event) => {
//                                 setImageUpload(event.target.files[0]);
//                             }}
//                         />
//                         <button onClick={uploadFile}> Upload Image</button>
//                         <img style={{width: 100, height: 100}} src={imageUrls} />;
//                         {/* {imageUrls.map((url) => {
//         return <img src={url} />;
//       })} */}
//                         {/* Button  */}
//                         <div className="col-12 text-end">
//                             <button type="submit" className="btn btn-sm btn-primary mb-0">Save changes</button>
//                         </div>
//                     </form>
//                     {/* Settings END */}
//                 </div>
//                 {/* Card body END */}
//             </div>
//
//         </div>
//     );
// }
//
// export default FB;
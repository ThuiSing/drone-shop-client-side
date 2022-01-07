// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import useAuth from "../../../Hooks/useAuth";
// import useCart from "../../../Hooks/useCart";
// import Footer from "../Footer/Footer";
// import Navbar from "../Navbar/Navbar";
// import SingleItemExplore from "../SingleItemExplore/SingleItemExplore";

// const Explore = ({ showAll }) => {
//   const [drones, setDrones] = useState([]);
//   const [cart, setCart] = useCart();
//   const { user } = useAuth();
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);
//   // console.log(showAll);

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get(`https://desolate-brushlands-67419.herokuapp.com/drones`)
//       .then((res) => setDrones(res.data))
//       .catch((err) => {
//         setDrones([]);
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   const handleCart = (drone) => {
//     // console.log("hello", drone);
//     if (!user.email) {
//       alert("Log in first");
//       navigate("/login");
//     } else {
//       const matchedDrone = cart.find((droneID) => droneID._id === drone._id);
//       if (matchedDrone) {
//         matchedDrone.quantity += 1;
//         // console.log(matchedDrone);
//       } else {
//         drone.quantity = 1;
//         setCart([...cart, drone]);
//         const newCart = {
//           addedCart: [...cart, drone],
//           email: user.email,
//         };
//         axios
//           .put(`https://desolate-brushlands-67419.herokuapp.com/cart`, newCart)
//           .then((res) => {
//             alert("added to cart");
//           });
//       }
//     }
//   };
//   // console.log(cart);

//   return (
//     <div className="mt-16">
//       {showAll && <Navbar />}
//       <div
//         className={`container mx-auto px-3 md:px-0 ${
//           showAll ? " mb-16" : " mb-10"
//         }`}
//       >
//         <div className="text-center my-6">
//           <h1 className="text-4xl font-semibold">Our Drones</h1>
//         </div>
//         {loading ? (
//           <div className="flex items-center justify-center">
//             <img
//               src="https://i.pinimg.com/originals/d7/34/49/d73449313ecedb997822efecd1ee3eac.gif"
//               alt="loader"
//             />
//           </div>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-8">
//             {(showAll ? drones : drones.slice(0, 6)).map((drone) => (
//               <SingleItemExplore
//                 key={drone._id}
//                 drone={drone}
//                 handleCart={handleCart}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//       {showAll && <Footer />}
//     </div>
//   );
// };

// export default Explore;

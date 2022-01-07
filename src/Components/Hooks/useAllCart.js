// import axios from "axios";
// import { useEffect, useState } from "react";
// import useAuth from "./useAuth";

// const useAllCart = () => {
//   const [cart, setCart] = useState([]);
//   const { user } = useAuth();
//   useEffect(() => {
//     axios
//       .get(
//         `https://desolate-brushlands-67419.herokuapp.com/cart/${user?.email}`
//       )
//       .then((res) => {
//         // if(res.data?.addedCart.length)
//         if (res.data) {
//           if (res.data?.addedCart.length >= 1) {
//             setCart(res.data?.addedCart);
//           }
//         }
//       });
//   }, [user?.email]);
//   return [cart, setCart];
// };

// export default useAllCart;

// import { FaSearch } from "react-icons/fa";
// import { FaShoppingCart } from "react-icons/fa";
// import { FaLocationDot } from "react-icons/fa6";
// import classes from "./Header.module.css";
// const Header = () => {
//   return (
//     <div>
//       <section>
//         {" "}
//         <section>
//           <div className={classes.header_container}>
//             <div className={classes.logo_container}>
//               <a href="/">
//                 <img
//                   src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
//                   width="100px"
//                   alt=""
//                 />
//               </a>
//               {/* delivery */}
//               <div className={classes.delivery}>
//                 {" "}
//                 <span>
//                   <FaLocationDot />
//                 </span>
//                 <p>Delivered to</p>
//                 <span>Ethiopia</span>
//               </div>
//             </div>
//             <div className={classes.search}>
//               <FaSearch />
//               <select name="" id="">
//                 <option value="">ALL</option>
//               </select>
//               <input type="text" name="" id="" placeholder="search product" />
//               {/* icon */}
//             </div>
//           </div>
//           <div>
//             <div>
//               <img
//                 src="https://static.vecteezy.com/system/resources/previews/000/532/212/original/vector-united-states-of-america-flag-usa-flag-america-flag-background.jpg"
//                 width="600px"
//                 alt=""
//               />
//               <section>
//                 <option value="">EN</option>
//               </section>{" "}
//             </div>
//             {/* 3 components */}
//             <a href="">
//               <div>
//                 <p>Sign In</p>
//                 <span>Account&lists</span>
//               </div>
//             </a>
//             {/* orders */}
//             <a href="">
//               <p>returns</p>
//               <span>&orders</span>
//             </a>
//             <FaShoppingCart />
//             <a href="">
//               {/* icon */}
//               <span>0</span>
//             </a>
//           </div>
//         </section>
//       </section>
//     </div>
//   );
// };

// export default Header;
import { FaLocationDot } from "react-icons/fa6";
import classes from "./Header.module.css";
import { FaSearch } from "react-icons/fa";
import { BiCart } from "react-icons/bi";
import LowerContainer from "./LowerContainer";
const Header = () => {
  return (
    <>
      <section>
        <div className={classes.header_container}>
          <div className={classes.logo_container}>
            <a href="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                width="100px"
                alt=""
              />
            </a>
            <span>
              <FaLocationDot />{" "}
            </span>
          </div>
          <div className={classes.delivery}>
            <p>Delivered to</p>
            <span>Ethiopia</span>
          </div>

          <div className={classes.search}>
            <select name="" id="">
              <option value=""> ALL</option>
            </select>
            <input type="text" />{" "}
            <span>
              <FaSearch />
            </span>
          </div>

          <div className={classes.flag}>
            <a href="" className={classes.language}>
              <img
                src="https://static.vecteezy.com/system/resources/previews/000/532/212/original/vector-united-states-of-america-flag-usa-flag-america-flag-background.jpg"
                width="50px"
                alt=""
              />
              <select>
                <option value="">EN</option>
              </select>{" "}
            </a>

            <a href="" className={classes.signin}>
              {" "}
              <p>Sign In</p>
              <span>Account & Lists</span>
            </a>

            <a href="" className={classes.orders}>
              <p>returns</p>
              <span>&Orders</span>
            </a>
          </div>
          <div className={classes.cart}>
            <BiCart size={35} />
            <a href="">
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerContainer />
    </>
  );
};

export default Header;

// import './App.css';

// function App() {
//   return (
//     <>
//       <div className="container bg-orange">
//         <div>
//           <span>font awesome</span>
//           <i class="fa-solid fa-user"></i>
//         </div>
//         <hr />
//         <h1>主色</h1>
//         <h1 className="text-primary">text-primary : Test123</h1>
//         <h1 className="text-primary-100">text-primary-100 : Test123</h1>
//         <h1 className="text-primary-200">text-primary-200 : Test123</h1>
//         <h1 className="text-primary-300">text-primary-300 : Test123</h1>
//         <hr />
//         <h1>副色</h1>
//         <h2 className="text-info">text-info : Test123</h2>
//         <h3 className="text-info-dark">text-info-dark : Test123</h3>
//         <h4 className="text-danger">text-danger : Test123</h4>
//         <h5 className="text-orange">text-orange : Test123</h5>
//         <h6 className="text-dark">text-dark : Test123</h6>
//         <hr />
//         <h1>按鈕</h1>
//         <h5>btn, btn-rect, btn-primary-300</h5>
//         <button className="btn btn-rect btn-primary-300">123</button>
//         <h5>form-control</h5>
//         <input type="text" className="form-control" placeholder="請輸入文字" />
//         <h5>input-group</h5>
//         <div className="input-group mb-3 p-2">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Recipient's username"
//             aria-label="Recipient's username"
//             aria-describedby="button-addon2"
//           />
//           <button
//             className="btn btn-primary-300 btn-shadow"
//             type="button"
//             id="button-addon2"
//           >
//             Button
//           </button>
//         </div>
//         <hr />
//         <h1>卡片</h1>
//         <div className="card" style={{ width: 18 + 'rem' }}>
//           <img
//             src="https://www.dowana.com.tw/www/upload/ec/product/26844/18048-WA2U_580_580.jpg"
//             className="card-img-top"
//             alt="..."
//           />
//           <div className="card-body">
//             <h5 className="card-title text-info">NT $ 12,000</h5>
//             <h6 className="card-title text-gray">Anderson儲物櫃</h6>
//             <p className="card-text text-danger">預購商品</p>
//             <div className="d-flex justify-content-around">
//               <a href="" className="btn btn-white btn-rect border">
//                 顯示更多
//               </a>
//               <a href="" className="btn btn-primary-300 btn-rect">
//                 加入購物車
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
import Cart from '../src/components/cart/Cart.js';
function App() {
  return (
    <>
      <Cart />
    </>
  );
}
export default App;

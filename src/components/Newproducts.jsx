import axios from "axios";
import React, { useEffect } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, viewCart } from "../Actions/cartAction";
import { API } from "../API";
import { addToWishlist } from "../Actions/wishlishAction";

function Newproducts() {
  let [newArrival, setnewArrival] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    async function getnewArrival() {
      let product = await axios.get(`${API}/api/product/new`);
      setnewArrival(product?.data.latest);
    }
    getnewArrival();
  }, []);

  function addCart(id) {
    dispatch(addToCart(id));
  }
  function Wishlist(id) {
    dispatch(addToWishlist(id));
    window.location.href = "/my-wishlist";
  }

  console.log(newArrival);

  return (
    <div className="container">
      <div className="kalles-section nt_section type_featured_collection tp_se_cdt">
        <div className="kalles-cosmetics__new-products container">
          <div className="wrap_title des_title_7">
            <h3 className="section-title tc pr flex fl_center al_center fs__24 title_7">
              <span className="mr__10 ml__10">New Arrivals</span>
            </h3>
            <span className="dn tt_divider">
              <span></span>
              <i className="dn clprfalse la la-spa"></i>
              <span></span>
            </span>
            <span className="section-subtitle db tc"></span>
          </div>
          <div className="products nt_products_holder row fl_center row_pr_1 cdt_des_5 round_cd_true nt_cover ratio_nt position_8 space_30">
            {newArrival?.map((product, index) => {
              return (
                <div
                  key={index}
                  className="col-lg-3 col-md-3 col-6 pr_animated done mt__30 pr_grid_item product nt_pr desgin__1"
                >
                  <div className="product-inner pr">
                    <div className="product-image pr oh lazyload">
                      {/* <span className="tc nt_labels pa pe_none cw">
                        <span className="onsale nt_label">
                          <span>-34%</span>
                        </span>
                      </span> */}
                      <a className="db" href={`/productDetails/${product._id}`}>
                        <div
                          className="pr_lazy_img main-img nt_img_ratio nt_bg_lz lazyload padding-top__100"
                          data-bgset={product.image}
                        ></div>
                      </a>

                      <div className="nt_add_w ts__03 pa">
                        <a
                          onClick={() => Wishlist(product._id)}
                          className="wishlistadd cb chp ttip_nt tooltip_right"
                        >
                          <span className="tt_txt">Add to Wishlist</span>
                          <FavoriteBorderIcon style={{ color: "gray" }} />
                        </a>
                      </div>
                      <div className="hover_button op__0 tc pa flex column ts__03">
                        <a
                          onClick={() => addCart(product._id)}
                          href="#"
                          className="pr pr_atc cd br__40 bgw tc dib js_addtc cb chp ttip_nt tooltip_top_left"
                        >
                          <span className="tt_txt">Add to cart</span>
                          <i className="iccl iccl-cart"></i>
                          <span>Add to cart</span>
                        </a>
                      </div>
                    </div>
                    <div className="product-info mt__15">
                      <h3 className="product-title pr fs__14 mg__0 fwm">
                        <a
                          className="cd chp"
                          href={`/productDetails/${product._id}`}
                        >
                          {product.title}
                        </a>
                      </h3>
                      <span className="price dib mb__5">
                        <del>
                          <span className="money">{product.price}</span>
                        </del>
                        <ins>
                          <span className="money">{product.sale_price}</span>
                        </ins>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newproducts;

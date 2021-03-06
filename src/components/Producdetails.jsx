import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addToCart,
  decreaseQuant,
  increseQuant,
  viewCart,
} from "../Actions/cartAction";
import { API } from "../API";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";
import Popup from "./Popup";

function Producdetails() {
  const { id } = useParams();
  const [productDetailes, setproductDetailes] = useState({});
  const [modalShow, setModalShow] = useState(false);
  const items = useSelector((state) => state.cart.cartItems);
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    async function getProduct() {
      const product = await axios.get(`${API}/api/product/${id}`);
      console.log(product, "PRODUCT");
      setproductDetailes(product.data.product);
    }
    getProduct();
  }, []);
  console.log(productDetailes, "PRODUCT DETAILS");

  function addCart(id) {
    dispatch(addToCart(id));
  }
  function increaseQuntity(id) {
    dispatch(increseQuant(id));
  }
  function decreaseQuntity(id) {
    dispatch(decreaseQuant(id));
  }

  console.log(productDetailes);
  return (
    <div>
      <Header />
      <Navigation active={productDetailes?.category} />
      <div id="nt_content">
        <div class="sp-single sp-single-5 des_pr_layout_1 mb__60">
          <div class="bgbl pt__20 pb__20 lh__1">
            <div class="container">
              <div class="row al_center">
                <div class="col">
                  <nav class="sp-breadcrumb">
                    <a href="/">Home</a>
                    <i class="facl facl-angle-right"></i>
                    <a href="#">{productDetailes?.category}</a>
                    <i class="facl facl-angle-right"></i>
                    {productDetailes?.subCategory}
                  </nav>
                </div>
              </div>
            </div>
          </div>

          <div class="container container_cat cat_default">
            <div class="row product mt__40">
              <div class="col-md-12 col-12 thumb_right">
                <div class="row mb__50 pr_sticky_content">
                  <div class="col-md-6 col-12 pr product-images img_action_zoom pr_sticky_img kalles_product_thumnb_slide">
                    <div class="row theiaStickySidebar">
                      <div class="col-12 col-lg col_thumb">
                        <div
                          class="p-thumb p-thumb_ppr images sp-pr-gallery equal_nt nt_contain ratio_imgtrue position_8 nt_slider pr_carousel"
                          data-flickity='{"initialIndex": ".media_id_001","fade":true,"draggable":">1","cellSelector": ".p-item:not(.is_varhide)","cellAlign": "center","wrapAround": true,"autoPlay": false,"prevNextButtons":true,"adaptiveHeight": true,"imagesLoaded": false, "lazyLoad": 0,"dragThreshold" : 6,"pageDots": false,"rightToLeft": false }'
                        >
                          <div
                            data-grname="not4"
                            data-grpvl="ntt4"
                            class="img_ptw p_ptw js-sl-item p-item sp-pr-gallery__img w__100 nt_bg_lz lazyload media_id_001 padding-top__127_571"
                            data-mdid="001"
                            data-mdtype="image"
                            data-bgset={productDetailes?.image}
                            data-ratio="0.7838776928422516"
                            data-src={productDetailes?.image}
                            data-width="1128"
                            data-height="1439"
                            data-cap="Short Sleeved Hoodie"
                          ></div>
                        </div>
                        {/* <span class="tc nt_labels pa pe_none cw">
                          <span class="onsale nt_label">
                            <span>-34%</span>
                          </span>
                        </span> */}
                        {/* <div class="p_group_btns pa flex">
                          <button class="br__40 tc flex al_center fl_center bghp show_btn_pr_gallery ttip_nt tooltip_top_left">
                            <i class="las la-expand-arrows-alt"></i>
                            <span class="tt_txt">Click to enlarge</span>
                          </button>
                        </div> */}
                      </div>
                      <div class="col-12 col-lg-auto col_nav nav_medium t4_show">
                        {/* <div
                          class="p-nav ratio_imgtrue row equal_nt nt_cover ratio_imgtrue position_8 nt_slider pr_carousel"
                          data-flickityjs='{"initialIndex": ".media_id_001","cellSelector": ".n-item:not(.is_varhide)","cellAlign": "left","asNavFor": ".p-thumb","wrapAround": true,"draggable": ">1","autoPlay": 0,"prevNextButtons": 0,"percentPosition": 1,"imagesLoaded": 0,"pageDots": 0,"groupCells": true,"rightToLeft": false,"contain":  1,"freeScroll": 0}'
                        ></div> */}
                        {/* <button
                          type="button"
                          aria-label="Previous"
                          class="btn_pnav_prev pe_none"
                        >
                          <i class="las la-angle-up"></i>
                        </button> */}
                        {/* <button
                          type="button"
                          aria-label="Next"
                          class="btn_pnav_next pe_none"
                        >
                          <i class="las la-angle-down"></i>
                        </button> */}
                      </div>
                      <div class="dt_img_zoom pa t__0 r__0 dib"></div>
                    </div>
                  </div>
                  <div class="col-md-6 col-12 product-infors pr_sticky_su">
                    <div class="theiaStickySidebar">
                      <div class="kalles-section-pr_summary kalles-section summary entry-summary mt__30">
                        <h1 class="product_title entry-title fs__16">
                          {productDetailes?.title}
                        </h1>
                        <div class="flex wrap fl_between al_center price-review">
                          <p class="price_range" id="price_ppr">
                            <del>Rs. {productDetailes?.price}</del>
                            <ins>Rs. {productDetailes?.sale_price}</ins>
                          </p>
                        </div>
                        <div class="pr_short_des">
                          <p class="mg__0">{productDetailes?.description}</p>
                        </div>
                        <div class="btn-atc atc-slide btn_des_1 btn_txt_3">
                          <div id="callBackVariant_ppr">
                            <div class="nt_cart_form variations_form variations_form_ppr">
                              <div class="variations_button in_flex column w__100 buy_qv_false">
                                <div class="flex wrap">
                                  <div
                                    class="quantity pr mr__10 order-1 qty__true d-inline-block"
                                    id="sp_qty_ppr"
                                  >
                                    <input
                                      value={1}
                                      type="number"
                                      class="input-text qty text tc qty_pr_js qty_cart_js"
                                      name="quantity"
                                    />
                                    <div class="qty tc fs__14">
                                      <button
                                        onClick={() =>
                                          increaseQuntity(productDetailes._id)
                                        }
                                        type="button"
                                        class="plus db cb pa pd__0 pr__15 tr r__0"
                                      >
                                        <i class="facl facl-plus"></i>
                                      </button>
                                      <button
                                        onClick={() =>
                                          decreaseQuntity(productDetailes._id)
                                        }
                                        type="button"
                                        class="minus db cb pa pd__0 pl__15 tl l__0"
                                      >
                                        <i class="facl facl-minus"></i>
                                      </button>
                                    </div>
                                  </div>
                                  {/* <div class="nt_add_w ts__03 pa order-3">
                                    <a
                                      href="#"
                                      class="wishlistadd cb chp ttip_nt tooltip_top_left"
                                    >
                                      <span class="tt_txt">
                                        Add to Wishlist
                                      </span>
                                      <i class="facl facl-heart-o"></i>
                                    </a>
                                  </div> */}
                                  <button
                                    type="submit"
                                    data-time="6000"
                                    data-ani="shake"
                                    class="single_add_to_cart_button button truncate w__100 mt__20 order-4 d-inline-block animated"
                                  >
                                    <span
                                      class="txt_add "
                                      onClick={() =>
                                        addCart(productDetailes._id)
                                      }
                                    >
                                      Add to cart
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="trust_seal_ppr" class="pr_trust_seal tl_md tc">
                          <img
                            class="img_tr_s1 lazyload w__100 max-width__330px"
                            src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%202244%20285%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E"
                            alt=""
                            data-srcset="assets/images/single-product/trust_img2.png"
                          />
                        </div>
                        <div class="extra-link mt__35 fwsb">
                          <a
                            class="ajax_pp_js cd chp mr__20"
                            href="#"
                            data-id="#popup-delivery-and-return"
                            onClick={() => setModalShow(true)}
                          >
                            Delivery &amp; Return
                          </a>
                          <a
                            class="ajax_pp_js cd chp"
                            href="#"
                            data-id="#popup-ask-a-question"
                            onClick={() => setModalShow(true)}
                          >
                            Ask a Question
                          </a>
                          <Popup
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                        </div>
                        <div class="product_meta">
                          <span class="sku_wrapper">
                            <span class="cb">SKU:</span>{" "}
                            <span class="sku value cg d-inline-block">
                              {productDetailes?.sku}
                            </span>
                          </span>
                          <span class="posted_in">
                            <span class="cb">Categories:</span>{" "}
                            <a href="shop-filter-options.html" class="cg">
                              All
                            </a>
                            ,{" "}
                            <a href="shop-filter-options.html" class="cg">
                              Best seller
                            </a>
                            ,{" "}
                            <a href="shop-filter-options.html" class="cg">
                              Bottom
                            </a>
                            ,{" "}
                            <a href="shop-filter-options.html" class="cg">
                              Dress
                            </a>
                            ,{" "}
                            <a href="shop-filter-options.html" class="cg">
                              New Arrival
                            </a>
                            ,{" "}
                            <a href="shop-filter-options.html" class="cg">
                              Women
                            </a>
                          </span>
                          <span class="tagged_as">
                            <span class="cb">Tags:</span>{" "}
                            <a href="shop-filter-options.html" class="cg">
                              Color Black
                            </a>
                            ,{" "}
                            <a href="shop-filter-options.html" class="cg">
                              Color Grey
                            </a>
                            ,{" "}
                            <a href="shop-filter-options.html" class="cg">
                              Color Pink
                            </a>
                            ,{" "}
                            <a href="shop-filter-options.html" class="cg">
                              Price Rs. 7-Rs. 50
                            </a>
                            ,{" "}
                            <a href="shop-filter-options.html" class="cg">
                              Size L
                            </a>
                            ,{" "}
                            <a href="shop-filter-options.html" class="cg">
                              Size M
                            </a>
                            ,{" "}
                            <a href="shop-filter-options.html" class="cg">
                              Size S
                            </a>
                          </span>
                        </div>
                        <div class="social-share tc">
                          <div class="at-share-btn-elements kalles-social-media d-block text-left fs__0 lh__1">
                            <a
                              href="https://www.facebook.com/"
                              class="at-icon-wrapper at-share-btn at-svc-facebook bg-white kalles-social-media__btn"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                class="at-icon at-icon-facebook"
                              >
                                <g>
                                  <path
                                    d="M22 5.16c-.406-.054-1.806-.16-3.43-.16-3.4 0-5.733 1.825-5.733 5.17v2.882H9v3.913h3.837V27h4.604V16.965h3.823l.587-3.913h-4.41v-2.5c0-1.123.347-1.903 2.198-1.903H22V5.16z"
                                    fill-rule="evenodd"
                                  ></path>
                                </g>
                              </svg>
                            </a>
                            <a
                              href="https://twitter.com/"
                              class="at-icon-wrapper at-share-btn at-svc-twitter bg-white kalles-social-media__btn"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                class="at-icon at-icon-twitter"
                              >
                                <g>
                                  <path
                                    d="M27.996 10.116c-.81.36-1.68.602-2.592.71a4.526 4.526 0 0 0 1.984-2.496 9.037 9.037 0 0 1-2.866 1.095 4.513 4.513 0 0 0-7.69 4.116 12.81 12.81 0 0 1-9.3-4.715 4.49 4.49 0 0 0-.612 2.27 4.51 4.51 0 0 0 2.008 3.755 4.495 4.495 0 0 1-2.044-.564v.057a4.515 4.515 0 0 0 3.62 4.425 4.52 4.52 0 0 1-2.04.077 4.517 4.517 0 0 0 4.217 3.134 9.055 9.055 0 0 1-5.604 1.93A9.18 9.18 0 0 1 6 23.85a12.773 12.773 0 0 0 6.918 2.027c8.3 0 12.84-6.876 12.84-12.84 0-.195-.005-.39-.014-.583a9.172 9.172 0 0 0 2.252-2.336"
                                    fill-rule="evenodd"
                                  ></path>
                                </g>
                              </svg>
                            </a>
                            <a
                              href="https://www.google.com/gmail/about"
                              class="at-icon-wrapper at-share-btn at-svc-email bg-white"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                class="at-icon at-icon-email kalles-social-media__btn"
                              >
                                <g>
                                  <g fill-rule="evenodd"></g>
                                  <path d="M27 22.757c0 1.24-.988 2.243-2.19 2.243H7.19C5.98 25 5 23.994 5 22.757V13.67c0-.556.39-.773.855-.496l8.78 5.238c.782.467 1.95.467 2.73 0l8.78-5.238c.472-.28.855-.063.855.495v9.087z"></path>
                                  <path d="M27 9.243C27 8.006 26.02 7 24.81 7H7.19C5.988 7 5 8.004 5 9.243v.465c0 .554.385 1.232.857 1.514l9.61 5.733c.267.16.8.16 1.067 0l9.61-5.733c.473-.283.856-.96.856-1.514v-.465z"></path>
                                </g>
                              </svg>
                            </a>
                            <a
                              href="https://www.pinterest.com/"
                              class="at-icon-wrapper at-share-btn at-svc-pinterest_share bg-white kalles-social-media__btn"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                class="at-icon at-icon-pinterest_share"
                              >
                                <g>
                                  <path
                                    d="M7 13.252c0 1.81.772 4.45 2.895 5.045.074.014.178.04.252.04.49 0 .772-1.27.772-1.63 0-.428-1.174-1.34-1.174-3.123 0-3.705 3.028-6.33 6.947-6.33 3.37 0 5.863 1.782 5.863 5.058 0 2.446-1.054 7.035-4.468 7.035-1.232 0-2.286-.83-2.286-2.018 0-1.742 1.307-3.43 1.307-5.225 0-1.092-.67-1.977-1.916-1.977-1.692 0-2.732 1.77-2.732 3.165 0 .774.104 1.63.476 2.336-.683 2.736-2.08 6.814-2.08 9.633 0 .87.135 1.728.224 2.6l.134.137.207-.07c2.494-3.178 2.405-3.8 3.533-7.96.61 1.077 2.182 1.658 3.43 1.658 5.254 0 7.614-4.77 7.614-9.067C26 7.987 21.755 5 17.094 5 12.017 5 7 8.15 7 13.252z"
                                    fill-rule="evenodd"
                                  ></path>
                                </g>
                              </svg>
                            </a>
                            <a
                              href="https://www.messenger.com/"
                              class="at-icon-wrapper at-share-btn at-svc-messenger bg-white kalles-social-media__btn"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                class="at-icon at-icon-messenger"
                              >
                                <g>
                                  <path
                                    d="M16 6C9.925 6 5 10.56 5 16.185c0 3.205 1.6 6.065 4.1 7.932V28l3.745-2.056c1 .277 2.058.426 3.155.426 6.075 0 11-4.56 11-10.185C27 10.56 22.075 6 16 6zm1.093 13.716l-2.8-2.988-5.467 2.988 6.013-6.383 2.868 2.988 5.398-2.987-6.013 6.383z"
                                    fill-rule="evenodd"
                                  ></path>
                                </g>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="clearfix"></div>

          {/* <div class="kalles-section tp_se_cdt">
            <div class="related product-extra mt__60 lazyload">
              <div class="container">
                <div class="wrap_title des_title_1">
                  <h3 class="section-title tc pr flex fl_center al_center fs__24 title_1">
                    <span class="mr__10 ml__10">Recently viewed products</span>
                  </h3>
                  <span class="dn tt_divider">
                    <span></span>
                    <i class="dn clprfalse title_1 la-gem"></i>
                    <span></span>
                  </span>
                  <span class="section-subtitle db tc sub-title"></span>
                </div>
                <div
                  class="sortby_3 products nt_products_holder nt_slider row row_pr_1 cdt_des_1 round_cd_false nt_cover ratio_nt position_8 space_30 prev_next_0 btn_owl_1 dot_owl_1 dot_color_1 btn_vi_1 is-draggable"
                  data-flickity='{"imagesLoaded": 0,"adaptiveHeight": 0, "contain": 1, "groupCells": "100%", "dragThreshold" : 5, "cellAlign": "left","wrapAround": true,"prevNextButtons": false,"percentPosition": 1,"pageDots": false, "autoPlay" : 0, "pauseAutoPlayOnHover" : true, "rightToLeft": false }'
                >
                  <div class="col-lg-3 pr_animated col-md-3 col-6 mt__30 pr_grid_item product nt_pr desgin__1 done">
                    <div class="product-inner pr">
                      <div class="product-image pr oh lazyload">
                        <span class="tc nt_labels pa pe_none cw">
                          <span class="onsale nt_label">
                            <span>-34%</span>
                          </span>
                        </span>
                        <a class="d-block" href="product-detail-layout-01.html">
                          <div
                            class="pr_lazy_img main-img nt_img_ratio nt_bg_lz lazyload padding-top__127_571"
                            data-bgset="assets/images/home-cosmetics/recent-01.png"
                          ></div>
                        </a>
                        <div class="hover_img pa pe_none t__0 l__0 r__0 b__0 op__0">
                          <div
                            class="pr_lazy_img back-img pa nt_bg_lz lazyload padding-top__127_571"
                            data-bgset="assets/images/home-cosmetics/recent-01.png"
                          ></div>
                        </div>
                        <div class="nt_add_w ts__03 pa ">
                          <a
                            href="#"
                            class="wishlistadd cb chp ttip_nt tooltip_right"
                          >
                            <span class="tt_txt">Add to Wishlist</span>
                            <i class="facl facl-heart-o"></i>
                          </a>
                        </div>
                        <div class="hover_button op__0 tc pa flex column ts__03">
                          <a
                            href="#"
                            class="pr pr_atc cd br__40 bgw tc dib js__qs cb chp ttip_nt tooltip_top_left"
                          >
                            <span class="tt_txt">Add to cart</span>
                            <i class="iccl iccl-cart"></i>
                            <span>Add to cart</span>
                          </a>
                        </div>
                      </div>
                      <div class="product-info mt__15">
                        <h3 class="product-title pr fs__14 mg__0 fwm">
                          <a
                            class="cd chp"
                            href="product-detail-layout-01.html"
                          >
                            La Boh??me Rose Gold
                          </a>
                        </h3>
                        <span class="price dib mb__5">
                          <del>Rs. 60.00</del>
                          <ins>Rs. 40.00</ins>
                        </span>
                        <div class="swatch__list_js swatch__list lh__1 nt_swatches_on_grid">
                          <span
                            data-bgset="assets/images/products/pr-27.jpg"
                            class="nt_swatch_on_bg swatch__list--item pr ttip_nt tooltip_top_right"
                          >
                            <span class="tt_txt">Pink</span>
                            <span class="swatch__value bg_color_pink"></span>
                          </span>
                          <span
                            data-bgset="assets/images/products/pr-35.jpg"
                            class="nt_swatch_on_bg swatch__list--item pr ttip_nt tooltip_top_right"
                          >
                            <span class="tt_txt">Black</span>
                            <span class="swatch__value bg_color_black"></span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 pr_animated col-md-3 col-6 mt__30 pr_grid_item product nt_pr desgin__1 done">
                    <div class="product-inner pr">
                      <div class="product-image pr oh lazyload">
                        <a class="d-block" href="product-detail-layout-01.html">
                          <div
                            class="pr_lazy_img main-img nt_img_ratio nt_bg_lz lazyload padding-top__127_571"
                            data-bgset="assets/images/home-cosmetics/recent-02.png"
                          ></div>
                        </a>
                        <div class="hover_img pa pe_none t__0 l__0 r__0 b__0 op__0">
                          <div
                            class="pr_lazy_img back-img pa nt_bg_lz lazyload padding-top__127_571"
                            data-bgset="assets/images/home-cosmetics/recent-02.png"
                          ></div>
                        </div>
                        <div class="nt_add_w ts__03 pa ">
                          <a
                            href="#"
                            class="wishlistadd cb chp ttip_nt tooltip_right"
                          >
                            <span class="tt_txt">Add to Wishlist</span>
                            <i class="facl facl-heart-o"></i>
                          </a>
                        </div>
                        <div class="hover_button op__0 tc pa flex column ts__03">
                          <a
                            href="#"
                            class="pr pr_atc cd br__40 bgw tc dib js_addtc cb chp ttip_nt tooltip_top_left"
                          >
                            <span class="tt_txt">Add to cart</span>
                            <i class="iccl iccl-cart"></i>
                            <span>Add to cart</span>
                          </a>
                        </div>
                      </div>
                      <div class="product-info mt__15">
                        <h3 class="product-title pr fs__14 mg__0 fwm">
                          <a
                            class="cd chp"
                            href="product-detail-layout-01.html"
                          >
                            Simple Skin Cream
                          </a>
                        </h3>
                        <span class="price dib mb__5">Rs. 56.00</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 pr_animated col-md-3 col-6 mt__30 pr_grid_item product nt_pr desgin__1 done">
                    <div class="product-inner pr">
                      <div class="product-image pr oh lazyload">
                        <span class="tc nt_labels pa pe_none cw">
                          <span class="nt_label new">New</span>
                        </span>
                        <a class="d-block" href="product-detail-layout-01.html">
                          <div
                            class="pr_lazy_img main-img nt_img_ratio nt_bg_lz lazyload padding-top__127_571"
                            data-bgset="assets/images/home-cosmetics/recent-03.png"
                          ></div>
                        </a>
                        <div class="hover_img pa pe_none t__0 l__0 r__0 b__0 op__0">
                          <div
                            class="pr_lazy_img back-img pa nt_bg_lz lazyload padding-top__127_571"
                            data-bgset="assets/images/home-cosmetics/recent-03.png"
                          ></div>
                        </div>
                        <div class="nt_add_w ts__03 pa ">
                          <a
                            href="#"
                            class="wishlistadd cb chp ttip_nt tooltip_right"
                          >
                            <span class="tt_txt">Add to Wishlist</span>
                            <i class="facl facl-heart-o"></i>
                          </a>
                        </div>
                        <div class="hover_button op__0 tc pa flex column ts__03">
                          <a
                            href="#"
                            class="pr pr_atc cd br__40 bgw tc dib js__qs cb chp ttip_nt tooltip_top_left"
                          >
                            <span class="tt_txt">Add to cart</span>
                            <i class="iccl iccl-cart"></i>
                            <span>Add to cart</span>
                          </a>
                        </div>
                        <div class="product-attr pa ts__03 cw op__0 tc">
                          <p class="truncate mg__0 w__100">XS, S, M, L, XL</p>
                        </div>
                      </div>
                      <div class="product-info mt__15">
                        <h3 class="product-title pr fs__14 mg__0 fwm">
                          <a
                            class="cd chp"
                            href="product-detail-layout-01.html"
                          >
                            Analogue{" "}
                          </a>
                        </h3>
                        <span class="price dib mb__5">Rs. 30.00</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 pr_animated col-md-3 col-6 mt__30 pr_grid_item product nt_pr desgin__1 done">
                    <div class="product-inner pr">
                      <div class="product-image pr oh lazyload">
                        <a class="d-block" href="product-detail-layout-01.html">
                          <div
                            class="pr_lazy_img main-img nt_img_ratio nt_bg_lz lazyload padding-top__127_571"
                            data-bgset="assets/images/home-cosmetics/recent-04.png"
                          ></div>
                        </a>
                        <div class="hover_img pa pe_none t__0 l__0 r__0 b__0 op__0">
                          <div
                            class="pr_lazy_img back-img pa nt_bg_lz lazyload padding-top__127_571"
                            data-bgset="assets/images/home-cosmetics/recent-04.png"
                          ></div>
                        </div>
                        <div class="nt_add_w ts__03 pa">
                          <a
                            href="#"
                            class="wishlistadd cb chp ttip_nt tooltip_right"
                          >
                            <span class="tt_txt">Add to Wishlist</span>
                            <i class="facl facl-heart-o"></i>
                          </a>
                        </div>
                        <div class="hover_button op__0 tc pa flex column ts__03">
                          <a
                            href="#"
                            class="pr pr_atc cd br__40 bgw tc dib js_addtc cb chp ttip_nt tooltip_top_left"
                          >
                            <span class="tt_txt">Add to cart</span>
                            <i class="iccl iccl-cart"></i>
                            <span>Add to cart</span>
                          </a>
                        </div>
                      </div>
                      <div class="product-info mt__15">
                        <h3 class="product-title pr fs__14 mg__0 fwm">
                          <a
                            class="cd chp"
                            href="product-detail-layout-01.html"
                          >
                            Fresh Cream
                          </a>
                        </h3>
                        <span class="price dib mb__5">Rs. 15.00 </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Producdetails;

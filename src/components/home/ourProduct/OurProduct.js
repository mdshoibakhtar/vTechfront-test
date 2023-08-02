import { Link } from "react-router-dom";
import "../ourProduct/ourProduct.css";
import allProduct from "../../../assets/img/product/products-logo/all-logo.jpg";
import p1 from "../../../assets/img/product/apple/macbook33.jpg";
import p2 from "../../../assets/img/product/apple/quaritsch-photography-3xQ65cknLPk-unsplash.jpg";
import p3 from "../../../assets/img/product/apple/apple-des-1.webp";
import p4 from "../../../assets/img/product/apple/macbook44.jpg";
import p5 from "../../../assets/img/product/dell/dell-2.jpeg";
import p6 from "../../../assets/img/product/dell/hp-destop.jpg";
// import p7 from "../../../assets/img/product/hp/HP-13.jpeg";
// import p8 from "../../../assets/img/product/hp/hp-2.png";

//===================== react-brand -icon ==================

import b1 from "../../../assets/img/product/brand-logo/apple.svg";
import b2 from "../../../assets/img/product/brand-logo/dell.svg";
import b3 from "../../../assets/img/product/brand-logo/hp-logo.svg";
import b4 from "../../../assets/img/product/brand-logo/lenovo.svg";
import b5 from "../../../assets/img/product/brand-logo/asus.svg";

function OurProduct() {
  return (
    <>
      <div className="section padding_layout_2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <div className="main_heading text_align_center">
                  <h2 style={{ textTransform: "uppercase", backgroundColor: "cornflowerblue" }} className="rounded-2 text-white mb-5">Brands WE Deals In
                  </h2>
                  <div className="row  align-items-baseline">
                    <div className="col">
                      <img src={b1} alt="brand" />
                    </div>
                    <div className="col">
                      <img src={b4} alt="brand" />
                    </div>
                    <div className="col">
                      <img src={b2} alt="brand" />
                    </div>
                    <div className="col">
                      <img src={b5} alt="brand" />
                    </div>
                    <div className="col">
                      <img src={b3} alt="brand" />
                    </div>


                    {/* <div className="col">apple</div>
                    <div className="col">lenevo</div>
                    <div className="col">Hp</div>
                    <div className="col">Dell</div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ minWidth: "300px" }}>
            <h2 style={{ textTransform: "uppercase" }} className=" mb-5 text-center ">OUR PRODUCTS
            </h2>
          </div>
          <div className="row">

            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 margin_bottom_30_all">
              <div className="product_list">
                <div className="product_img">
                  <img
                    className="img-responsive"
                    src={p1}
                    alt="website template image"
                  />
                </div>
                <div className="product_detail_btm">
                  <div className="center">
                    <h4>
                      <Link to="">
                        Apple  Devices
                      </Link>
                    </h4>
                  </div>
                  <div className="starratin">
                    <div className="center">
                      <i className="fa fa-star" aria-hidden="true" />{" "}
                      <i className="fa fa-star" aria-hidden="true" />{" "}
                      <i className="fa fa-star" aria-hidden="true" />{" "}
                      <i className="fa fa-star" aria-hidden="true" />{" "}
                      <i className="fa fa-star-o" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="product_price text-center mt-2">
                    {/* <p><span className="old_price">$15.00</span> – <span className="new_price">$25.00</span></p> */}
                    <Link to="/contact-us" id="headbtn" className="tp-btn">
                      Ask Quote &nbsp;
                      <i
                        className="fas fa-angle-double-right"
                        style={{ position: "relative", top: 1 }}
                      />{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 margin_bottom_30_all">
              <div className="product_list">
                <div className="product_img">
                  <img
                    className="img-responsive"
                    src={p2}
                    alt="website template image"
                  />
                </div>
                <div className="product_detail_btm">
                  <div className="center">
                    <h4>
                      <Link to="" >
                        Laptops & desktop
                      </Link>
                    </h4>
                  </div>
                  <div className="starratin">
                    <div className="center">
                      <i className="fa fa-star" aria-hidden="true" />{" "}
                      <i className="fa fa-star" aria-hidden="true" />{" "}
                      <i className="fa fa-star" aria-hidden="true" />{" "}
                      <i className="fa fa-star" aria-hidden="true" />{" "}
                      <i className="fa fa-star-o" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="product_price text-center mt-2">
                    {/* <p><span className="old_price">$15.00</span> – <span className="new_price">$25.00</span></p> */}
                    <Link to="/contact-us" id="headbtn" className="tp-btn">
                      Ask Quote &nbsp;
                      <i
                        className="fas fa-angle-double-right"
                        style={{ position: "relative", top: 1 }}
                      />{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 margin_bottom_30_all">
              <div className="product_list">
                <div className="product_img">
                  <img
                    className="img-responsive"
                    src={p6}
                    alt="website template image"
                  />
                </div>
                <div className="product_detail_btm">
                  <div className="center">
                    <h4>
                      <Link to="">
                        Servers
                      </Link>
                    </h4>
                  </div>
                  <div className="starratin">
                    <div className="center">
                      <i className="fa fa-star" aria-hidden="true" />{" "}
                      <i className="fa fa-star" aria-hidden="true" />{" "}
                      <i className="fa fa-star" aria-hidden="true" />{" "}
                      <i className="fa fa-star" aria-hidden="true" />{" "}
                      <i className="fa fa-star-o" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="product_price text-center mt-2">
                    {/* <p><span className="old_price">$15.00</span> – <span className="new_price">$25.00</span></p> */}
                    <Link to="/contact-us" id="headbtn" className="tp-btn">
                      Ask Quote &nbsp;
                      <i
                        className="fas fa-angle-double-right"
                        style={{ position: "relative", top: 1 }}
                      />{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 margin_bottom_30_all">
              <div className="product_list">
                <div className="product_img">
                  <img
                    className="img-responsive"
                    src={p4}
                    alt="website template image"
                  />
                </div>
                <div className="product_detail_btm">
                  <div className="center">
                    <h4>
                      <Link to="">
                        AMC
                      </Link>
                    </h4>
                  </div>
                  <div className="starratin">
                    <div className="center">
                      <i className="fa fa-star" aria-hidden="true" />{" "}
                      <i className="fa fa-star" aria-hidden="true" />{" "}
                      <i className="fa fa-star" aria-hidden="true" />{" "}
                      <i className="fa fa-star" aria-hidden="true" />{" "}
                      <i className="fa fa-star-o" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="product_price text-center mt-2">
                    {/* <p><span className="old_price">$15.00</span> – <span className="new_price">$25.00</span></p> */}
                    <Link to="/contact-us" id="headbtn" className="tp-btn">
                      Ask Quote &nbsp;
                      <i
                        className="fas fa-angle-double-right"
                        style={{ position: "relative", top: 1 }}
                      />{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="product_price text-center mt-2">
              {/* <p><span className="old_price">$15.00</span> – <span className="new_price">$25.00</span></p> */}
              {/* <Link to="/our-product" id="headbtn" className="tp-btn">
                View More &nbsp;
                <i
                  className="fas fa-angle-double-right"
                  style={{ position: "relative", top: 1 }}
                />{" "}
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default OurProduct;

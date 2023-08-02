import React from 'react'
import { Link } from 'react-router-dom'
import p1 from "../../../assets/img/clientle/itCom.png"
import p2 from "../../../assets/img/clientle/pharamcy.png"
import p3 from "../../../assets/img/clientle/sme.png"
import p4 from "../../../assets/img/clientle/startComp.png"
function OurClientele() {
    return <div className="section padding_layout_1">
        <div className="container">

            <div style={{ minWidth: "300px" }}>
                <h2 style={{ textTransform: "uppercase" }} className=" mb-5 text-center ">OUR CLIENTELE
                </h2>
            </div>
            <div className="row">

                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 margin_bottom_30_all">
                    <div className="">
                        <div className="product_img">
                            <img
                                className="img-responsive"
                                src={p1}
                                alt="website template image"
                            />
                        </div>
                        <div className='mt-5'>
                            <h3 className='text-center'>IT COMPANIES</h3>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 margin_bottom_30_all">
                    <div className="">
                        <div className="product_img">
                            <img
                                className="img-responsive"
                                src={p2}
                                alt="website template image"
                            />
                        </div>
                        <div className='mt-5'>
                            <h3 className='text-center'>PHARAMCY</h3>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 margin_bottom_30_all">
                    <div className="">
                        <div className="product_img">
                            <img
                                className="img-responsive"
                                src={p3}
                                alt="website template image"
                            />
                        </div>
                        <div className='mt-5'>
                            <h3 className='text-center'>S M E</h3>
                            <hr />
                        </div>
                    </div>

                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 margin_bottom_30_all">
                    <div className="">
                        <div className="product_img">
                            <img
                                className="img-responsive"
                                src={p4}
                                alt="website template image"
                            />
                        </div>
                        <div className='mt-5'>
                            <h3 className='text-center'>START UP COPMPANY</h3>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
}

export default OurClientele

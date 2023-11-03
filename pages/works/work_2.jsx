import Layout from "@/src/layout/Layout";
import Link from "next/link";
import {Swiper, SwiperSlide} from "swiper/react";
import {sliderProps} from "@/src/sliderProps";
const ProjectDetails = () => {
  return (
      <Layout>
        {/* Page Banner Section Start */}
        <section
            className="page-banner pt-210 rpt-150 pb-75 rel z-1"
            style={{ backgroundImage: "url(../assets/images/hero/hero-two-bg.png)" }}
        >
          <div className="container container-1290">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="hero-title style-two mt-65 mb-30 wow fadeInUp delay-0-2s">
                  淙淙
                </h1>
                <div className="banner-text wow fadeInUp delay-0-3s">
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Page Banner Section End */}
        {/* Project Details Image start */}
        <div className="project-details-image rel z-1">
          <div className="container-fluid">
            <div className="image wow fadeInUp delay-0-2s">
              <img style={{ width: "100%" }}
                   src="../assets/images/zcy/work/work_2_top.jpg"
                   alt="Project"
              />
            </div>
          </div>
        </div>
        {/* Project Details Image end */}
        {/* Project Details Content Area start */}
        <section className="project-details-area pt-80 rel z-1">
          <div className="container container-1290">
            <div className="row pb-35 wow fadeInUp delay-0-2s">
              <div className="col-lg-4">
                <h3 className="title mb-30">这是？</h3>
              </div>
              <div className="col-lg-8">
                <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1">
                  <div className="col">
                    <h5>角色</h5>
                    <p className="sub-title mb-20">淙淙</p>
                  </div>
                  <div className="col">
                    <h5>类型</h5>
                    <p className="sub-title mb-20">短片</p>
                  </div>
                  <div className="col">
                    <h5>日期</h5>
                    <p className="sub-title mb-20">2022/08/11</p>
                  </div>
                  <div className="col">
                    <h5>详情</h5>
                    <p className="sub-title mb-20"><a href={"https://www.douyin.com/video/7149548611058011428"} target={"_blank"}>抖音</a></p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row pt-50 pb-70 wow fadeInUp delay-0-2s">
              <div className="col-lg-4">
                <h3 className="title mb-30">简介</h3>
              </div>
              <div className="col-lg-8">
                <div className="big-letter text">
                  年轻女导游淙淙和男友正处于关系崩坏的边缘。这天，她邂逅了一个奇怪的老奶奶，声称自己要寻找一个神秘的野瀑布。迫于甩开难缠的男友，淙淙答应了奶奶的请求，但这次旅程却远远没有她所设想的那样简单…
                </div>
              </div>
            </div>
            <div className="row">

              <div className="col-lg-6">
                <div className="image mb-30 wow fadeInUp delay-0-2s">
                  <img
                      src="../assets/images/zcy/work/work_2_1.webp"
                      alt="Project"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="image mb-30 wow fadeInUp delay-0-2s">
                  <img
                      src="../assets/images/zcy/work/work_2_2.webp"
                      alt="Project"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
  );
};
export default ProjectDetails;

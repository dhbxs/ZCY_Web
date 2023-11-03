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
                  二次呼吸
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
                   src="../assets/images/zcy/work/work_3_top.webp"
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
                    <p className="sub-title mb-20">南溪</p>
                  </div>
                  <div className="col">
                    <h5>类型</h5>
                    <p className="sub-title mb-20">电影</p>
                  </div>
                  <div className="col">
                    <h5>日期</h5>
                    <p className="sub-title mb-20">2023/10/12</p>
                  </div>
                  <div className="col">
                    <h5>详情</h5>
                    -
                    {/*<p className="sub-title mb-20"><a href={""} target={"_blank"}>-</a></p>*/}
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
                  一个女孩因为时空错乱，遇到了另一个自己，从此被另一个自己取代。女孩决定杀死另一个自己，夺回自己的生活。可当她杀死另一个自己后，却发现生活并没有恢复成原来的样子，而是陷入了另一种虚无。最终，女孩决定自杀，结束这荒诞的一切。
                </div>
              </div>
            </div>
            <div className="row">

              <div className="col-lg-6">
                <div className="image mb-30 wow fadeInUp delay-0-2s">
                  <img
                      src="../assets/images/zcy/work/work_3_1.webp"
                      alt="Project"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="image mb-30 wow fadeInUp delay-0-2s">
                  <img
                      src="../assets/images/zcy/work/work_3_2.webp"
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

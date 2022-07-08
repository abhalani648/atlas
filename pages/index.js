import Head from 'next/head';
import Footer from '../components/Footer';
import PostCard from '../components/PostCard';
import Image from 'next/image'
import { getAllPosts } from '../lib/test-data';
import { client } from '../lib/apollo'; 
import { gql } from "@apollo/client";


export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>Headless WP Next Starter</title>
        <link rel="icon" href="favicon.ico"></link>
		<link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="assets/css/global.css" />
        <link rel="stylesheet" type="text/css" href="assets/css/home.css" />
			<script src="assets/js/jquery-3.6.0.min.js"></script>
		  <script src="assets/js/bootstrap.min.js"></script>
		  <script src="assets/js/script.js"></script>
      </Head>

      
         <div class="wrapper">

            <header id="header">
                <div class="container-xl">
                    <div class="row">
                        <div class="col-xl-1 col-lg-1 col-md-3 col-sm-2 col-3">
                            <a href="#">
								
								<Image
									src="/assets/images/logo.png"
									alt="logo"
									width="250"
									height="150"
									blurDataURL="data:..." 
									placeholder="blur"  
								/>
							</a>
                        </div>
                        <div class="col-xl-11 col-lg-11 col-md-9 col-sm-10 col-9">
                            <nav class="navbar navbar-expand-lg navbar-dark navigation-menu">
                                <button class="navbar-toggler" type="button" data-bs-target="#collapsibleNavbar">
                                  <span class="navbar-toggler-icon"></span>
                              </button>
                              <div class="collapse navbar-collapse" id="collapsibleNavbar">
                                    <div class="mobile-header">
                                        <a href="index.html"><img src="assets/images/logo.png" alt="logo" class="logo" /></a>
                                        <a href="javascript:void(0);" class="close-icon" aria-label="Close"></a>
                                    </div>
                                    <ul class="navbar-nav">
                                        <li>
                                          <a href="#">Who We Are</a><span class="arrow-down"></span>
                                          <ul class="sub-menu">
                                            <li><a href="#">Mission Statement and Philosophy</a></li>
                                            <li><a href="#">Leadership  </a></li>
                                            <li><a href="#">Team Leaders</a></li>
                                            <li><a href="#">Our Stories  </a></li>
                                            <li><a href="#">Financials </a></li>
                                          </ul>
                                      </li>
                                      <li>
                                          <a href="#">Careers</a><span class="arrow-down"></span>
                                          <ul class="sub-menu">
                                            <li><a href="#">Apply Now</a></li>
                                            <li><a href="#">What to Expect</a></li>
                                            <li><a href="#">Reasons to Join Our Team</a></li>
                                            <li><a href="#">Excellence in Action</a></li>
                                            <li><a href="#">Internships</a></li>
                                          </ul>
                                      </li>
                                      <li><a href="#">Contact Us</a>
                                      </li>  
                                      <li><a href="#">Get Involved</a><span class="arrow-down"></span>
                                          <ul class="sub-menu">
                                             <li><a href="#">Donate </a></li>
                                            <li><a href="#">Volunteer</a></li>
                                            <li><a href="#">Leave a Legacy</a></li>
                                            <li><a href="#">Thrift </a></li>
                                            <li><a href="#">Other Ways to Give </a></li>
                                          </ul>
                                      </li> 
                                       <li><a href="#">Admissions</a></li>
                            
                                       <li><a href="#">Resources</a><span class="arrow-down"></span>
                                          <ul class="sub-menu">
                                             <li><a href="#">Medicaid Waivers</a></li>
                                            <li><a href="#">Medicaid Services</a></li>
                                            <li><a href="#">Links </a></li>
                                          </ul>
                                      </li> 
                                       <li><a href="#">Events</a><span class="arrow-down"></span>
                                          <ul class="sub-menu">
                                            <li><a href="#">Chelsea West Fest</a></li>
                                            <li><a href="#">Stockley Gardens Arts Festivals</a></li>
                                            <li><a href="#">Shamrockin’ in Ghent</a></li>
                                            <li><a href="#">Tidewater Blue’z and BBQ </a></li>
                                            <li><a href="#">Annual Dinner</a></li>
                                          </ul>
                                      </li> 
                                       <li><a href="#">Media</a><span class="arrow-down"></span>
                                          <ul class="sub-menu">
                                            <li><a href="#">Photo Gallery </a></li>
                                            <li><a href="#">News </a></li>
                                            <li><a href="#">Facebook live stream </a></li>
                                          </ul>
                                      </li> 
                                  </ul>
                              </div>
                          </nav>
                          <div class="search-box">
                              <input type="text" placeholder="Search Here" />
                              <span class="search-icon"></span>
                          </div>
                          <a href="#" class="btn-hope">DONATE NOW</a>
                      </div>
                  </div>
              </div>
          </header>
          <main>
            <section class="banner-section">
              <div id="BannerSlider" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
					<Image
						src="/assets/images/banner-image.png"
						alt="image"
						width="1920"
						height="830"
						blurDataURL="data:..." 
						placeholder="blur"  
					/>
                  </div>
                  <div class="carousel-item">
                    <Image
						src="/assets/images/banner-image.png"
						alt="image"
						width="1920"
						height="830"
						blurDataURL="data:..." 
						placeholder="blur"  
					/>
                  </div>
                  <div class="carousel-item">
                    <Image
						src="/assets/images/banner-image.png"
						alt="image"
						width="1920"
						height="830"
						blurDataURL="data:..." 
						placeholder="blur"  
					/>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#BannerSlider" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#BannerSlider" data-bs-slide="next">
                  <span class="carousel-control-next-icon"></span>
                </button>
              </div>
                <div class="banner-detail">
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <a href="#" class="btn-hope">LEARN MORE</a>
                </div>
            </section>
            <section class="home-all-box">
                <div class="row">
                    <div class="col-lg-4 col-xl-4 col-md-6">
                        <div class="single-box-home shape-bg">
                            <div class="icon-box-home shape-right-bg"><div class="career-icon"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span></div></div>
                            <h2 class="h3">Careers</h2>
                            <p>Looking for fun, meaningful employment? Apply for a job with Hope House, become an intern, or volunteer.</p>
                            <a href="#">Careers</a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-xl-4 col-md-6">
                        <div class="single-box-home shape-bg">
                            <div class="icon-box-home shape-right-bg"><div class="donate-icon"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span></div></div>
                            <h2 class="h3">Donate to Hope House</h2>
                            <p>Give to our annual fund, sponsor one of our events, or donate online.</p>
                            <a href="#">Your Support</a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-xl-4 col-md-6">
                        <div class="single-box-home shape-bg">
                            <div class="icon-box-home shape-right-bg"><div class="sg-icon"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span><span class="path13"></span><span class="path14"></span><span class="path15"></span><span class="path16"></span></div></div>
                            <h2 class="h3">Stockley Gardens arts Festival</h2>
                            <p>Hope House's biggest fundraising event is held twice a year, and is one of the most popular outdoor art shows in the region.</p>
                            <a href="#">Stockley Gardens Arts Festival</a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="about-inner">
              <div class="tringle-shape tringle-shape1"></div>
              <div class="about-home">
                  <div class="tringle-shape"></div>
                  <div class="row">
                      <div class="col-xl-6 col-lg-6 col-md-12">
						  <Image
								src="/assets/images/about-home-image.jpg"
								alt="about-img"
								width="649"
								height="718"
								blurDataURL="data:..." 
								placeholder="blur"  
							/>
                      </div>
                      <div class="col-xl-6 col-lg-6 col-md-12">
                          <div class="right-about">
                              <h2>What makes Hope House different?</h2>
                              <p>Hope House Foundation, a 501(c)3 organization, provides services to adults with developmental disabilities exclusively in their own homes or apartments — regardless of how complex their disabilities may be.</p> 
                              <p>Skeptical? Initially, many parents and family members of the 120 people Hope House supports were, too. Their children had aged out of Hampton Roads’ special education system, and were ready for adult services and support. Many worried that cognitive limitations, mental illness, medical challenges, behavioral issues, or other conditions, such as autism, would make it impossible for their loved ones to live safely in their own apartments.</p>
                              <p>But talk to those people today, and they’ll tell you how their children have not just succeeded, but blossomed. That’s because Hope House offers more than a safe and secure environment. We offer privacy, choice, and the opportunity to pursue a meaningful life.</p>
                              <a href="#" class="btn-hope">DONATE NOW</a>
                          </div>
                      </div>
                  </div>
              </div>
            </section>
          </main>
          <footer>
            <div class="footer-inner">
                <div class="container-xl">
                    <h2 class="big-text">HOPE HOUSE</h2>
                  </div>
                  <div class="footer-inner-top">
                    <div class="footer-top">
                      <div class="container-xl">
                        <div class="row">
                            <div class="col-md-12 col-xl-6 col-lg-6 text-end">
                                <h3 class="left-contact">To find out if Hope House is a right fit for you, contact Susan Henderson at</h3>
                            </div>
                            <div class="col-md-12 col-xl-6 col-lg-6">
                                <div class="right-contact">
                                    <a href="tel:757.625.6161" class="number-text">757.625.6161 x512</a>
                                    <div class="email-text">
                                        <span>OR</span> <a href="#">Email Her Directly.</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            <div class="footer-center">You may also visit our <a href="#">Medicaid Waiver Information Page</a> to learn more about navigating Virginia’s Medicaid Waiver system.</div>
            <div class="footer-bottom">
                <div class="row">
                    <div class="col-lg-3 col-xl-3">
                        <ul class="social-icon">
                            <li><a href="#" class="fb-icon"></a></li>
                            <li><a href="#" class="insta-icon"></a></li>
                            <li><a href="#" class="twitter-icon"></a></li>
                            <li><a href="#" class="youtube-icon"></a></li>
                        </ul>
                    </div>
                    <div class="col-lg-9 col-xl-9">
                        <ul class="footer-menu">
                             <li>
                                  <a href="#">Who We Are</a>
                              </li>
                              <li>
                                  <a href="#">Careers</a>
                              </li>
                              <li>
                                  <a href="#">Contact Us</a>
                              </li>  
                              <li>
                                  <a href="#">Get Involved</a>
                              </li> 
                               <li>
                                  <a href="#">Admissions</a>
                              </li> 
                               <li>
                                  <a href="#">Resources</a>
                              </li> 
                               <li>
                                  <a href="#">Events</a>
                              </li> 
                               <li>
                                  <a href="#">Media</a>
                              </li> 
                        </ul>
                    </div>
                </div>
            </div>
            <div class="copyright">
                <div class="copyright-inner">
                    <div class="row">
                        <div class="col-md-6">
                            <p>© 2022 Hope House Foundation. <span>All Rights Reserved.</span></p>
                        </div>
                        <div class="col-md-6 text-end">
                            <span>Website Design By:</span>
                            <a href="https://gotechark.com/" target="_blank" rel="noopener noreferrer"> <img src="assets/images/logo-tekark.svg" alt="Teckark" title="Teckark Solutions" /> </a>
                        </div>
                    </div>
                </div>
            </div>
          </footer>
      </div>
      <div class="backToTop"><a href="#" class="scrolltotop">&nbsp;</a></div>
	  
      
		
      <Footer></Footer>
    </div>
  )
}

export async function getStaticProps(){

  // Paste your GraphQL query inside of a gql tagged template literal
  const GET_POSTS = gql`
    query AllPostsQuery {
      posts {
        nodes {
          title
          content
          date
          uri
        }
      }
    }
  `;
  // Here we make a call with the client and pass in our query string to the 
  // configuration objects 'query' property
  const response = await client.query({
    query: GET_POSTS
  });
  // Once we get the response back, we need to traverse it to pull out the 
  // data we want to pass into the HomePage
  const posts = response?.data?.posts?.nodes; 

  return {
    props: {
      posts
    }
  }
}

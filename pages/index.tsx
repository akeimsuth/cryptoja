import { NextPage } from "next";
import Image from "next/image";
import Link from "next/dist/client/link";
import CoinGeckoApi from '@crypto-coffee/coingecko-api';
import { useRouter } from "next/router";
import {useState, useEffect} from "react";
import styled from "@emotion/styled";
import { auth } from "../src/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Slider from "react-slick";
import LandingLayout from "../src/layouts/landing/LandingLayout";
import { getUser } from "../src/services/UserService";


const Index: NextPage = () => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);
  const [coin, setCoin] = useState<any>();
  const [coinAmount, setCoinAmount] = useState<any>();
  const [altCoins, setAltCoins] = useState<any>();
  const [btcAmount, setBtcAmount] = useState<any>(1);
  const [usBtcAmount, setUsBtcAmount] = useState<any>();
  const [details, setDetails] = useState<any>();
  const [currency, setCurrency] = useState<any>("jmd");

  const [formData, setFormData] = useState({
    usd: "",
    btc: ""
  });

  const { usd, btc } = formData;

  // useEffect(() => {
  //   setFormData({ ...formData, btc: (parseFloat(formData.usd) / btcAmount).toString() });
  //   if (formData.usd === "") {
  //     setFormData({ ...formData, btc: ""})
  //   }
  // }, [formData.usd, btcAmount])

  useEffect(() => {
    if (currency === "jmd") {
      setFormData({ ...formData, btc: (parseFloat(formData.usd) / coinAmount).toString() });
    } else {
      setFormData({ ...formData, btc: (parseFloat(formData.usd) / btcAmount).toString() });
    }
    if (formData.usd === "") {
      setFormData({ ...formData, btc: ""})
    }
  }, [currency, formData.usd, btcAmount])

  const onChange = (e: any) =>
  setFormData({ ...formData, [e.target.name]: e.target.value });

  const generateCoin = async() => {
    try {
      const coinGeckoApi = new CoinGeckoApi()
      const results = await coinGeckoApi.simple({
        ids: ['Bitcoin', 'Ethereum', 'Litecoin', 'Cardano'],
        vs_currencies: 'usd'
      })
      console.log(results)
      const calCost = parseFloat(results.bitcoin.usd) * 148;
      const resUSD = parseFloat(results.bitcoin.usd).toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      const res = calCost.toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      setCoin(res)
      setCoinAmount(calCost);
      setBtcAmount(results.bitcoin.usd);
      setUsBtcAmount(resUSD);
      setAltCoins({
        bitcoin: results.bitcoin.usd,
        ethereum: results.ethereum.usd,
        litecoin: results.litecoin.usd,
        cardano: results.cardano.usd
      })
      // const resEth = parseFloat(results.ethereum.usd).toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      // setEth(resEth)
    } catch (err) {
      // do something with the error
    }
  }

  const showDeatils = () => {
    if(user){
      getUser(user.uid)
      .then(res => setDetails(res.data))
      .catch(err => console.log(err))
    }
  }

  const changeCoins = (e: any) => {
    switch (e.target.value) {
      case "bitcoin":
        setCoinAmount(altCoins?.bitcoin * 148)
        setBtcAmount(altCoins?.bitcoin);
        break;
        case "ethereum":
          setCoinAmount(altCoins?.ethereum * 148)
          setBtcAmount(altCoins?.ethereum);
          break;
        case "litecoin":
          setCoinAmount(altCoins?.litecoin * 148)
          setBtcAmount(altCoins?.litecoin);
          break;
        case "cardano":
          setCoinAmount(altCoins?.cardano * 148)
          setBtcAmount(altCoins?.cardano);
          break;
      default:
        break;
    }
  }

  const changeCurrency = (e: any) => {
    switch (e.target.value) {
      case "jmd":
        setCurrency("jmd");
        break;
        case "usd":
          setCurrency("usd");
          break;
      default:
        break;
    }
  }

  useEffect(() => {
    generateCoin();
    showDeatils();
  }, [])

  

  const sliderProps = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
  };
  return (
    <LandingLayout>
      <div className="intro1 section-padding">
        <div className="container">
        {((user && details?.kyc === 'required') && details?.role !== "admin") &&
          <div className="alert alert-warning" role="alert">
            <Link href="/kyc">
              <a style={{color: "red"}}>Please upload required documents by clicking here</a>
            </Link>
          </div>
        }
        {((user && details?.kyc === 'pending') && details?.role !== "admin") &&
          <div className="alert alert-warning" role="alert">
            <a style={{color: "orange"}}>Your Documents are currently being reviewed</a>
          </div>
        }
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6 col-lg-6 col-12">
              <div className="intro-content">
                <h1 className="text-dark">
                  Trade with <strong className="text-success">Tokenomyja</strong>.
                  <br />
                  Buy and sell cryptocurrency
                </h1>
                <p>
                  Fast and secure way to purchase or exchange
                  cryptocurrencies
                </p>
                <div className="intro-btn">
                  {!user && 
                    <Link href="/signup">
                      <a className="btn btn-success btn-sm py-2 px-3 me-3 shadow-sm">
                        Get Started
                      </a>
                    </Link>
                  }
                  <Link href="/price">
                    <a className="btn btn-outline-dark btn-sm py-2 px-3 shadow-sm">
                      Browse Now
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-12">
              <div className="intro-form-exchange">
                <form
                  key={`${new Date()}form`}
                  name="myform"
                  className="currency_validate trade-form row g-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    router.push("/price-details");
                  }}
                >
                  <div className="col-12">
                    <label className="form-label">Send</label>
                    <div className="input-group">
                      <select className="form-control" name="method" onChange={(e) => changeCurrency(e)}>
                        <option value="jmd">JMD</option>
                        <option value="usd">USD</option>
                      </select>
                      <input
                        type="text"
                        name="usd"
                        className="form-control"
                        // placeholder={`${coin}`}
                        value={usd}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="form-label">Receive</label>
                    <div className="input-group">
                      <select className="form-control" name="method" onChange={(e) => changeCoins(e)}>
                        <option value="bitcoin">BTC</option>
                        <option value="ethereum">ETH</option>
                        <option value="litecoin">LTC</option>
                        <option value="cardano">ADA</option>
                      </select>
                      <input
                        disabled
                        type="text"
                        name="btc"
                        className="form-control"
                        // placeholder="1 BTC"
                        value={btc}
                      />
                    </div>
                  </div>
                  <p className="mb-0">
                  <strong>{`1 BTC ~ $${coin} JMD `}</strong><br/>
                  {`1 BTC ~ $${usBtcAmount} USD `}<br/>
                    <span className="text-success d-inline">
                      Estimated rate <br />
                    </span>
                  </p>
                  {/* <input
                    type="submit"
                    className="btn btn-primary"
                    value="Buy Now"
                  /> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="getstart section-padding bg-dark">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-white bg-dark">
                <h2 className="text-white bg-dark">Getting started is simple</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
              <div className="getstart-content card no-shadow mb-0">
                <span>
                  <i className="bi bi-person" />
                </span>
                <h3>Create an account</h3>
                <p>
                  Fill out the form with your details
                </p>
                <Link href="/signup">
                  <a>
                    Explore <i className="bi bi-arrow-right-short" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
              <div className="getstart-content card no-shadow mb-0">
                <span>
                  <i className="bi bi-pencil-square" />
                </span>
                <h3>Upload documents</h3>
                <p>
                  Upload your KYC documents to be approved for transactions
                </p>
                <Link href="/signup">
                  <a>
                    Explore <i className="bi bi-arrow-right-short" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
              <div className="getstart-content card no-shadow mb-0">
                <span>
                  <i className="bi bi-cash" />
                </span>
                <h3>Start buying &amp; selling</h3>
                <p>
                  Log into your dashboard then start buying and selling
                </p>
                <Link href="/price">
                  <a>
                    Explore <i className="bi bi-arrow-right-short" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="portfolio section-padding">
        <div className="container">
          <div className="row py-lg-5 justify-content-center">
            <div className="col-xl-7">
              <div className="section-title text-center">
                <h2 className="text-dark">
                  Create your cryptocurrency portfolio today
                </h2>
                <p>
                  Tendex has a variety of features that make it the best place
                  to start trading
                </p>
                <i className="bi-alarm" />
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-4 col-lg-6">
              <div className="portfolio_list">
                <div className="media">
                  <span className="port-icon">
                    <i className="bi bi-person-check" />
                  </span>
                  <div className="media-body">
                    <h4>Manage your portfolio</h4>
                    <p>
                      Buy and sell popular digital currencies, keep track of
                      them in the one place.
                    </p>
                  </div>
                </div>
                <div className="media">
                  <span className="port-icon">
                    <i className="bi bi-bag-check" />
                  </span>
                  <div className="media-body">
                    <h4>Recurring buys</h4>
                    <p>
                      Invest in cryptocurrency slowly over time by scheduling
                      buys daily, weekly, or monthly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="portfolio_img">
                <img
                  src="/images/portfolio.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="portfolio_list">
                <div className="media">
                  <span className="port-icon">
                    <i className="bi bi-shield-check" />
                  </span>
                  <div className="media-body">
                    <h4>Vault protection</h4>
                    <p>
                      For added security, store your funds in a vault with time
                      delayed withdrawals.
                    </p>
                  </div>
                </div>
                <div className="media">
                  <span className="port-icon">
                    {" "}
                    <i className="bi bi-phone" />
                  </span>
                  <div className="media-body">
                    <h4>Mobile apps</h4>
                    <p className="media-normal-text">
                      Stay on top of the markets with the Tendex app for{" "}
                      <Link href="/apps">Android</Link> or{" "}
                      <Link href="/apps">iOS</Link>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="trade-app section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="section-title text-center">
                <h2>Trade. Anywhere</h2>
                <p>
                  All of our products are ready to go, easy to use and offer
                  great value to any kind of business
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="card trade-app-content">
                <div className="card-body">
                  <span>
                    <i className="bi bi-phone" />
                  </span>
                  <h4 className="card-title">Mobile</h4>
                  <p>
                    {`All the power of Tendex's cryptocurrency exchange, in the
                    palm of your hand. Download the Tendex mobile crypto trading
                    app today`}
                  </p>
                  <Link href="/price"> Know More </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="card trade-app-content">
                <div className="card-body">
                  <span>
                    <i className="bi bi-tv" />
                  </span>
                  <h4 className="card-title">Desktop</h4>
                  <p>
                    Powerful crypto trading platform for those who mean
                    business. The Tendex crypto trading experience, tailor-made
                    for your Windows or MacOS device.
                  </p>
                  <Link href="/price"> Know More </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="card trade-app-content">
                <div className="card-body">
                  <span>
                    <i className="bi bi-server" />
                  </span>
                  <h4 className="card-title">API</h4>
                  <p>
                    The Tendex API is designed to provide an easy and efficient
                    way to integrate your trading application into our platform.
                  </p>
                  <Link href="/price"> Know More </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="brand bg-light section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="trusted-business pb-5 text-center">
                <h3>
                  Trusted by over <strong>10.000 users</strong>
                </h3>
              </div>
              <div className="row justify-content-center">
                <div className="col-auto">
                  <div className="trusted-logo">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="/images/brand/1.svg"
                        alt="Image"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="trusted-logo">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="/images/brand/2.svg"
                        alt="Image"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="trusted-logo">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="/images/brand/3.svg"
                        alt="Image"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="trusted-logo">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="/images/brand/4.svg"
                        alt="Image"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="trusted-logo">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="/images/brand/5.svg"
                        alt="Image"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="trusted-logo">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="/images/brand/5.svg"
                        alt="Image"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="testimonial section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="section-title">
                <h2>What our customer says</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="testimonial-content">
                <Slider
                  {...sliderProps}
                  className="testimonial1 testimonial-carousel"
                >
                  <div>
                    <div className="row align-items-center">
                      <div className="col-xl-6 col-lg-6">
                        <div className="customer-img">
                          <img
                            className="img-fluid"
                            src="/images/testimonial/review1.jpg"
                            alt="Image"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="customer-review">
                          {/* <img
                            className="img-fluid"
                            src="/images/brand/2.webp"
                            alt="Image"
                          /> */}
                          <p>
                            It has been a relief working with a 
                            local company to build my trading portfolio.
                            You guys have helped me successfully start my journey onto
                            being financially free.
                            Thanks and keep up the good work
                          </p>
                          <div className="customer-info">
                            <h6>James Dawson</h6>
                            <p>Independent Thinker</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="row align-items-center">
                      <div className="col-xl-6 col-lg-6">
                        <div className="customer-img">
                          <img
                            className="img-fluid"
                            src="/images/testimonial/2.jpg"
                            alt="Image"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="customer-review">
                          <img
                            className="img-fluid"
                            src="/images/brand/3.webp"
                            alt="Image"
                          />
                          <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Nisi voluptas dignissimos similique quas
                            molestiae doloribus recusandae voluptatem et
                            repudiandae veritatis.
                          </p>
                          <div className="customer-info">
                            <h6>Mr Abraham</h6>
                            <p>CEO, Example Company</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="promo section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center">
                <h2>The most trusted cryptocurrency platform</h2>
                <p>Here are a few reasons why you should choose Tendex</p>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="promo-content">
                <div className="promo-content-img">
                  <i className="bi bi-shield-check" />
                </div>
                <h3>Secure storage</h3>
                <p>
                  We store the vast majority of the digital assets in secure
                  offline storage.
                </p>
                <Link href="/about">
                  <a>
                    Explore <i className="bi bi-arrow-right-short" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="promo-content">
                <div className="promo-content-img">
                  <i className="bi bi-x-diamond" />
                </div>
                <h3>Protected by insurance</h3>
                <p>
                  Cryptocurrency stored on our servers is covered by our
                  insurance policy.
                </p>
                <Link href="/about">
                  <a>
                    Explore <i className="bi bi-arrow-right-short" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="promo-content">
                <div className="promo-content-img">
                  <i className="bi bi-circle-half" />
                </div>
                <h3>Industry best practices</h3>
                <p>
                  Tendex supports a variety of the most popular digital
                  currencies.
                </p>
                <Link href="/about">
                  <a>
                    Explore <i className="bi bi-arrow-right-short" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="appss section-padding">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-7 col-lg-6 col-md-6">
              <div className="appss-content">
                <h2>The secure app to store crypto yourself</h2>
                <ul>
                  <li>
                    <i className="la la-check" /> All your digital assets in one
                    place
                  </li>
                  <li>
                    <i className="la la-check" /> Use Decentralized Apps
                  </li>
                  <li>
                    <i className="la la-check" /> Pay friends, not addresses
                  </li>
                </ul>
                <div className="mt-4">
                  <Link href="/app">
                    <a className="btn btn-primary">
                      <img src="/images/android.svg" alt="Image" />
                    </a>
                  </Link>
                  <Link href="/app">
                    <a className="btn btn-primary">
                      <img src="/images/apple.svg" alt="Image" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="appss-img">
                <img className="img-fluid" src="/images/app.png" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="blog bg-white section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="section-title text-center">
                <h2>Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="blog-grid">
                <div className="card">
                  <img
                    className="img-fluid rounded"
                    src="/images/blog/1.jpg"
                    alt="Image"
                  />
                  <div className="card-body">
                    <Link href="/blog-details">
                      <a>
                        <h4 className="card-title">
                          Why does Litecoin need MimbleWimble?
                        </h4>
                      </a>
                    </Link>
                    <Link href="/blog-details">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="blog-grid">
                <div className="card">
                  <img
                    className="img-fluid rounded"
                    src="/images/blog/2.jpg"
                    alt="Image"
                  />
                  <div className="card-body">
                    <Link href="/blog-details">
                      <a>
                        <h4 className="card-title">
                          How to securely store wallet seeds?
                        </h4>
                      </a>
                    </Link>
                    <Link href="/blog-details">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="blog-grid">
                <div className="card">
                  <img
                    className="img-fluid rounded"
                    src="/images/blog/3.jpg"
                    alt="Image"
                  />
                  <div className="card-body">
                    <Link href="/blog-details">
                      <a>
                        <h4 className="card-title">
                          Exclusive Interview With Of Litecoin
                        </h4>
                      </a>
                    </Link>
                    <Link href="/blog-details">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="get-touch section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="section-title">
                <h2>Get in touch. Stay in touch.</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="get-touch-content">
                <span>
                  <i className="bi bi-headset" />
                </span>
                <h4>24 / 7 Support</h4>
                <p>
                  Got a problem? Just get in touch. Our support team is
                  available 24/7.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="get-touch-content">
                <span>
                  <i className="bi bi-receipt" />
                </span>
                <h4>Tendex Blog</h4>
                <p>
                  News and updates from the world???s leading cryptocurrency
                  exchange.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="get-touch-content">
                <span>
                  <i className="bi bi-briefcase" />
                </span>
                <h4>Careers</h4>
                <p>
                  Help build the future of technology. Start your new career at
                  Tendex.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="get-touch-content">
                <span>
                  <i className="bi bi-people" />
                </span>
                <h4>Community</h4>
                <p>
                  Tendex is global. Join the discussion in our worldwide
                  communities.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="get-touch-content">
                <span>
                  <i className="bi bi-envelope" />
                </span>
                <h4>Community</h4>
                <p>
                  Tendex is global. Join the discussion in our worldwide
                  communities.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="get-touch-content">
                <span>
                  <i className="bi bi-chat-left-text" />
                </span>
                <h4>Community</h4>
                <p>
                  Tendex is global. Join the discussion in our worldwide
                  communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    {/* <WhatsAppWidget
			phoneNo="18768480010"
			position="right"
			widgetWidth="300px"
			widgetWidthMobile="260px"
			autoOpen={true}
			autoOpenTimer={5000}
			messageBox={true}
			messageBoxTxt=""
			iconSize="40"
			iconColor="white"
			iconBgColor="green"
			headerIcon="logow.png"
			headerIconColor="pink"
			headerTxtColor="black"
			headerBgColor="lightblue"
			headerTitle="CryptoJa"
			headerCaption="Online"
			bodyBgColor="#bbb"
			chatPersonName="Support"
			chatMessage={<>Hi there ???? <br /><br /> How can I help you?</>}
			footerBgColor="#999"
			btnBgColor="yellow"
			btnTxtColor="black"
			btnTxt="Start Chat"
		/> */}
    </LandingLayout>
  );
};
export default Index;

import { NextPage } from "next";
import Link from "next/dist/client/link";
import dynamic from "next/dynamic";
import {useState, useEffect} from "react";
import CoinGeckoApi from '@crypto-coffee/coingecko-api';
// import PriceChart from "../src/components/PriceChart";
import LandingLayout from "../src/layouts/landing/LandingLayout";
import { createTransaction } from "../src/services/TransactionService";
import PreLoader from "../src/components/PreLoader";
const PriceChart = dynamic(() => import("../src/components/PriceChart"), {
  ssr: false,
});

const Price: NextPage = () => {
  const [coin, setCoin] = useState<any>();
  const [eth, setEth] = useState<any>();
  const [lite, setLite] = useState<any>();
  const [btcAmount, setBtcAmount] = useState<any>(1);

  const [formData, setFormData] = useState({
    usd: "",
    btc: ""
  });


  // useEffect(() => {
  //   setFormData({ ...formData, btc: (parseFloat(formData.usd) / btcAmount).toString() });
  //   if (formData.usd === "") {
  //     setFormData({ ...formData, btc: "0"})
  //   }
  // }, [formData.usd])

  // const onChange = (e: any) =>
  // setFormData({ ...formData, [e.target.name]: e.target.value });

  const generateCoin = async() => {
    try {
      const coinGeckoApi = new CoinGeckoApi()
      const results = await coinGeckoApi.simple({
        ids: ['Bitcoin', 'Ethereum', 'Litecoin', 'Ripple', 'Cardano', 'EOS', 'Monero', 'Tezos'],
        vs_currencies: 'usd'
      })
      // console.log(results)
      const res = parseFloat(results.bitcoin.usd).toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      const et = parseFloat(results.ethereum.usd).toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      const li = parseFloat(results.litecoin.usd).toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      const rip = parseFloat(results.ripple.usd).toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")

      const car = parseFloat(results.cardano.usd).toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      const eo = parseFloat(results.eos.usd).toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      const mon = parseFloat(results.monero.usd).toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      const tez = parseFloat(results.tezos.usd).toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      setCoin({
        bitcoin: res,
        ethereum: et,
        litecoin: li,
        ripple: rip,
        cardano: car,
        eos: eo,
        montero: mon,
        tezos: tez
      })
      // setEth(et)
      // setLite(li)
      setBtcAmount(results.bitcoin.usd);
      // const resEth = parseFloat(results.ethereum.usd).toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      // setEth(resEth)
    } catch (err) {
      // do something with the error
      console.log(err);
    }
  }

  useEffect(() => {
    generateCoin();
  },[new Date()])

  return (
    <>
    {!coin ? 
    <PreLoader/>
    :
    <LandingLayout>
      <div className="price-grid section-padding bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="section-title">
                <h2>Latest price</h2>
              </div>
            </div>
          </div>
          {console.log("COINS: ", coin)}
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="price-widget bg-btc">
                <Link href="/price-details">
                  <a>
                    <div className="price-content">
                      <div className="icon-title">
                        <i className="cc BTC" />
                        <span>Bitcoin</span>
                      </div>
                      <h5>${coin?.bitcoin}</h5>
                    </div>
                    <PriceChart />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="price-widget bg-eth">
                <Link href="/price-details">
                  <a>
                    <div className="price-content">
                      <div className="icon-title">
                        <i className="cc ETH" />
                        <span>Ethereum</span>
                      </div>
                      <h5>${coin?.ethereum}</h5>
                    </div>
                    <PriceChart />
                    {/* <div id='chart2' /> */}
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="price-widget bg-usdt">
                <Link href="/price-details">
                  <a>
                    <div className="price-content">
                      <div className="icon-title">
                        <i className="cc USDT" />
                        <span>Tether</span>
                      </div>
                      <h5>$1.00</h5>
                    </div>
                    <PriceChart />
                    {/* <div id='chart3' /> */}
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="price-widget bg-xrp">
                <Link href="/price-details">
                  <a>
                    <div className="price-content">
                      <div className="icon-title">
                        <i className="cc XRP" />
                        <span>Ripple</span>
                      </div>
                      <h5>${coin?.ripple}</h5>
                    </div>
                    <PriceChart />
                    {/* <div id="chart4" /> */}
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="price-widget bg-ltc">
                <Link href="/price-details">
                  <a>
                    <div className="price-content">
                      <div className="icon-title">
                        <i className="cc LTC" />
                        <span>Litecoin</span>
                      </div>
                      <h5>${coin?.litecoin}</h5>
                    </div>
                    <PriceChart />
                    {/* <div id="chart5" /> */}
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="price-widget bg-ada">
                <Link href="/price-details">
                  <a>
                    <div className="price-content">
                      <div className="icon-title">
                        <i className="cc ADA" />
                        <span>Cardano</span>
                      </div>
                      <h5>${coin?.cardano}</h5>
                    </div>
                    <PriceChart />
                    {/* <div id="chart6" /> */}
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="price-widget bg-eos">
                <Link href="/price-details">
                  <a>
                    <div className="price-content">
                      <div className="icon-title">
                        <i className="cc EOS" />
                        <span>EOS</span>
                      </div>
                      <h5>${coin?.eos}</h5>
                    </div>
                    <PriceChart />
                    {/* <div id="chart7" /> */}
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="price-widget bg-xmr">
                <Link href="/price-details">
                  <a>
                    <div className="price-content">
                      <div className="icon-title">
                        <i className="cc XMR" />
                        <span>Monero</span>
                      </div>
                      <h5>${coin?.monero}</h5>
                    </div>
                    <PriceChart />
                    {/* <div id="chart8" /> */}
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="price-widget bg-xtz">
                <Link href="/price-details">
                  <a>
                    <div className="price-content">
                      <div className="icon-title">
                        <i className="cc XTZ" />
                        <span>Tezos</span>
                      </div>
                      <h5>${coin?.tezos}</h5>
                    </div>
                    <PriceChart />
                    {/* <div id="chart9" /> */}
                  </a>
                </Link>
              </div>
            </div>
            {/* <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div class="price-widget">
                  <Link href="/price-details"><a >
                      <div class="price-content">
                          <div class="icon-title">
                              <i class="cc XEM"></i>
                              <span>NEM</span>
                          </div>
                          <h5>$11,785.10</h5>
                      </div
                      <PriceChart />>
                      // <div id="chart10"></div>
                  </a> </Link>
              </div>
          </div>
          <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div class="price-widget">
                  <Link href="/price-details"><a >
                      <div class="price-content">
                          <div class="icon-title">
                              <i class="cc NEO"></i>
                              <span>NEO</span>
                          </div>
                          <h5>$11,785.10</h5>
                      </div
                      <PriceChart />>
                      // <div id="chart11"></div>
                  </a> </Link>
              </div>
          </div>
          <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div class="price-widget">
                  <Link href="/price-details"><a >
                      <div class="price-content">
                          <div class="icon-title">
                              <i class="cc DASH"></i>
                              <span>Dash</span>
                          </div>
                          <h5>$11,785.10</h5>
                      </div
                      <PriceChart />>
                      // <div id="chart12"></div>
                  </a> </Link>
              </div>
          </div>
          <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div class="price-widget">
                  <Link href="/price-details"><a >
                      <div class="price-content">
                          <div class="icon-title">
                              <i class="cc ETC"></i>
                              <span>Ethereum Classic</span>
                          </div>
                          <h5>$11,785.10</h5>
                      </div
                      <PriceChart />>
                      // <div id="chart13"></div>
                  </a> </Link>
              </div>
          </div>
          <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div class="price-widget">
                  <Link href="/price-details"><a >
                      <div class="price-content">
                          <div class="icon-title">
                              <i class="cc DGB"></i>
                              <span>DigiByte</span>
                          </div>
                          <h5>$11,785.10</h5>
                      </div
                      <PriceChart />>
                      // <div id="chart14"></div>
                  </a> </Link>
              </div>
          </div>
          <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div class="price-widget">
                  <Link href="/price-details"><a >
                      <div class="price-content">
                          <div class="icon-title">
                              <i class="cc DCR"></i>
                              <span>Decred</span>
                          </div>
                          <h5>$11,785.10</h5>
                      </div
                      <PriceChart />>
                      // <div id="chart15"></div>
                  </a> </Link>
              </div>
          </div> */}
          </div>
        </div>
      </div>
    </LandingLayout>
  }
    </>
  );
};

export default Price;

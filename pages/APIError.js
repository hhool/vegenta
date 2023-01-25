
import React from "react";

const help = () => {
  return (
    <>
    <br/><br/><br/><br/>
    <div id="coverlight" style="z-index:8"></div>
      <div class="middle" style="width: 100%; max-width: 700px; font-size:14px; margin-top: 35px; padding: 10px;">
          <div class="leftside" style="margin-left: -10px;">
              <img src="./vegenta.png" style="max-width:200px;margin-top:50px;" />
              <div style="font-size: 22px;">Visit <a href="https://vegenta.vercel.app/recentlyadded/1">Here</a>
              </div>
        </div>
        </div>
    </>
  );
};

export default help;

const APIError = ()  => {
    return (
      <>
      <br/><br/><br/><br/>
      <link rel="stylesheet" type="text/css" href="./assets/style.min.css" />
      <div id="coverlight" style="z-index:8"></div>
      <div class="middle" style="width: 100%; max-width: 700px; font-size:14px; margin-top: 35px; padding: 10px;">
          <div class="leftside" style="margin-left: -10px;">
              <img src="./vegenta.png" style="max-width:200px;margin-top:50px;" />
              <div style="font-size: 22px;">Visit <a href="https://vegenta.vercel.app/recentlyadded/1">Here</a>
              </div>
              <div style="font-size: 22px;">Goodbye forever...</div>
              <div style="color: #ff7b7b;">SOME COUNTRIES ONLY!!!</div>
              <div style="color: gray;">Our scrapper system was broken since three days ago, because the scraping website
                  stoped the API production in some contries.<br /></div>
              <div style="color: #ff7b7b;margin-bottom: 50px">! We will never back in some countries, Try our alternative
                  websites. !</div>
              <h3>Alternative sites</h3>
              <p>Other websites to stream/read anime :</p>
              <div>
                  <a href="https://cubicanime.vercel.app"><img src="https://cdn.animixplay.to/s/fav/9ani.png" />
                      CubicAnime</a>
                  <div class="info">Works like Vegenta but better !</div><br />
                  <a href="https://mangacomic"><img src="https://cdn.animixplay.to/s/fav/pahe.png" /> MangaComic</a>
                  <div class="info">Anime Comic reader online</div><br />
              </div>
              <h3>Credits</h3>
              <p>Any content in Vegenta was taken from another websites, therefore you should still be able to find the
                  same content in original sites where we scrape it from below :</p>
              <div style="color: gray;font-size:13px;">*Websites listed below are NOT affiliated with us, we just use
                  their public services or scrape their content.</div>
              <div style="margin-top: 5px;">
                  - <a href="https://gogoanime.news"><img src="https://cdn.animixplay.to/s/fav/gogo.png" /> Gogoanime</a>
                  <div class="info">GOGO Stream</div><br />
              </div>
              <h3>What next?</h3>
              <p>Thank you for all the support, but Vegenta is longer exist, forever. Just move on, we won't come back.
                  However, you can use our other websites:
                  <br /> - <a href="https://cubicanime.vercel.app"><img src="https://cdn.animixplay.to/s/fav/9ani.png" />
                      CubicAnime</a>
              </p>
          </div>
      </div>
  </>
    );
  };
  
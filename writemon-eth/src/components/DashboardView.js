import styles from "./DashboardView.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

function DashboardView() {
  return (
    <div className={styles["dashboard-page"]}>
      <section className={styles.upper}>

        <div className={styles["left-wrapper"]}>
          <h4 className={styles["upper-left-title"]}>The Mons</h4>
          <div className={styles["upper-left"]}>
            <Carousel showThumbs={false} infiniteLoop={true}>
              <div>
                <img className={styles.slide} src="/images/writemon1.png" />
                {/* <p className="legend">Writemon #1</p> */}
              </div>
              <div>
                <img className={styles.slide} src="/images/writemon2.png" />
                {/* <p className="legend">Writemon #2</p> */}
              </div>
              <div>
                <img className={styles.slide} src="/images/writemon3.png" />
                {/* <p className="legend">Writemon #3</p> */}
              </div>
              <div>
                <img className={styles.slide} src="/images/writemon4.png" />
                {/* <p className="legend">Writemon #4</p> */}
              </div>
              <div>
                <img className={styles.slide} src="/images/writemon5.png" />
                {/* <p className="legend">Writemon #5</p> */}
              </div>
            </Carousel>
          </div>
          <button className={styles.mons}>Explore Mons</button>
        </div>

        <div className={styles["upper-right"]}>
          <div className={styles.carousel}>
            <Carousel showThumbs={false} infiniteLoop={true}>
              <div>
                <img className={styles.slide1} src="/images/tileset1.png" />
                <p className="legend">Map Tileset1 </p>
              </div>
              <div>
                <img className={styles.slide1} src="/images/tileset2.png" />
                <p className="legend">Map Tileset 2</p>
              </div>
              <div>
                <img className={styles.slide1} src="/images/tileset3.png" />
                <p className="legend">Map Tileset 3</p>
              </div>
            </Carousel>
          </div>
          <div className={styles["button-holder"]}>
              <Link to="/write">
            <button className={styles["write"]}>Write Now !</button>
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.lower}>
          <button className={styles.saved}>Explore Saved</button>
          <h2 className={styles["map-title"]}>The Map</h2>
          <img className={styles.map} src="/images/MAP.png" alt="map"/>
      </section>
    </div>
  );
}

export default DashboardView;

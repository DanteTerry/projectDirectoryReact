/* eslint-disable react/no-unescaped-entities */
import "./Box.scss";

function Box() {
  return (
    <>
      <div className="projectDivs dark">
        <div className="tags">
          <div className="frontendTag pad">
            <div className="tagss">
              <img className="code" src="/src/assets/code.svg" alt="" />
              <span>Frontend Development</span>
            </div>
          </div>
          <div className="designTag pad">
            <div className="tagss">
              <img className="code" src="/src/assets/color2.svg" alt="" />
              <span>Design</span>
            </div>
          </div>
        </div>
        <h3 className="heading_third util_margin__medium">Project Directory</h3>
        <p className="paragraph util_margin__small">
          A temporary directory for all the websites that were designed and
          coded by me. The main purpose for most projects are to practice my
          development skills as I learn.
        </p>

        <a href="https://github.com/danteTerry/" className="cta">
          Let's connect
        </a>
      </div>
    </>
  );
}

export default Box;

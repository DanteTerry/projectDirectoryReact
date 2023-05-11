import "./Navbar.scss";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <a href="index.html">
          <img
            className="navImg"
            src="/src/assets/profilePic.jpg"
            alt="profile"
          />
        </a>

        <div className="title">
          <h5 className="titleText">
            Front-End Developer &nbsp; | &nbsp; Project Directory
          </h5>
        </div>

        <div className="icons">
          <a
            href="https://twitter.com/DanteTerry_"
            className="socialLinks"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/src/assets/twitter.svg"
              alt="twitter logo"
              className="socialIcons"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/arpit-yadav-6623b1172/"
            className="socialLinks"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/src/assets/linkedin.svg"
              alt="linkedIn"
              className="socialIcons"
            />
          </a>
          <a
            href="https://github.com/DanteTerry/"
            target="_blank"
            rel="noopener noreferrer"
            className="socialLinks"
          >
            <img
              src="/src/assets/github.svg"
              alt="github"
              className="socialIcons"
            />
          </a>
          <a
            href="mailto:ay6800618@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="socialLinks"
          >
            <img
              src="/src/assets/mail 2.png"
              alt="mail"
              className="socialIcons"
            />
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

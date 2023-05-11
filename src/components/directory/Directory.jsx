import Projects from "../Projects/Projects";
import Box from "../box/Box";
import "./Directory.scss";

function Directory() {
  return (
    <>
      <div className="projects">
        <Box />

        <Projects
          date={"12/25/1998"}
          title={"Mapty"}
          subTile={"maede with html css and jvascript"}
          desc={"hello world"}
        />
      </div>
    </>
  );
}

export default Directory;

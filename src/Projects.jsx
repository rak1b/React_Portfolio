import FeatureProject from "./Sub_component/project_components/FeatureProject";
// import FeatureProject from "./Sub_component/project_components/ProjectArchive"
import fashverse from "./img/fashVerse.png";
import medicinLib from "./img/medicinLib.png";
import royal from "./img/royal.png";
import SingleProject from "./SingleProject";
import { FeaturedPlayList } from "@material-ui/icons";
const data = [
  {
    name: "FashVerse",
    desc: "A website for fashion and fitness solutions.user can signup,login,create post,detect face shape from image,calorie calculator and many other tools",
    tags: ["Python", "Django rest framework", "react", "tailwind css", "redux", "ML algorithms"],
    img: fashverse,
    live: "",
    code: "",
  },
  {
    name: "Medicine Library",
    desc: "A medicine details finder and a forum website",
    tags: ["Python", "Django", "Bootstrap", "JS"],
    img: medicinLib,
    live: "http://medicinelibrary.rak1b.me/",
    code: "https://github.com/rak1b/MedicineLibrary",
  },
  {
    name: "The Royal Restaurant",
    desc: "Fully Responsive static restaurant website",
    tags: ["Html", "Css", "Bootstrap"],
    img: royal,
    live: "http://royalrestaurant.rak1b.me/",
    code: "https://github.com/rak1b/The-Royal-Restaurant",
  },
];

const Projects = () => {
  return (
    <>
      <section id="projects" className="full_screen">
        <div className="project_external_container">
          <div className="project_header">
            <h2>
              <span>03.</span>Things I have Made
            </h2>
          </div>
          {data.map((curr) => {
            return (
              <div className="project_container">
                <SingleProject name={curr.name} desc={curr.desc} tagList={curr.tags} img={curr.img} live={curr.live} code={curr.code} />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Projects;

const SingleProject = ({ name, desc, tagList, img, live, code }) => {
  console.log("taglist", tagList);
  return (
    <>
      <div className="project_img">
        {/* <img src={`${process.env.PUBLIC_URL}/public_img/service_img/redesign.svg`} alt="Not Found" /> */}
        <img className="project_image_main" src={img} alt={name} />
      </div>
      <div className="project_desc">
        <div className="project_name">{name}</div>

        <div className="project_mini_desc">{desc}</div>
        <div className="project_tags">
          {tagList &&
            tagList.map((tag) => {
              return <li>{tag}</li>;
            })}
      
        </div>
        <div className="code_btn_container">
          <button className="code_btn" onClick={() => window.open(live, "_blank")}>
            Live
          </button>
          <button className="code_btn margin_left" onClick={() => window.open(code, "_blank")}>
            Code
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleProject;

const resumedisplay = ({
  formData,
  summaryData,
  skillsData,
  workExperiences,
  educationData,
  handleEditExperience,
  handleEditEducation,
  handleExperienceDelete,
  handleEducationDelete,
}) => {
  return (
    <div className="main-container">
      <>
        <div className="user-name">
          <span className="firstname"> {formData.firstName} </span>
          <span>{formData.lastName}</span>
        </div>

        <div className="personal-details">
          <span>{formData.email}</span> <span>{formData.contact}</span>
          <span>{formData.address}</span>
        </div>
      </>

      <div>
        <h3 className="professional-heading">PROFESSIONAL SUMMARY</h3>
        <p className="summary-para">{summaryData.summary}</p>
      </div>

      <div>
        <h3 className="skills-heading">SKILLS</h3>
        <ul>
          {skillsData.map((skill) => (
            <li className="skillsList" key={skill.id}>
              {skill.name}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="work-heading">WORK HISTORY</h3>

        {workExperiences.map((list) => (
          <div>
            <div className="company-info">
              <span key={list.id}>{list.company}</span>
              <span>
                {list.startDate} | {list.endDate}
              </span>{" "}
            </div>
            <div>
              <h3 className="workName" key={list.id}>
                {list.jobTitle}{" "}
                <span>
                  {" "}
                  <span>
                    <button
                      className="editButton no-print"
                      onClick={() => handleEditExperience(list.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="deleteButton no-print"
                      onClick={() => handleExperienceDelete(list.id)}
                    >
                      Delete
                    </button>
                  </span>{" "}
                </span>
              </h3>
            </div>

            <ul className="workList">
              <li key={list.id}>{list.description}</li>
            </ul>
          </div>
        ))}
      </div>

      <div>
        <h3 className="education-heading">EDUCATION & ACHIEVEMENTS</h3>

        {educationData.map((edu) => (
          <>
            <div className="company-info">
              <span key={edu.id}>
                {edu.school} | <span>{edu.schoolLocation}</span>
              </span>
              <span>
                {edu.startDate} | {edu.endDate}
              </span>{" "}
            </div>
            <h3 className="workName" key={edu.id}>
              {edu.degree}{" "}
              <span>
                {" "}
                <button
                  className="editButton no-print"
                  onClick={() => handleEditEducation(edu.id)}
                >
                  Edit
                </button>
                <button
                  className="deleteButton no-print"
                  onClick={() => handleEducationDelete(edu.id)}
                >
                  Delete
                </button>
              </span>
            </h3>
            <ul className="workList">
              <li key={edu.id}>{edu.achievements}</li>
            </ul>
          </>
        ))}
      </div>
    </div>
  );
};

export default resumedisplay;

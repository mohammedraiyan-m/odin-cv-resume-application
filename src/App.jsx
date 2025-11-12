import React, { useState } from "react";
import Header from "./components/header";
import Summary from "./components/summary";
import Experience from "./components/experience";
import Education from "./components/education";
import Skills from "./components/skills";
import ResumePrieview from "./components/resumePrieview";
import "./App.css";

const initialPersonalData = {
  firstName: "MOHAMMED",
  lastName: "RAIYAN",
  email: "mohammedraiyan@gmail.com",
  contact: "12345678901",
  address: "30.p,tamilnadu",
};

const initialSummary = {
  summary:
    "Recent Computer Science graduate proficient in the ReactJS framework and modern web technologies. Skilled in developing responsive, user-friendly websites and applications. Demonstrates strong problem-solving abilities and effective communication skills. Eager to apply technical knowledge and innovative solutions in a dynamic web development role.",
};

const initialSkills = [
  { id: 0, name: "HTML" },
  { id: 1, name: "CSS" },
  { id: 2, name: "JAVASCRIPT" },
  { id: 3, name: "REACTJS" },
  { id: 4, name: "NODEJS" },
];

const initialExperience = [
  {
    id: 1,
    jobTitle: "UI / UX Designeter",
    company: "I Life technology",
    startDate: "2024-08-05",
    endDate: "2025-02-31",
    description: [
      "Designed and prototyped all user flows, wireframes, and high-fidelity mockups using Figma.",
      "Collaborated with a cross-functional team of developers and product managers to ensure a successful and timely launch.",
      "Contributed to a 25% increase in customer conversion rates post-launch.",
      "Skilled in Figma, Sketch, and Adobe XD.",
    ],
  },
  {
    id: 2,
    jobTitle: "Web developer",
    company: "Tata Consultancy Service",
    startDate: "2025-03-25",
    endDate: "2025-08-31",
    description: [
      "Developed and maintained web applications using React and Node.js.",
      "Integrated RESTful APIs to add new features.",
      "Collaborated with designers to implement user-centric designs.",
      "Conducted cross-browser testing and debugging.",
      "Optimized media assets and improved site performance.",
    ],
  },
];

const initialEducation = [
  {
    id: 1,
    school: "Jamal Mohamed College",
    schoolLocation: "Trichy",
    startDate: "2021-08-06",
    endDate: "2024-05-04",
    degree: "B.Sc. in Computer Science",
    achievements: [
      "Graduated Summa Cum Laude",
      "Dean's List every semester",
      "Completed a senior project on machine learning algorithms",
    ],
  },
  {
    id: 2,
    school: "EM Govt Hr, Sec, School",
    schoolLocation: "Tenkasi",
    startDate: "2019-05-10",
    endDate: "2021-07-25",
    degree: "Computer Science",
    achievements: [
      " highlight academic projects with quantifiable results, such as developing a facial recognition algorithm with 98% accuracy or improving data processing efficiency by 40%.",
    ],
  },
];

function App() {
  //personal info
  const [resumeData, setResumeData] = useState(initialPersonalData);
  const [summaryData, setSummaryData] = useState(initialSummary);
  const [workExperiences, setWorkExperiences] = useState(initialExperience);
  const [educations, setEducations] = useState(initialEducation);

  const handleUpdateWorkExperiences = (updatedExperiences) => {
    setWorkExperiences(updatedExperiences);
  };

  const handleUpdateEducations = (updatedEducations) => {
    setEducations(updatedEducations);
  };

  //update the initial value
  const updateResumeData = (e) => {
    const { name, value } = e.target;
    setResumeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setSummaryData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // submit to change the value
  const handleSubmit = (e) => {
    e.preventDefault();
    const submitterName = e.nativeEvent.submitter.name;
    if (submitterName === "save") {
      console.log("Saving resume:", resumeData);
    }
    if (submitterName === "save") {
      console.log("Saving resume:", summaryData);
    }
    console.log("Sumitted Educations:", educations);
  };

  // Skills field Edit, Add and Delete
  const [skills, setSkills] = useState(initialSkills);
  const [skillNameInput, setSkillNameInput] = useState("");
  const [editingId, setEditingId] = useState(null);

  const handleSave = (e) => {
    e.preventDefault();
    if (!skillNameInput.trim()) return;

    const newSkillName = skillNameInput.trim();

    if (editingId) {
      // EDIT Logic
      setSkills((prevSkills) =>
        prevSkills.map((skill) =>
          skill.id === editingId ? { ...skill, name: newSkillName } : skill
        )
      );
      setEditingId(null);
    } else {
      // ADD Logic
      const newSkill = { id: Date.now(), name: newSkillName };
      setSkills((prevSkills) => [...prevSkills, newSkill]);
    }
    setSkillNameInput("");
  };

  const startEdit = (skill) => {
    setEditingId(skill.id);
    setSkillNameInput(skill.name);
  };

  const handleDelete = (id) => {
    setSkills((prevSkills) => prevSkills.filter((skill) => skill.id !== id));
  };

  const handleCancel = () => {
    setEditingId(null);
    setSkillNameInput("");
  };

  const isEditing = editingId !== null;
  const formTitle = isEditing ? "✏️ Edit Skill" : "➕ Add New Skill";
  const submitButtonText = isEditing ? "Save Changes" : "Add Skill";
  // Edit section end

  // Work Experience field Add, Update, Edit and Delete
  const [editingExperienceId, setEditingExperienceId] = useState(null);
  const [newExperience, setNewExperience] = useState({
    jobTitle: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  // Eduacton filed
  const [editingEducationId, setEditingEducationId] = useState(null);
  const [newEducation, setNewEducation] = useState({
    school: "",
    schoolLocation: "",
    startDate: "",
    endDate: "",
    degree: "",
    achievements: "",
  });

  // Experience Edit
  const handleEditExperience = (experienceId) => {
    setEditingExperienceId(experienceId);
    const experienceToEdit = workExperiences.find(
      (exp) => exp.id === experienceId
    );
    setNewExperience(experienceToEdit);
  };

  // Education Edit
  const handleEditEducation = (educationId) => {
    setEditingEducationId(educationId);
    const educationToEdit = educations.find((edu) => edu.id === educationId);
    setNewEducation(educationToEdit);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Experience handle change
    setNewExperience({ ...newExperience, [name]: value });

    // Education handle change
    setNewEducation({ ...newEducation, [name]: value });
  };

  // Experience handle Form
  const handleExperienceSubmit = (e) => {
    e.preventDefault();
    if (editingExperienceId) {
      // Update existing experience
      const updatedExperiences = workExperiences.map((exp) =>
        exp.id === editingExperienceId
          ? { ...newExperience, id: editingExperienceId }
          : exp
      );
      handleUpdateWorkExperiences(updatedExperiences);
      setEditingExperienceId(null);
    } else {
      // Add new experience
      const newId =
        workExperiences.length > 0
          ? Math.max(...workExperiences.map((exp) => exp.id)) + 1
          : 1;
      handleUpdateWorkExperiences([
        ...workExperiences,
        { ...newExperience, id: newId },
      ]);
    }
    setNewExperience({
      jobTitle: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
    }); // Clear form
  };

  // Handle Education Form
  const handleEducationSubmit = (e) => {
    e.preventDefault();
    if (editingEducationId) {
      // Update existing education
      const updatedEducations = educations.map((edu) =>
        edu.id === editingEducationId
          ? { ...newEducation, id: editingEducationId }
          : edu
      );
      handleUpdateEducations(updatedEducations);
      setEditingEducationId(null);
    } else {
      //Add new education
      const newEduId =
        educations.length > 0
          ? Math.max(...educations.map((edu) => edu.id)) + 1
          : 1;
      handleUpdateEducations([
        ...educations,
        { ...newEducation, id: newEduId },
      ]);
    }
    setNewEducation({
      school: "",
      schoolLocation: "",
      startDate: "",
      endDate: "",
      degree: "",
      achievements: "",
    }); //education clear form
  };

  // Experience Delete
  const handleExperienceDelete = (experienceId) => {
    const updatedExperiences = workExperiences.filter(
      (exp) => exp.id !== experienceId
    );
    handleUpdateWorkExperiences(updatedExperiences);
  };
  // Education Delete
  const handleEducationDelete = (educationId) => {
    const updatedEducations = educations.filter(
      (edu) => edu.id !== educationId
    );
    handleUpdateEducations(updatedEducations);
  };

  // Droup down arrow in form field start
  const [visibleSections, setVisibleSections] = useState({
    header: false,
    summary: false,
    experience: false,
    education: false,
    skills: false,
  });
  const toggleSection = (section) => {
    setVisibleSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Print the Page
  const handlePrint = () => {
    const printContents = document.getElementById("PrintableDiv").innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };

  return (
    <div className="app-container">
      <div className="input-forms">
        <div className="heading-info">
          <div>
            <h2 className="headName">Personal Information</h2>
          </div>
          <div className="tropDown-btn">
            <button onClick={() => toggleSection("header")}>
              {visibleSections.header ? (
                <span>&#129033;</span>
              ) : (
                <span>&#129035;</span>
              )}
            </button>
          </div>
        </div>
        {visibleSections.header && (
          <Header
            data={resumeData}
            onChange={updateResumeData}
            handleSubmit={handleSubmit}
          />
        )}

        <div className="heading-info">
          <div>
            <h2 className="headName">Professional Summary</h2>
          </div>
          <div className="tropDown-btn">
            <button onClick={() => toggleSection("summary")}>
              {visibleSections.summary ? (
                <span>&#129033;</span>
              ) : (
                <span>&#129035;</span>
              )}
            </button>
          </div>
        </div>
        {visibleSections.summary && (
          <Summary
            data={summaryData}
            onChange={updateResumeData}
            handleSubmit={handleSubmit}
          />
        )}

        <div className="heading-info">
          <div>
            <h2 className="headName">Skills</h2>
          </div>
          <div className="tropDown-btn">
            <button onClick={() => toggleSection("skills")}>
              {visibleSections.skills ? (
                <span>&#129033;</span>
              ) : (
                <span>&#129035;</span>
              )}
            </button>
          </div>
        </div>
        {visibleSections.skills && (
          <Skills
            isEditing={isEditing}
            formTitle={formTitle}
            submitButtonText={submitButtonText}
            handleSave={handleSave}
            skillNameInput={skillNameInput}
            setSkillNameInput={setSkillNameInput}
            handleCancel={handleCancel}
            skills={skills}
            startEdit={startEdit}
            handleDelete={handleDelete}
            editingId={editingId}
          />
        )}

        <div className="heading-info">
          <div>
            <h2 className="headName">Work Experience</h2>
          </div>
          <div className="tropDown-btn">
            <button onClick={() => toggleSection("experience")}>
              {visibleSections.experience ? (
                <span>&#129033;</span>
              ) : (
                <span>&#129035;</span>
              )}
            </button>
          </div>
        </div>

        {visibleSections.experience && (
          <Experience
            editingExperienceId={editingExperienceId}
            handleSubmit={handleExperienceSubmit}
            newExperience={newExperience}
            handleChange={handleChange}
            setEditingExperienceId={setEditingExperienceId}
            workExperiences={workExperiences}
          />
        )}

        <div className="heading-info">
          <div>
            <h2 className="headName">Education History</h2>
          </div>
          <div className="tropDown-btn">
            <button onClick={() => toggleSection("education")}>
              {visibleSections.education ? (
                <span>&#129033;</span>
              ) : (
                <span>&#129035;</span>
              )}
            </button>
          </div>
        </div>
        {visibleSections.education && (
          <Education
            editingEducationId={editingEducationId}
            handleSubmit={handleEducationSubmit}
            newEducation={newEducation}
            handleChange={handleChange}
            setEditingEducaionId={setEditingEducationId}
            workEducation={educations}
          />
        )}
      </div>

      <div
        id="PrintableDiv"
        style={{ WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" }}
        className="resume-preview"
      >
        <ResumePrieview
          formData={resumeData}
          summaryData={summaryData}
          skillsData={skills}
          workExperiences={workExperiences}
          handleEditExperience={handleEditExperience}
          handleEditEducation={handleEditEducation}
          handleExperienceDelete={handleExperienceDelete}
          handleEducationDelete={handleEducationDelete}
          educationData={educations}
        />
      </div>

      <div>
        <button onClick={handlePrint}>Print</button>
      </div>
    </div>
  );
}

export default App;

const Experience = ({
  workExperiences,
  editingExperienceId,
  handleSubmit,
  newExperience,
  handleChange,
  setEditingExperienceId,
}) => {
  return (
    <div>
      {workExperiences.map((experience) => (
        <div key={experience.id}>
          {editingExperienceId === experience.id ? (
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="jobTitle">Job Title</label>
              </div>
              <input
                type="text"
                name="jobTitle"
                value={newExperience.jobTitle}
                onChange={handleChange}
                placeholder="Job Title"
                required
              />
              <div>
                <label htmlFor="company">Company Name</label>
              </div>
              <input
                type="text"
                name="company"
                value={newExperience.company}
                onChange={handleChange}
                placeholder="Company"
                required
              />
              <div>
                <label htmlFor="startDate">Start Date</label>
              </div>
              <input
                type="date"
                name="startDate"
                value={newExperience.startDate}
                onChange={handleChange}
                required
              />
              <div>
                <label htmlFor="endDate">End Date</label>
              </div>
              <input
                type="date"
                name="endDate"
                value={newExperience.endDate}
                onChange={handleChange}
              />
              <div>
                <label htmlFor="description">Description</label>
              </div>
              <textarea
                name="description"
                value={newExperience.description}
                onChange={handleChange}
                placeholder="Description"
              ></textarea>
              <div className="heading-button">
                <button className="submitBtn" type="submit">
                  Save
                </button>
                <button
                  className="submitBtn"
                  type="button"
                  onClick={() => setEditingExperienceId(null)}
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            // Display mode
            <div></div>
          )}
        </div>
      ))}

      {/* Add New Experience Form */}
      {!editingExperienceId && ( // Only show "Add New" form if not currently editing
        <div>
          <h3>Add New Work Experience</h3>
          <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="jobTitle">Job Title</label>
              </div>
            <input
              type="text"
              name="jobTitle"
              value={newExperience.jobTitle}
              onChange={handleChange}
              placeholder="Job Title"
              required
            />
              <div>
                <label htmlFor="company">Company Name</label>
              </div>
            <input
              type="text"
              name="company"
              value={newExperience.company}
              onChange={handleChange}
              placeholder="Company"
              required
            />
             <div>
                <label htmlFor="startDate">Start Date</label>
              </div>
            <input
              type="date"
              name="startDate"
              value={newExperience.startDate}
              onChange={handleChange}
              required
            />
             <div>
                <label htmlFor="endDate">End Date</label>
              </div>
            <input
              type="date"
              name="endDate"
              value={newExperience.endDate}
              onChange={handleChange}
            />
            <div>
                <label htmlFor="description">Description</label>
              </div>
            <textarea
              name="description"
              value={newExperience.description}
              onChange={handleChange}
              placeholder="Description"
            />
            <button className="submitBtn" type="submit">
              Add Experience
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Experience;

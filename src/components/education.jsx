const Education = ({
  editingEducationId,
  handleSubmit,
  newEducation,
  handleChange,
  setEditingEducaionId,
  workEducation,
}) => {
  return (
    <div>
      {workEducation.map((edu) => (
        <div key={edu.id}>
          {editingEducationId == edu.id ? (
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="school">School</label>
              </div>
              <input
                type="text"
                name="school"
                placeholder="Enter the School Name"
                value={newEducation.school}
                onChange={handleChange}
              />
              <div>
                <label htmlFor="schoolLocation">School Location</label>
              </div>
              <input
                type="text"
                name="schoolLocation"
                placeholder="Enter the Location"
                value={newEducation.schoolLocation}
                onChange={handleChange}
              />
              <div>
                <label htmlFor="startDate">Start Date</label>
              </div>
              <input
                type="date"
                name="startDate"
                value={newEducation.startDate}
                onChange={handleChange}
                required
              />
              <div>
                <label htmlFor="endData">End Date</label>
              </div>
              <input
                type="date"
                name="endDate"
                value={newEducation.endDate}
                onChange={handleChange}
                required
              />
              <div>
                <label htmlFor="degree">Degree</label>
              </div>
              <input
                type="text"
                name="degree"
                placeholder="Enter the Education"
                value={newEducation.degree}
                onChange={handleChange}
              />

              <div>
                <label htmlFor="achievements">Achievements</label>
              </div>
              <textarea
                type="text"
                name="achievements"
                placeholder="I am ..."
                value={newEducation.achievements}
                onChange={handleChange}
              />

              <div className="heading-button">
                <button className="submitBtn" type="submit">
                  Save
                </button>

                <button
                  className="submitBtn"
                  type="button"
                  onClick={() => setEditingEducaionId(null)}
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div></div>
          )}
        </div>
      ))}
      {!editingEducationId && (
        <div>
          <h3>Add New Education Details</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="school">School</label>
            </div>
            <input
              type="text"
              name="school"
              placeholder="Enter the School Name"
              value={newEducation.school}
              onChange={handleChange}
            />
            <div>
              <label htmlFor="schoolLocation">School Location</label>
            </div>
            <input
              type="text"
              name="schoolLocation"
              placeholder="Enter the Location"
              value={newEducation.schoolLocation}
              onChange={handleChange}
            />
            <div>
              <label htmlFor="startDate">Start Date</label>
            </div>
            <input
              type="date"
              name="startDate"
              value={newEducation.startDate}
              onChange={handleChange}
              required
            />
            <div>
              <label htmlFor="endData">End Date</label>
            </div>
            <input
              type="date"
              name="Date"
              value={newEducation.endDate}
              onChange={handleChange}
              required
            />
            <div>
              <label htmlFor="degree">Degree</label>
            </div>
            <input
              type="text"
              name="degree"
              placeholder="Enter the Education"
              value={newEducation.degree}
              onChange={handleChange}
            />

            <div>
              <label htmlFor="achievements">Achievements</label>
            </div>
            <textarea
              type="text"
              name="achievements"
              placeholder="I am ..."
              value={newEducation.achievements}
              onChange={handleChange}
            />
            <button className="submitBtn" type="submit">
              Add Education
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Education;

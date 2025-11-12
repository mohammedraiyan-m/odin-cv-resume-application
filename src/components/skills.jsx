const Skills = ({
  isEditing,
  formTitle,
  submitButtonText,
  handleSave,
  skillNameInput,
  setSkillNameInput,
  handleCancel,
  skills,
  startEdit,
  handleDelete,
  editingId,
}) => {
  return (
    <div>
      <h2>Resume Skills Field</h2>

      <form className="skillsForm" onSubmit={handleSave}>
        <h4>{formTitle}</h4>
        <input
          type="text"
          value={skillNameInput}
          onChange={(e) => setSkillNameInput(e.target.value)}
          placeholder="Enter skill name (e.g., Python)"
          required
        />
        <button type="submit">{submitButtonText}</button>

        {isEditing && (
          <button type="button" onClick={handleCancel}>
            ❌ Cancel
          </button>
        )}
      </form>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {skills.map((skill) => (
          <li>
            <strong style={{ opacity: editingId === skill.id ? 0.5 : 1 }}>
              {skill.name}
            </strong>

            <div style={{ display: "flex", gap: "8px" }}>
              <button onClick={() => startEdit(skill)} disabled={isEditing}>
                ✏️ Edit
              </button>
              <button
                onClick={() => handleDelete(skill.id)}
                disabled={isEditing}
              >
                🗑️ Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;

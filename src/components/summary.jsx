const Summary = ({ data, onChange, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="summary">Summary</label>
        </div>
        <textarea
          name="summary"
          id="summary"
          value={data.summary}
          onChange={onChange}
          placeholder="I am a..."
        />
        <div>
          <button className="submitBtn" type="submit" name="save">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Summary;

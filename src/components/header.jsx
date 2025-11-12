const Header = ({ data, onChange, handleSubmit }) => {
  return (
    <div className="personal-info">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
        </div>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={data.firstName}
          onChange={onChange}
        />

        <div>
          <label htmlFor="lastName">Last Name</label>
        </div>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={data.lastName}
          onChange={onChange}
        />

        <div>
          <label htmlFor="email">Email</label>
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={onChange}
        />

        <div>
          <label htmlFor="contactNumber">Contact Number</label>
        </div>
        <input
          type="tel"
          name="contact"
          placeholder="Contact Number"
          value={data.contact}
          onChange={onChange}
        />

        <div>
          <label htmlFor="Address">Address</label>
        </div>
        <input
          type="address"
          name="address"
          placeholder="Address"
          value={data.address}
          onChange={onChange}
        />
        <div className="heading-button">
          <button className="submitBtn" type="submit" name="save">
            Save Resume
          </button>
        </div>
      </form>
    </div>
  );
};

export default Header;

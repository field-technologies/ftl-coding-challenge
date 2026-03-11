
export default function Home() {
  return (
    <div className="page">
      <main>
        <div className="header">
          <h1>Welcome to the FTL Coding Challenge!</h1>
          <p>
            To start, please add an address field to the form below,
            and then have the form send the user to a new page that 
            displays the information they entered.
          </p>
        </div>
        <form action="" className="form">
          <div className="form-row">
            <label htmlFor="first_name">First Name</label>
            <input type="text" name="first_name" id="first_name" />
          </div>
          <div className="form-row">
            <label htmlFor="last_name">Last Name</label>
            <input type="text" name="last_name" id="last_name" />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="form-row">
            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone" id="phone" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
}

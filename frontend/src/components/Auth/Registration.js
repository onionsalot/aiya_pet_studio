import { useRef, useState } from "react";
import { useAuth } from "../../hooks/use-auth";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

const Registration = () => {
  const formRef = useRef();
  const { signupUserMutation } = useAuth();
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    if (data.email === data.email_confirm) {
      const userInfo = {
        user: {
          email: data.email,
          password: data.password,
          password_confirmation: data.password_confirmation,
          first_name: data.first_name,
          middle_name: data.middle_name,
          last_name: data.last_name,
          gender: data.gender,
          address1: data.address1,
          address2: data.address2,
          country: data.country,
          state: data.state,
          city: data.city,
          zipcode: data.zipcode,
          phone_number: data.phone_number,
        },
      };
      signupUserMutation.mutate(userInfo);
      e.target.reset();
    } else {
      console.log("Emails do not match");
    }
  };

  return (
    <div>
      <h1 className="text-center text-2xl mb-5"> Register an Account</h1>
      <div className="flex justify-center px-5">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full max-w-2xl"
        >
          <div className="form-grid">
            <div className="w-2/3 px-3">
              <label className="form-label">
                First Name
                <input
                  className="form-input"
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  required
                />
              </label>
            </div>
            <div className="w-1/3 px-3">
              <label className="form-label">
                Middle Name
                <input
                  className="form-input"
                  type="text"
                  name="middle_name"
                  placeholder="Middle Name"
                />
              </label>
            </div>
          </div>
          <div className="form-grid">
            <div className="w-2/3 px-3">
              <label className="form-label">
                Last Name
                <input
                  className="form-input"
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  required
                />
              </label>
            </div>
            <div className="w-1/3 px-3">
              <label className="form-label">
                Gender
                <select className="form-input " name="gender" required>
                  <option value="" disabled selected>
                    Choose...
                  </option>
                  <option value="woman">Woman</option>
                  <option value="man">Man</option>
                  <option value="transgender">Transgender</option>
                  <option value="non_binary">Non Binary</option>
                  <option value="unknown">Unknown</option>
                </select>
              </label>
            </div>
          </div>

          <label className="form-label">
            Address Line 1
            <input
              className="form-input"
              type="text"
              name="address1"
              placeholder="Street Number and Name"
              required
            />
          </label>
          <label className="form-label">
            Address Line 2
            <input
              className="form-input"
              type="text"
              name="address2"
              placeholder="Apt/Suite/Unit"
            />
          </label>

          <div className="form-grid">
            <div className="w-1/2 px-3">
              <label className="form-label">
                Country
                <CountryDropdown
                  className="form-input"
                  name="country"
                  value={country}
                  onChange={(val) => setCountry(val)}
                  required
                />
              </label>
            </div>
            <div className="w-1/2 px-3">
              <label className="form-label">
                State/Province
                <RegionDropdown
                  className="form-input"
                  name="state"
                  country={country}
                  value={region}
                  onChange={(val) => setRegion(val)}
                  required
                />
              </label>
            </div>
          </div>

          <div className="form-grid">
            <div className="w-1/2 px-3">
              <label className="form-label">
                City{" "}
                <input
                  className="form-input"
                  type="text"
                  name="city"
                  placeholder="City"
                  required
                />
              </label>
            </div>
            <div className="w-1/2 px-3">
              <label className="form-label">
                Zip Code
                <input
                  className="form-input"
                  type="text"
                  name="zipcode"
                  placeholder="ZIP Code"
                  required
                />
              </label>
            </div>
          </div>
          <label className="form-label">
            Phone Number (optional)
            <input
              className="form-input"
              type="text"
              name="phone_number"
              placeholder="Phone Number"
            />
          </label>

          <label className="form-label">
            Email
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </label>
          <label className="form-label">
            Confirm Email
            <input
              className="form-input"
              type="email"
              name="email_confirm"
              placeholder="Confirm Email"
              required
            />
          </label>
          <label className="form-label">
            Password
            <input
              className="form-input"
              type="password"
              name="password"
              placeholder="Password must be at least 6 characters long"
              minlength="6"
              required
            />
          </label>
          <label className="form-label">
            Confirm Password
            <input
              className="form-input"
              type="password"
              name="password_confirmation"
              placeholder="Confirm Password"
              minlength="6"
              required
            />
          </label>
          <input className="form-submit mt-3" type="submit" value="Submit" />
        </form>
        {signupUserMutation.isSuccess
          ? "Successfully Signed up! Please check and confirm your email to log in."
          : ""}
        {signupUserMutation.isError
          ? signupUserMutation.error.response?.data?.message
          : ""}
      </div>
    </div>
  );
};
export default Registration;

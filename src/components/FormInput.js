import React, { useState } from "react";

// - React Forms: https://reactjs.org/docs/forms.html

function FormInput() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [accountType, setAccountType] = useState("Free");
  const [newsletter, setNewsletter] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
  }

  const formData = {
    username,
    password,
    avatar,
    accountType,
    newsletter,
  };
  console.log(formData);

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create an Account</h1>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <label htmlFor="avatar">Avatar Image</label>
      <input
        type="text"
        id="avatar"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
      />
      <img
        src="https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png"
        alt="Avatar preview"
      />

      <label htmlFor="type">Account Type</label>
      <select
        id="type"
        value={accountType}
        onChange={(e) => setAccountType(e.target.value)}
      >
        <option value="free">Free</option>
        <option value="normal">Normal</option>
        <option value="pro">Pro</option>
      </select>

      <label>
        Get Our Newsletter!
        <input
          type="checkbox"
          id="newsletter"
          value={newsletter}
          onChange={(e) => setNewsletter(e.target.checked)}
        />
      </label>

      <input type="submit" value="Sign Up" />
    </form>
  );
}

export default FormInput;


//alternative approach to handling form input
function SignUp() {
    const [formData, setFormData] = useState({
      username: "",
      password: "",
      avatar: "",
      accountType: "pro",
      newsletter: true
    })
  
    function handleSubmit(event) {
      event.preventDefault();
      console.log(formData);
    }
    
    function handleChange(event) {
      const key = event.target.id
      const value = event.target.type === "checkbox" ? event.target.checked : event.target.value
      
      setFormData({ 
        ...formData, 
        [key]: value
      })
    }
    
    console.log(formData)
  
    return (
      <form onSubmit={handleSubmit}>
        <h1>Create an Account</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={formData.username}
          onChange={handleChange}
        />
  
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
        />
  
        <label htmlFor="avatar">Avatar Image</label>
        <input
          type="text"
          id="avatar"
          value={formData.avatar}
          onChange={handleChange}
        />
        <img
          src={formData.avatar || "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png"}
          alt="Avatar preview"
        />
  
        <label htmlFor="type">Account Type</label>
        <select
          id="accountType"
          value={formData.accountType}
          onChange={handleChange}
        >
          <option value="free">Free</option>
          <option value="normal">Normal</option>
          <option value="pro">Pro</option>
        </select>
  
        <label>
          Get Our Newsletter!
          <input
            type="checkbox"
            id="newsletter"
            checked={formData.newsletter}
            onChange={handleChange}
          />
        </label>
  
        <input type="submit" value="Sign Up" />
      </form>
    );
  }
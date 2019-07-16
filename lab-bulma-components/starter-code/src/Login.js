import React from "react";
import FormField from "./FormField";
import CoolButton from "./CoolButton";

const Login = () => {
  return (
    <div>
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <FormField label="Password" type="password" placeholder="*********" />
      <CoolButton isSmall isPrimary>
        Submit
      </CoolButton>
    </div>
  );
};

export default Login;

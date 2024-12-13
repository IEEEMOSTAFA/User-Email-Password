import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
const Register = () => {
  const [registerError, setRegisterError] = useState(''); 
  const [success , setSuccess] = useState('');
  const [showPassword,setShowPassword] = useState(false);


  const handleRegister = (e) => {
    e.preventDefault(); // Prevent default form submission
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password); // Log the email and password

    if(password.length < 6 ){
      setRegisterError('Password Should be at least 6 Character');
    }
    else if(!/[A-Z]/.test(password)){
      setRegisterError('Your Password Sould have at least one upper case');
      return;

    }

    // Reset Error:
    setRegisterError('');
    createUserWithEmailAndPassword(auth,email,password)
    // reset error
    // setRegisterError('');
    .then(result =>{
      console.log(result.user);
      setSuccess('User Created Successfully')
     
    })
    .catch(error =>{
      console.error(error);
      setRegisterError(error.message);
    })
    
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Please Register</h2>
        <form action="" className="space-y-4" onSubmit={handleRegister}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-4 py-2 border rounded-md bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Email Address"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type={showPassword ? "text": "password"}
              name="password"
              id="password"
              required
              className="w-full px-4 py-2 border rounded-md bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Password"
            />
            <span onClick={() =>setShowPassword(!showPassword)}> 
              {
                showPassword ? <FaEye /> : <IoMdEyeOff />
              }
            </span>
          </div>
          <div>
            <input
              type="submit"
              value="Register"
              className="w-full px-4 py-2 text-white bg-purple-500 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </form>
        {
          registerError && <p className="text-red-700">{registerError}</p>
        }
        {
          success && <p className="text-green-500">{success}</p>
        }
      </div>
    </div>
  );
};

export default Register;

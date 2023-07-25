import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from "sweetalert2";


const SignUp = () => {
  const { createUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation()
  const from = location.state?.from?.pathname || "/"

  // handle signUp
  const handleSignUp = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const college = form.college.value;
    const address = form.address.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    createUser(email, password)
      .then(result => {
        const regUser = result.user;
        console.log(regUser)
        updateUserProfile(name, photo)
          .then(() => {
            const savedUser = { name, college, address, email, photo };
            fetch(`${import.meta.env.VITE_url}users` , {
              method: "POST",
              headers: {
                "content-type": "application/json"
              },
              body: JSON.stringify(savedUser)
            })
              .then(res => res.json())
              .then(data => {
                if (data.insertedId) {
                  Swal.fire({
                    title: 'Success!',
                    text: 'You have successfully registered',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
                  navigate("/login")
                }
              })
          })
          .catch(error => {
            console.log(error.message)
          })
      })
      .catch(error => {
        console.log(error.message)
      })

    form.reset()
  }
  // handle google signIn
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        console.log(result.user)
        navigate(from, { replace: true }) || "/"
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col w-full md:w-1/2 p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
          <p className='text-sm text-gray-400'>Welcome to CollegeBooker</p>
        </div>
        <form
          onSubmit={handleSignUp}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div className="flex gap-4">
              <div className='w-full'>
                <label htmlFor='email' className='block mb-2 text-sm'>
                  Name
                </label>
                <input
                  type='text'
                  name='name'
                  placeholder='Enter Your Name'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#4021a5] bg-gray-200 text-gray-900'
                  data-temp-mail-org='0'
                />
              </div>
              <div className='w-full'>
                <label htmlFor='email' className='block mb-2 text-sm'>
                  College
                </label>
                <input
                  type='text'
                  name='college'
                  placeholder='Enter Your college'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#4021a5] bg-gray-200 text-gray-900'
                  data-temp-mail-org='0'
                />
              </div>
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Address
              </label>
              <input
                type='text'
                name='address'
                placeholder='Enter Your Address'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#4021a5] bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div className='flex gap-4'>
              <div className='w-full'>
                <label htmlFor='email' className='block mb-2 text-sm'>
                  Email address
                </label>
                <input
                  type='email'
                  name='email'
                  required
                  placeholder='Enter Your Email Here'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#4021a5] bg-gray-200 text-gray-900'
                  data-temp-mail-org='0'
                />
              </div>
              <div className='w-full'>
                <div className='flex justify-between'>
                  <label htmlFor='password' className='text-sm mb-2'>
                    Password
                  </label>
                </div>
                <input
                  type='password'
                  name='password'
                  required
                  placeholder='*******'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#4021a5] bg-gray-200 text-gray-900'
                />
              </div>
            </div>
            {/* <div>
              <label htmlFor='image' className='block mb-2 text-sm'>
                Select Image:
              </label>
              <input
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
              />
            </div> */}
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Photo URL
              </label>
              <input
                type='url'
                name='photo'
                placeholder='Enter Your Address'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#4021a5] bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='bg-[#4021a5] w-full rounded-md py-3 text-white'
            >
              Continue
            </button>
          </div>
        </form>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Signup with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div onClick={handleGoogleSignIn} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Already have an account?{' '}
          <Link
            to='/login'
            className='hover:underline hover:text-[#4021a5] text-gray-600'
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default SignUp
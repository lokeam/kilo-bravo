import { MetaFunction } from '@remix-run/node';
import { Form, Link, useActionData } from '@remix-run/react';
import { useEffect, useRef } from 'react';

// import { validateEmail } from '../utils/auth_utils';

// export const action = async ({ request }: ActionFunctionArgs) => {
//   const formData = await request.formData();
//   const email = formData.get('email');
//   const password = formData.get('password');

//   // if (!validateEmail(email)) {
//   //   return json(
//   //     { errors: { email: 'Enter an email', password: null } },
//   //     { status: 400 },
//   //   )
//   // }

//   if (typeof password !== 'string' || password.length === 0) {
//     return json(
//       { errors: { email: null, password: 'Enter a password'} }
//     )
//   }

//   if (password.length < 8) {
//     return json(
//       { errors: { email: null, password: "Password must be longer than 8 characters "} },
//       { status: 400 },
//     );
//   }

//   // Auth server call
//   const response = await fetch('http://localhost:8081/users/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       email,
//       password,
//     }),
//   });

//   if (!response.ok) {
//     const errorText = await response.text();
//     console.log('response not ok, response: ', response);
//     console.log('error text: ', errorText);
//     return json(
//       { errors: { email: "Invalid email or password", password: null } }
//   );
//   } else {
//     console.log('response ok: ', response);

//   }
// }

export const meta: MetaFunction = () => [{ title: "Login" }];

export default function Login() {
  const actionData = useActionData<typeof action>();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (actionData?.errors?.email) {
      emailRef.current?.focus();
    } else if (actionData?.errors?.password) {
      passwordRef.current?.focus();
    }
  }, [actionData]);


  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
                <Form className="space-y-4 md:space-y-6" action="/auth/oauth" method="POST">

                    {/* ----- Email/PW ------ */}
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="border text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                        placeholder="name@company.com" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="Enter your password" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>

                    {/* ----- Divider ------ */}
                    <div className="mt-1 flex flex-auto">
                      <div className="h-3 border-gray-600 border-b-[2px] w-full"></div>
                      <div className="text-white px-5 text-center eCx_6PNzncAD5yo7Qcic">or</div>
                      <div className="h-3 border-gray-600 border-b-[2px] w-full"></div>
                    </div>

                    {/* ----- OAuth ------ */}
                    <button
                      type="button"
                      className="text-white justify-center w-full border border-gray-700 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
                      name="Login with Google"
                      >
                      <svg className="w-4 h-4 me-2" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_13183_10121)">
                              <path d="M20.3081 10.2303C20.3081 9.55056 20.253 8.86711 20.1354 8.19836H10.7031V12.0492H16.1046C15.8804 13.2911 15.1602 14.3898 14.1057 15.0879V17.5866H17.3282C19.2205 15.8449 20.3081 13.2728 20.3081 10.2303Z" fill="#3F83F8"></path>
                              <path d="M10.7019 20.0006C13.3989 20.0006 15.6734 19.1151 17.3306 17.5865L14.1081 15.0879C13.2115 15.6979 12.0541 16.0433 10.7056 16.0433C8.09669 16.0433 5.88468 14.2832 5.091 11.9169H1.76562V14.4927C3.46322 17.8695 6.92087 20.0006 10.7019 20.0006V20.0006Z"
                              fill="#34A853"></path>
                              <path d="M5.08857 11.9169C4.66969 10.6749 4.66969 9.33008 5.08857 8.08811V5.51233H1.76688C0.348541 8.33798 0.348541 11.667 1.76688 14.4927L5.08857 11.9169V11.9169Z" fill="#FBBC04"></path>
                              <path d="M10.7019 3.95805C12.1276 3.936 13.5055 4.47247 14.538 5.45722L17.393 2.60218C15.5852 0.904587 13.1858 -0.0287217 10.7019 0.000673888C6.92087 0.000673888 3.46322 2.13185 1.76562 5.51234L5.08732 8.08813C5.87733 5.71811 8.09302 3.95805 10.7019 3.95805V3.95805Z"
                              fill="#EA4335"></path>
                          </g>
                        <defs>
                            <clipPath id="clip0_13183_10121">
                                <rect width="20" height="20" fill="white" transform="translate(0.5)"></rect>
                            </clipPath>
                        </defs>
                      </svg>
                      Sign in with Google
                    </button>
                    {/* ----- Remember Me ------ */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                            </div>
                        </div>
                        <Link to="/" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link>
                    </div>
                    <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don’t have an account yet? <Link to="/" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                    </p>
                </Form>
            </div>
        </div>
    </div>
  )
}

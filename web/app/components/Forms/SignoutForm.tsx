import { TfiClose } from "react-icons/tfi";
import Avatar from '../Avatar';

export default function SignoutForm() {

  const avatarData = {
    alt: 'picture of border collie',
    img: 'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    initials: 'HD'
  };

  return (
              <div className="text-center">
                  <div className="text-white pb-5">example@exampleemail.com</div>
                  <Avatar alt={avatarData.alt} img={avatarData.img} initials={avatarData.initials} size="md"/>
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white my-4">
                    Hi Username!
                  </h1>
                  <form className="space-y-4 md:space-y-6 my-6" action="#">
                      <button
                        type="submit"
                        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        Manage You Account
                      </button>
                      <button
                        type="submit"
                        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        Sign Out
                      </button>
                  </form>
              </div>
  );
}


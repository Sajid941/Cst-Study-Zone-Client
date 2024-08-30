import { useForm } from "react-hook-form"
import useAuth from './../../hook/useAuth';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
    const { createUser } = useAuth()
    const {
        register,
        handleSubmit,
    } = useForm()
    const navigate = useNavigate()


    const onSubmit = async (data) => {
        const imageFile = { image: data.photo[0] }
        const res = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, imageFile,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
        console.log(res.data.data.display_url);
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                if (result.user) {
                    updateProfile(result.user,{
                        displayName:data.name,
                        photoURL:res.data.data.display_url
                    })
                    navigate('/')
                }
            })
            .catch(error => {
                console.error(error)

            })
        console.log(data.photo[0]);
    }


    return (
        <section className="bg-gray-50">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="/" className="items-center mb-6 text-2xl font-semibold text-gray-900 font-PlaywriteUSModern">
                    <span className="text-mainColor">Cst </span>Study Zone
                </a>
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md md:max-w-none md:w-1/2 xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Create an account
                        </h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6" action="#">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your Name *</label>
                                    <input {...register('name')} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Jhon Doe" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your Photo</label>
                                    <input {...register('photo')} type="file" className="file-input file-input-bordered w-full" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email *</label>
                                    <input {...register('email')} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password *</label>
                                    <input {...register('password')} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                                </div>
                            </div>
                            {/* <div>
                  <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
                  <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                </div> */}
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500">I accept the <a className="font-medium text-primary-600 hover:underline" href="#">Terms and Conditions</a></label>
                                </div>
                            </div>
                            <button type="submit" className="w-full text-white bg-primary-600 bg-mainColor focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create an account</button>
                            <p className="text-sm font-light text-gray-500">
                                Already have an account? <Link to="/signIn" href="#" className="font-medium text-primary-600 hover:underline">Login here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
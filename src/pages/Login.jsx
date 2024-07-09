import Lottie from "lottie-react";
import network from '../components/network.json';

const Login = () => {
    return (
        <div className="flex h-[100vh] items-center justify-center">
            <div className="flex justify-center items-center w-[1081px] h-[636px] rounded-[20px] shadow-2xl">
                <div className="flex justify-center items-center w-[500px] h-[500px] border-r border-solid border-black">
                    <Lottie animationData={network} loop={true} className="w-[400px] h-[400px]"/>
                </div>
                <div className="flex justify-center items-center w-[500px] h-[500px]">
                    <span className="text-gray-600 text-[64px] font-extrabold tracking-tight">Log in</span>
                </div>
                
            </div>
        </div>
    )
}

export default Login;
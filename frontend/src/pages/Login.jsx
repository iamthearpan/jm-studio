import React, { useState } from "react";
import Server from "../utils/Server";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const [input, setInput] = useState({ mobile: "", password: "" });
    const [loading, setloading] = useState(false);

    const login = async (e) => {
        e.preventDefault();

        if (input.mobile === "" || input.password === "") {
            return;
        }

        setloading(true);

        try {
            const {data: response} = await Server.post("/admin/login", {
                mobile: input.mobile,
                password: input.password,
            });

            setloading(false);

            if (response.success) {
                localStorage.setItem("JM_STUDIO_ADMIN_LOGIN", response.data.accessToken);
                navigate("/dashboard");
            }
            else{
                alert("Invalid Credentials");
            }

        } catch (error) {
            setloading(false);
            alert("Invalid Credentials");
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 w-screen">
            <div className="flex flex-col justify-center items-center min-h-screen text-white">
                <h1 className="text-4xl mb-12 font-semibold">Admin Login</h1>
                <form onSubmit={login}>
                    <div className="mb-3">
                        <input
                            type="tel"
                            className="w-72 p-3 text-base text-black focus:ring-0 outline-none rounded-md"
                            placeholder="Mobile"
                            value={input.mobile}
                            onChange={(e) => {
                                setInput((val) => ({
                                    ...val,
                                    mobile: e.target.value,
                                }));
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="Password"
                            className="w-72 p-3 text-base text-black focus:ring-0 outline-none rounded-md"
                            placeholder="Password"
                            value={input.password}
                            onChange={(e) => {
                                setInput((val) => ({
                                    ...val,
                                    password: e.target.value,
                                }));
                            }}
                        />
                    </div>
                    <div>
                        <button className="w-72 p-3 text-base focus:ring-0 outline-none rounded-md bg-blue-900 hover:bg-blue-950 transition font-semibold">
                            {loading?"Please wait...": "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;

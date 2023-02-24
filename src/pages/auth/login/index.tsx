import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useUserStore } from "../../../stores/user";
import { userService } from "../../../services/http/user-service";
import { Input } from "../../../components/features/AuthForm/Input";
import { Button } from "../../../components/features/AuthForm/Button";

export default function Login() {
  const navigate = useNavigate();
  const { user, setUser } = useUserStore();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const data = await userService.login({ email, password });
      setUser({
        id: data?.user.id || "",
        name: data?.user.name || "",
        email: data?.user.email || "",
        imageUrl: data?.user.imageUrl || "",
        accessToken: data?.accessToken || "",
      });
      setIsLoading(false);
      navigate("/");
    } catch (error: any) {
      alert("Authentication failed");
      location.reload();
    }
  };

  useEffect(() => {
    if (user) {
      return navigate("/");
    }
  }, [user]);

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-neutral-200">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 sm:w-4/5 md:w-4/5 lg:w-1/3"
      >
        <h1 className="font-medium uppercase text-2xl mb-8">Login</h1>

        <Input label="Email" type="text" setInputValue={setEmail} />
        <Input label="Password" type="password" setInputValue={setPassword} />
        <div className="mt-3">
          <Button label="Login" isLoading={isLoading} />
        </div>

        <div className="flex mt-4">
          <p className=" text-neutral-400">Not registered yet?&nbsp;</p>
          <Link
            className="text-neutral-500 hover:underline"
            to={"/auth/register"}
          >
            Click hete to sign up
          </Link>
        </div>
      </form>
    </div>
  );
}

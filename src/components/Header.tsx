import search from "/Search.svg";
import { ActionFunctionArgs, redirect } from "react-router-dom";
import { Form } from "react-router-dom";
import { User } from "../types";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export async function action({ request }: ActionFunctionArgs) {
  const data: User = Object.fromEntries(await request.formData()) as User;
  if (Object.values(data).includes("")) {
    alert("Hay valores vacíos");
    return redirect("/");
  }
  return redirect(`profile/${data.user}`);
}


function Header() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("profile/github");
  }, []);
  return (
    <header className="bg-[url('/public/hero-image-github-profile.png')] min-h-52 bg-no-repeat bg-cover ">
      <Form className="flex items-center justify-center" method="POST">
        <div className="mt-10 bg-[#20293A] md:w-[500px] w-[340px] flex rounded-lg p-4  gap-3">
          <button type="submit">
            <img src={search} alt="search" />
          </button>
          <input
            className="bg-transparent w-full outline-none text-[#CDD5E0] "
            type="search"
            name="user"
            placeholder="username"
          />
        </div>
      </Form>
    </header>
  );
}

export default Header;

import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { getProfile } from "../helpers";
import { DataProfile } from "../types";
import ProfileDetails from "../components/ProfileDetails";
import Repositories from "../components/Repositories";

export async function loader({ params }: LoaderFunctionArgs) {
  
  if (params.name === undefined) return {}
  const dataUser = await getProfile(params.name);
  if (!dataUser) return redirect("/");

  return dataUser;
}
export default function SearchProfile() {
  const dataUser = useLoaderData() as DataProfile;
  
  return (
    <>
      <div className=" min-h-full">
        <ProfileDetails profile={dataUser.profile} />
        <Repositories repositories={dataUser.repositories} />
      </div>
    </>
  );
}

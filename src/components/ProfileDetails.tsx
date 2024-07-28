import { Profile } from "../types";

function ProfileDetails({ profile }: { profile: Profile }) {
  return (
    <div>
      <div className="flex gap-5 mb-8 md:mb-0">
        <div className="bg-[#20293A] max-w-32 p-2 rounded-xl relative bottom-16">
          <img
            className="rounded-xl"
            src={profile.avatar_url}
            alt={`${profile.login}-image`}
          />
        </div>
        <div className="flex  flex-col md:flex-row md:items-center gap-5 font-semibold ">
          <div className=" bg-[#111729] py-3 md:text-md text-xs max-w-64 rounded-xl md:mb-14">
            <span className="text-[#4A5567] mr-2 px-4 border-r-2 border-r-[#20293A]">
              Followers
            </span>
            <span className="text-[#CDD5E0] px-4 text-center">
              {profile.followers}
            </span>
          </div>
          <div className=" bg-[#111729] py-3 md:text-md text-xs max-w-64 rounded-xl md:mb-14">
            <span className="text-[#4A5567] mr-2 px-4 border-r-2 border-r-[#20293A]">
              Following
            </span>
            <span className="text-[#CDD5E0] px-4 text-center">
              {profile.following}
            </span>
          </div>
          <div className="bg-[#111729] py-3 md:text-md text-xs max-w-64 rounded-xl md:mb-14">
            <span className="text-[#4A5567] mr-2 px-4 border-r-2 border-r-[#20293A]">
              Location
            </span>
            <span className="text-[#CDD5E0] px-4 text-center">
              {profile.location}
            </span>
          </div>
        </div>
      </div>
      <div className="font-semibold">
        <h1 className="text-3xl mb-4 text-[#CDD5E0]">{profile.login}</h1>
        <p className="text-[#909296] font-bold text-sm">{profile.bio}</p>
      </div>
    </div>
  );
}

export default ProfileDetails;

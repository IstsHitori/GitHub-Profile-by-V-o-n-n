import { Repository } from "../types";
import Star from "/Star.svg";
import Nesting from "/Nesting.svg";
import { getDayFormat } from "../helpers";
import { Link } from "react-router-dom";
export default function RepositoryDetails({
  repository,
}: {
  repository: Repository;
}) {
  return (
    <Link to={repository.clone_url} target="blank" className="w-full bg-gradient-to-r from-[#111729] to-[#1D1B48]  flex flex-col gap-3 rounded-lg p-4 cursor-pointer hover:opacity-90">
        <p className="text-[#CDD5E0] font-semibold text-xl">{repository.name}</p>
        <p className="text-gray-400 ">{repository.description}</p>
        <div className="flex gap-2 items-center ">
            <img src={Nesting} alt="star" />
            <p className="text-gray-400">{repository.forks}</p>
            <img src={Star} alt="star" />
            <p className="text-gray-400">{repository.forks}</p>

            <p className="text-xs ml-4 text-gray-400">updated {getDayFormat(repository.updated_at)} days ago</p>

        </div>
    </Link>
  );
}

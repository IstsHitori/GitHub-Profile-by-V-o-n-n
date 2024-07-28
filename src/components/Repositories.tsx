import { Repository } from "../types";
import RepositoryDetails from "./RepositoryDetails";

export default function Repositories({repositories} : {repositories: Repository[]}) {
    console.log(repositories);
    
  return (
    <div className="mt-8 grid md:grid-cols-2 gap-5 ">
        {
            repositories.map(repository => <RepositoryDetails key={repository.id} repository={repository} />)
        }
    </div>
  )
}

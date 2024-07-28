import { array, null_, number, object, string, union } from "valibot";

export const ProfileSchema = object({
    login:string(),
    location: union([string(),null_()]),
    followers:number(),
    following:number(),
    avatar_url:string(),
    repos_url:union([string()]),
    bio:union([string(),null_()])
})
export const RepositorySchema = object({
    id:number(),
    name:string(),
    description:union([string(),null_()]),
    forks:number(),
    updated_at:string(),
    stargazers_count:number(),
    clone_url:string()
})

export const RepositoriesSchema = array(RepositorySchema);
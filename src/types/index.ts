import { InferOutput } from "valibot"
import { ProfileSchema, RepositorySchema } from "../schemas"

export type User = {
    user:string
}

export type DataProfile = {
    profile: Profile,
    repositories:Repository[]
}

export type Repository = InferOutput<typeof RepositorySchema>;

export type Profile = InferOutput<typeof ProfileSchema>;
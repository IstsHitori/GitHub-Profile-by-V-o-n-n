import { safeParse } from "valibot";
import { ProfileSchema, RepositoriesSchema } from "../schemas";
import { Profile, Repository } from "../types";

export async function getProfile(user: string) {
  const response = await fetch(`https://api.github.com/users/${user}`);
  const data = await response.json();
  const result = safeParse(ProfileSchema, data);
  const profile = result.output as Profile;
  if (result.success) {
    const repositories = await getRepositoty(profile.repos_url);
    return { profile, repositories };
  }
}

export async function getRepositoty(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  
  const result = safeParse(RepositoriesSchema, data);
  if (result.success) {
    const repositories = result.output as Repository[];
    return repositories;
  }
}

export function getDayFormat(date: string){
  const dateFormat = new Date(date);
  return dateFormat.getDate();
}
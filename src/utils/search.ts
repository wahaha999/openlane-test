import { ProfileDataQueryType, ProfileDataType } from "../types/profile";

const searchData = (query: ProfileDataQueryType) => {
  const storedProfiles = localStorage.getItem('profiles');
  const profiles = storedProfiles ? JSON.parse(storedProfiles) as ProfileDataType[] : [];

  // Search the profiles
  const results = profiles.filter(profile =>
      (query.email ? profile.email.includes(query.email) : true) &&
      (query.password ? profile.password.includes(query.password) : true)
  );

  return results.length <= 0 ? false : results[0];
}

export default searchData;
import { ProfileDataType } from "../types/profile";

const saveProfile = (data: ProfileDataType) => {
  const storedProfiles = localStorage.getItem('profiles');
  const profiles = storedProfiles ? JSON.parse(storedProfiles) as ProfileDataType[] : [];

  // Save a new profile
  profiles.push(data);
  localStorage.setItem('profiles', JSON.stringify(profiles));

  return;
}

export default saveProfile;
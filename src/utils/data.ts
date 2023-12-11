import { defaultValues } from "../libs/constant";
import { ProfileDataQueryType, ProfileDataType } from "../types/profile";
import { localStorageUtil } from "./localStorageUtils";

const deleteProfile = (email: string) => {
  const storedProfiles = localStorage.getItem("profiles");
  const profiles = storedProfiles
    ? (JSON.parse(storedProfiles) as ProfileDataType[])
    : [];

  const results = profiles.filter((profile) => profile.email !== email);

  localStorage.setItem("profiles", JSON.stringify(results));

  return;
};

const saveProfile = (data: ProfileDataType) => {
  const storedProfiles = localStorage.getItem("profiles");
  const profiles = storedProfiles
    ? (JSON.parse(storedProfiles) as ProfileDataType[])
    : [];

  profiles.push(data);
  localStorage.setItem("profiles", JSON.stringify(profiles));
  saveData(data);

};

const updateProfile = (data: ProfileDataType) => {
  deleteProfile(data.email);
  saveProfile(data);
};

const saveData = (data: ProfileDataType) => {
  Object.entries(data).forEach(([key, value]) => {
    localStorageUtil.setItem(key, value);
  });
}

const searchData = (query: ProfileDataQueryType) => {
  const storedProfiles = localStorage.getItem("profiles");
  const profiles = storedProfiles
    ? (JSON.parse(storedProfiles) as ProfileDataType[])
    : [];

  const results = profiles.filter(
    (profile) =>
      (query.email ? profile.email.includes(query.email) : true) &&
      (query.password ? profile.password.includes(query.password) : true)
  );

  return results.length <= 0 ? false : results[0];
};

const getData = (): ProfileDataType => {
  try {
    const email = localStorageUtil.getItem("email");
    const fullName = localStorageUtil.getItem("fullName");
    const phoneNumber = localStorageUtil.getItem("phoneNumber");
    const favoriteColor = localStorageUtil.getItem("favoriteColor");
    const password = localStorageUtil.getItem("password");

    if (email && fullName && phoneNumber && favoriteColor && password) {
      return {
        email,
        fullName,
        phoneNumber,
        favoriteColor,
        password,
      };
    } else {
      return defaultValues;
    }
  } catch (error) {
    console.error("Error retrieving data from LocalStorage:", error);
    return defaultValues;
  }
};

const clearData = () => {
  localStorageUtil.removeItem("email");
  localStorageUtil.removeItem("favoriteColor");
  localStorageUtil.removeItem("password");
  localStorageUtil.removeItem("fullName");
  localStorageUtil.removeItem("phoneNumber");
};

export {
  saveProfile,
  searchData,
  deleteProfile,
  updateProfile,
  getData,
  clearData,
  saveData
};

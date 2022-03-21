export const baseUrl = "https://kr-user.herokuapp.com/api/v1"

//Auth User from Segun
export const SIGNUP_USER = `${baseUrl}/users/auth/signup`
export const LOGIN_USER = `${baseUrl}/users/auth/signin`
export const SIGNOUT_USER = `${baseUrl}/users/auth/signout`
export const GET_CURRENT_USER = `${baseUrl}/users/auth/currentuser`
export const CHANGE_USER_PASSWORD = `${baseUrl}/users/auth/change-password`
export const GET_USER_TEAM_MEMBERS = `${baseUrl}/users/profile/view-team-members`
export const ADD_TEAM_MEMBERS = `${baseUrl}/users/profile/add-team-member`
export const EDIT_PERSONAL_INFO = `${baseUrl}/users/profile/edit-personal-information`
export const EDIT_BUSINESS_INFO = `${baseUrl}/users/profile/edit-business-information`
export const CHANGE_DP = `${baseUrl}/users/profile/edit-profile-picture`

export const baseUrl = "https://kr-user.herokuapp.com/api/v1"
const baseUrl2 = "https://kreactiverock-texting.herokuapp.com/api"
//Auth User from Segun
export const SIGNUP_USER = `${baseUrl}/users/auth/signup`
export const LOGIN_USER = `${baseUrl}/users/auth/signin`
export const SIGNOUT_USER = `${baseUrl}/users/auth/signout`
export const GET_CURRENT_USER = `${baseUrl}/users/auth/currentuser`

//Sender iD from Stanley
export const CREATE_SENDER_ID = `${baseUrl2}/sender-id` //POST || GET
export const FIlTER_SENDER_ = `${baseUrl2}/sender-id/filter` //GET
export const EDIT_SENDER_ID = `${baseUrl2}/sender-id/organisation` //PUT || DELETE

export const GET_NETWORTH_SETTINGS = `${baseUrl}/settings/networth-settings` //PUT
export const GET_LIABILITIES = `${baseUrl}/liabilities` //PUT
export const ASSETS = `${baseUrl}/assets` //PUT
export const CREATE_ASSETS = `${baseUrl}/assets/add-assets` //POST
export const NETWORTH = `${baseUrl}/expenses?date=September%20-%202019` //PUT

// Expenses
export const EXPENSESURL = `${baseUrl}/expenses?date=September%20-%202019`
export const ADD_EXPENSESURL = `${baseUrl}/expenses`
export const EXPENSESURL_BYCAT = `${baseUrl}/expenses/Housing/Housing%20Maintenance?date=September%20-%202019`

//BudgetPage
export const CREATE_BUDGET = `${baseUrl}/budget` // POST
export const EDIT_BUDGET = `${baseUrl}/budget/1` // POST
export const FORMATED_BUDGET = `${baseUrl}/budget/formatted` // GET

// Goals
export const API_GOALS = `${baseUrl}/goals/` // GET

export const VALIDATEUSERNAME = `${baseUrl}/user/auth/username`

export const UPLOADPICTURE = `${baseUrl}/utils/upload`
export const UPLOADMULTIPLE = `${baseUrl}/utils/upload/multiple`
export const UPDATEPROFILE = `${baseUrl}/user/account/cooperate/profile` //token
export const GETPROFILEDATA = `${baseUrl}/user/account/profile`
export const SENDOTP = `${baseUrl}/user/auth/phone_number`
export const VALIDATEOTP = `${baseUrl}/user/auth/phone_number/verify`
export const ADDPRODUCT = `${baseUrl}/products`
export const GETCATEGORIES = `${baseUrl}/utils/categories`

//wallets
export const GETWALLET = `${baseUrl}/wallet`
export const GETWALLETHISTORY = id => `${baseUrl}/transaction/${id}`

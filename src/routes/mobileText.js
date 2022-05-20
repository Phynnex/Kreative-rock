const baseUrl2 = "https://kreactiverock-texting.herokuapp.com/api"
const baseUrl3 = "https://kreactiverock-enquiry.herokuapp.com/api"

//Sender iD from Stanley
export const CREATE_SENDER_ID = `${baseUrl2}/sender-id`
export const FIlTER_SENDER_ = `${baseUrl2}/sender-id/filter`
export const EDIT_SENDER_ID = `${baseUrl2}/sender-id/organization`

// Keywords by Stanley
export const ENDPOINT_KEYWORD = `${baseUrl2}/keywords`
export const FIlTER_KEYWORD = `${baseUrl2}/keywords/org/filter`
export const RENEW_KEYWORD = `${baseUrl2}/keywords/renew`
export const ADD_AUTORESPONSE_KEYWORD = `${baseUrl2}/keywords/responses/add-response`

// Keywords by Stanley
export const ENDPOINT_CAMPAIGN = `${baseUrl2}/campaign`
export const FIlTER_CAMPAIGN = `${baseUrl2}/campaign/filter/search`

// Conversation Model
export const ENDPOINT_MESSAGING = `${baseUrl2}/conversations`
export const FIlTER_MESSAGES = `${baseUrl2}/conversation/filter/search`


//Enquiry
export const MAKE_ENQUIRY = `${baseUrl3}`

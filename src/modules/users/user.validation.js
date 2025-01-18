import joi from "joi";
import { genderTypes } from "../../DB/models/user.model.js"
import { generalRules } from './../../utils/generalRules/index.js';



export const signUpSchema = {
    body: joi.object({
        name: joi.string().alphanum().min(3).max(20).required(),
        email: generalRules.email.required(),
        password: generalRules.password.required(),
        cPassword: joi.string().valid(joi.ref("password")).required(),
        gender: joi.string().valid(genderTypes.female, genderTypes.male).required(),
        phone: joi.string().required(),
    })
}


export const updateProfileSchema = {
    body: joi.object({
        name: joi.string().alphanum().min(3).max(20),
        gender: joi.string().valid(genderTypes.female, genderTypes.male),
        phone: joi.string(),
    }),
    headers: generalRules.headers.required(),
}


export const updatePasswordSchema = {
    body: joi.object({
        oldPassword: generalRules.password.required(),
        newPassword: generalRules.password.required(),
        cPassword: generalRules.password.valid(joi.ref("newPassword")).required(),
    }),
    headers: generalRules.headers.required(),
}


export const freezeAccountSchema = {
    headers: generalRules.headers.required(),
}
export const shareProfileSchema = {
    params: joi.object({
        id: generalRules.id.required(),
    }),
}





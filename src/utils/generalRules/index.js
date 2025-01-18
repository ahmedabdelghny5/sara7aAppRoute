import joi from "joi"
import { Types } from "mongoose"
const customId = (value, helper) => {
    const checkId = Types.ObjectId.isValid(value)
    return checkId ? value : helper.message(` ${value} is not a valid id`)
}

export const generalRules = {
    email: joi.string().email({ tlds: { allow: ["net", "com"] }, minDomainSegments: 2, maxDomainSegments: 2 }),
    password: joi.string().min(5),
    id: joi.string().custom(customId),
    headers: joi.object({
        authorization: joi.string(),
        'cache-control': joi.string(),
        'postman-token': joi.string(),
        'content-type': joi.string(),
        'content-length': joi.string(),
        host: joi.string(),
        'user-agent': joi.string(),
        accept: joi.string(),
        'accept-encoding': joi.string(),
        connection: joi.string(),
    })
}
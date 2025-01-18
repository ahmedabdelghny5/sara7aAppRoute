import messageModel from "../../DB/models/message.model.js"
import userModel from "../../DB/models/user.model.js"
import { asyncHandler } from "../../utils/index.js"



export const sendMessage = asyncHandler(async (req, res, next) => {
    const { content, userId } = req.body
    if (!await userModel.findById(userId)) return next(new Error("User not found", { cause: 404 }))
    const message = await messageModel.create({ content, userId })
    return res.status(201).json({ msg: "done", message })
})

export const getMessages = asyncHandler(async (req, res, next) => {
    const messages = await messageModel.find({ userId: req.user._id }).populate([
        {
            path:"userId",
            select:"name email phone"
        }
    ])
    return res.status(201).json({ msg: "done", messages })
})
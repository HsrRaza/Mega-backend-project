import mongoose, { Schema } from "mongoose";
import { AvailableUserRoles } from "../utils/constants.js"

const projectMemberSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    projects: {
        type: Schema.Types.ObjectId,
        ref: "Project",
        required: true
    },
    role: {
        type: String,
        enum: AvailableUserRoles,
        default: UserRolesEnum.MEMBER,
    }

}, { timestamps: true })


export const ProjectMember = mongoose.model("ProjectMember", projectMemberSchema);
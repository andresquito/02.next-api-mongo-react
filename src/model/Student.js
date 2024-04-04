import mongoose from "mongoose"

const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please complete the field"]
        },
        age:{
            type: Number,
            required: [true, "Plese complete the field"]
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
)

export const StudentModel = mongoose?.models?.Student || mongoose.model("Student",studentSchema)
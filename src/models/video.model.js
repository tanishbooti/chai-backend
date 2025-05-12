import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile: {
            type: String, //cloudinary url
            required: true
        },
        thumbnail: {
            type: String, //cloudinary url
            required: true
        },
        title: {
            type: String, 
            required: true
        },
        description: {
            type: String, 
            required: true
        },
        duration: {
            type: Number, 
            required: true
        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User" //refers to the user who uploaded the video. that user is referred to by their id in userSchema
        }

    }, 
    {
        timestamps: true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)
//.plugin adds  middleware to the schema
// It adds a feature to your video schema so you can easily break big search results into pages.
//Like showing 10 videos per page instead of all at once. That’s it.
// It’s a way to make your app faster and easier to use.
// It’s like a helper that makes sure you don’t get overwhelmed with too much information at once.
export const Video = mongoose.model("Video", videoSchema)
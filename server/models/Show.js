import mongoose from "mongoose";

const showSchema = new mongoose.Schema(
    {
        movie: {type: String, required: true, ref: 'Movie'},
        showDateTime: {type: Date, required: true},
        showPrice: {type: Number, required: true},
        occupiedSeats: {type: Object, default:{}},
    }, {minimize: false}// save the object even if  its currently empty because for reserving space seats data to update in future
)

const Show = mongoose.model("Show", showSchema);

export default Show;
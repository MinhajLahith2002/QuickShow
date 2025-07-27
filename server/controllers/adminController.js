import Booking from '../models/Booking.js'
import Show from '../models/Show.js'
import User from '../models/User.js'

//API to check if user is admin
export const isAdmin = async (req, res) => {
    res.json({success: true, isAdmin: true})
}

//API to get dashboard data
export const getDashboardData = async (req, res) => {
    try {
        const bookings = await Booking.find({isPaid: true});

        //For each show, it fetches the related movie document based on the movie ObjectId in the show.
        //So instead of just having the movie ID, you get full movie details (title, genre, etc.).
        const activeShows = await Show.find({showDateTime: {$gte: new Date()}}).populate('movie');

        const totalUser = await User.countDocuments();

        const dashboardData = {
            totalBookings: bookings.length,
            //sum of all booking amounts. nitial value of acc to 0
            totalRevenue: bookings.reduce((acc, booking)=> acc + booking.amount, 0),
            activeShows,
            totalUser
        }

        res.json({success: true, dashboardData})
    } catch (error) {
        console.error(error);
        res.json({success: false, message: error.message})
    }
}

//API  to get all shows
export const getAllShows = async (req, res) => {
    try {
        //ascending order of showDateTime 
        const shows = await Show.find({showDateTime: {$gte : new Date() }}).
        populate('movie').sort({showDateTime : 1});
        res.json({success: true, shows})
    } catch (error) {
        console.error(error);
        res.json({success: false, message: error.message});
    }
}

// API to get all bookings
export const getAllBookings = async (req, res) => {
    try {
        //fetching all bookings from the database
        //{} means no filter — you want every booking.
        //Fills in details of the user who made each booking.
        //Result: Each booking has the full user info, full show info, and full movie info. It’s like a triple-layer cake
        //-1 = descending (latest at the top), Newest bookings appear first
        const bookings = await Booking.find({}).populate('user').populate({
            path:"show",
            populate: {path: "movie"}
        }).sort({createdAt: -1})
        res.json({success: true, bookings})
    } catch (error) {
        console.error(error);
        res.json({success: false, message: error.message});
    }
}
import Booking from '../models/Booking.js'
import {clerkClient } from '@clerk/express'
import Movie from '../models/Movie.js'


//API controller function to get user bookings
export const getUserBookings = async (req, res) => {
    try {
        const user = req.auth().userId;

        const bookings = await Booking.find({user}).populate({
            path: "show",
            populate: {path: "movie"}
        }).sort({createdAt: -1})
        res.json({success: true, bookings})
    } catch (error) {
        console.error(error);
        res.json({success: false, message: error.message});
    }
}

//API controller function to add faveourite movie in clerk user metadata
export const addFavorite = async (req, res) => {
    try {
        const { movieId } = req.body;
        const userId = req.auth().userId;

        const user  = await clerkClient.users.getUser(userId)

        if (!user.privateMetadata.favorites) {
            user.privateMetadata.favorites = []
        }

        if (!user.privateMetadata.favorites.includes(movieId)) {
            user.privateMetadata.favorites.push(movieId)
        }

        await clerkClient.users.updateUserMetadata(userId, {privateMetadata: user.privateMetadata})

        res.json({success: true, message: "Favorite added successfully."})
    } catch (error) {
        console.error(error);
        res.json({success: false, message: error.message});
    }
}

//API controller function to update faveourite movie in clerk user metadata
export const updateFavorite = async (req, res) => {
    try {
        const { movieId } = req.body;
        //if you need to use userId in multiple places.
        //To fetch the user
        // To pass it again into updateUserMetadata
        const userId = req.auth().userId;

        const user  = await clerkClient.users.getUser(userId)

        if (!user.privateMetadata.favorites) {
            user.privateMetadata.favorites = []
        }

        if (!user.privateMetadata.favorites.includes(movieId)) {
            user.privateMetadata.favorites.push(movieId)
        }else{
            user.privateMetadata.favorites = user.privateMetadata.favorites.filter
            (item => item !== movieId)
        }

        await clerkClient.users.updateUserMetadata(userId, {privateMetadata: user.privateMetadata})

        res.json({success: true, message: "Favorite movies updated."})
    } catch (error) {
        console.error(error.message);
        res.json({success: false, message: error.message});
    }
}

export const getFavorites = async (req, res) => {
    try {
        //accessing the authenticated user's ID directly
        //only need the userId once
        const user = await clerkClient.users.getUser(req.auth().userId)
        //This array contains MongoDB _id values (most likely) for each movie the user has marked as favorite.
        const favorites = user.privateMetadata.favorites;

        //getting movies from database
        //using MongoDB’s $in operator to find all movies whose _id is in the favorites list.
        const movies = await Movie.find({_id: {$in: favorites}})

        res.json({success: true, movies});
    } catch (error) {
        console.error(error.message);
        res.json({success: false, message: error.message})
    }
}
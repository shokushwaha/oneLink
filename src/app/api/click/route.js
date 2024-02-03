import { Event } from '@/models/Event';
import mongoose from "mongoose";
export async function POST(req) {
    mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI);
    const url = new URL(req.url);
    const clickedLink = atob(url.searchParams.get('url'));
    const page = url.searchParams.get('page');
    await Event.create({ type: 'click', uri: clickedLink, page });
    return Response.json(true);
}
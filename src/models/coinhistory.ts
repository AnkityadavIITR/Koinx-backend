import mongoose, { Document, Schema, Model } from "mongoose";
export interface Coinhistory extends Document {
    coin: string;
    currPrice: number;
    prevPrices: number[];
    marketCap: number;
    "24hChange": number;
}
const coinhistorySchema = new Schema<Coinhistory>({
    coin: {
        type: String,
        required: true,
    },
    currPrice: {
        type: Number,
        required: true,
    },
    prevPrices: {
        type: [Number],
    },
    marketCap: {
        type: Number,
        required: true,
    },
    "24hChange": {
        type: Number,
        required: true,
    },
});
export const Coin: Model<Coinhistory> = mongoose.model("Coinhistory", coinhistorySchema);

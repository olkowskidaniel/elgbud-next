import { images } from "@/next.config";
import { Schema, model, models } from "mongoose";

const OfferSchema = new Schema({
  title: String,
  offerType: String, //Typ oferty
  location: String,
  ownershipType: String, //Forma własności
  houseArea: Number,
  landArea: Number,
  price: Number,
  pricePerMeter: Number,
  utilities: String, //Media
  rooms: Number,
  yearBuilt: Number,
  isAvailable: { type: Boolean, default: true },
  availabilityDate: Date,
  description: String,
  images: [String],
  additionalFeatures: String, //Dodatkowe cechy
  localAmenities: String, //Lokalne udogodnienia
  listedDate: { type: Date, default: Date.now },
  isPublished: { type: Boolean, default: false },
});

const Offer = models.Offer || model("Offer", OfferSchema);

export default Offer;

import { images } from "@/next.config";
import { Schema, model, models } from "mongoose";

const RealizationSchema = new Schema({
  name: String,
  description: String,
  houseArea: Number,
  landArea: Number,
  location: String,
  images: [String],
});

const Realization =
  models.Realization || model("Realization", RealizationSchema);

export default Realization;

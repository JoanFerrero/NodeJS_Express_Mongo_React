import mongoose from "mongoose";

const productsSchema = mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    description: String,
    picturePath: String,
    price: Number,
  },
  { timestamps: true }
);

const Products = mongoose.model("ProductsNobull", productsSchema);

export default Products;
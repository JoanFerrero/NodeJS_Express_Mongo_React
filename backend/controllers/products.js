import Products from "../models/Products.js";

/* CREATE */
export const createProducts = async (req, res) => {
  try {
    const { Name, description, picturePath, price} = req.body;
    const newProduct = new Products({
      Name,
      description,
      picturePath,
      price
    });
    await newProduct.save();

    const products = await Products.find();
    res.status(201).json(products);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

/* READ */
export const getProducts = async (req, res) => {
  const skip = req.query.skip ? Number(req.query.skip) : 0;
	const DEFAULT_LIMIT = 6;

  try {
    const products = await Products.find().skip(skip).limit(DEFAULT_LIMIT);
    res.status(200).json(products);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
/** Likes view and Update */
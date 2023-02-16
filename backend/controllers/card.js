import User from "../models/User.js";
import Products from "../models/Products.js";

export const getCard = async (req, res) => {
  try {
    const { id } = req.params;
    const idToken = req.user;
    if (id !== idToken.id) {
      return res.status(403).send("Access Denied");
    }
    const user = await User.findById(id);

    const products = await Promise.all(
      user.card.map((id) => Products.findById(id))
    );

    res.status(200).json(products);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

export const addRemoveCard = async (req, res) => {
  const { id, productId } = req.params;
  const idToken = req.user;
  if (id !== idToken.id) {
    return res.status(403).send("Access Denied");
  }
  
  const user = await User.findById(id);
  if (user.card.includes(productId)) {
    user.card = user.card.filter((id) => id !== productId);
  } else {
    user.card.push(productId);
  }

  await user.save();

  const products = await Promise.all(
    user.card.map((id) => Products.findById(id))
  );

  res.status(200).json(products);
}

export const removeAllCard = async (req, res) => {
  const { id } = req.params;
  const idToken = req.user;
  if (id !== idToken.id) {
    console.log(id)
    return res.status(403).send("Access Denied");
  }
  
  const user = await User.findById(id);
  user.card = user.card.slice(0, 0)

  await user.save();

  res.status(200).json(user.card);
}
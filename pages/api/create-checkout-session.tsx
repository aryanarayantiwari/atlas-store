const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { items, email } = req.body;

    const transformedItems = items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          images: [`../../public${item.image}`],
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      description: item.category,
      quantity: item.quantity,
    }));
  
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      shipping_address_collection: {
        allowed_countries: ["IN"],
      },
      line_items: transformedItems,
      mode: "payment",
      success_url: "https://atlas-store.vercel.app/success",
      cancel_url: "https://atlas-store.vercel.app/cancel",
      metadata: {
        email,
      },
    });
    res.status(200).json({ id: session.id });   
};

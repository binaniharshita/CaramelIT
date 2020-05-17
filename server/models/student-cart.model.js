const mongoose = require("mongoose");

const studentCartSchema = new mongoose.Schema(
  {
    course_id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    image: {
      type: String,
    }
  });

const studentCart = mongoose.model("Cart", studentCartSchema);

// const TotalVirtual = cartSchema.virtual("total");

// TotalVirtual.get(async () => {
//   let total = 0;
//   this.items.map(async (item) => {
//     itemObj = await Item.find(item._id);

//     total += item.quantity * itemObj.price;
//   });
//   return total;
// });

module.exports = studentCart;

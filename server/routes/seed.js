const Item = require('../item');

//Save into MongoDB
const file = require('../Course.json');

const seed = Item.create(file, (error, data) => {
  if (error) {
    return (error)
  } else {
    console.log('Done')
  }
});

try {
  if (fs.existsSync(file)) {
    module.exports = seed;
  } else {
    console.log("Please upload course content first.")
  }
} catch (err) {
  console.error(err)
}
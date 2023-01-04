const { hasUser } = require("../middlewares/guards");
const CoinGecko = require('coingecko-api');
const {
  getAll,
  create,
  getById,
  edit,
  deleteItem,
  getByUserId,
} = require("../services/item");
const { parseError } = require("../util/parser");

const dataController = require("express").Router();

dataController.get("/", async (req, res) => {

  const CoinGeckoClient = new CoinGecko();

  // let data = await CoinGeckoClient.coins.list()
  let data = await CoinGeckoClient.coins.fetch('aave-amm-unilinkweth', {});
  console.log(data.data)
  // let coinsArray = data.data;
  // for(let item of data.data){
  //   console.log(item.id)
  // }
  // console.log(coinsArray)
  // coinsArray.filter((coin) => {
  //   Object.values(coin).some((word) => word.includes('btc'))
  // })
  // console.log(coinsArray)




  let items = [];
  if (req.query.where) {
    const userId = JSON.parse(req.query.where.split("=")[1]);
    items = await getByUserId(userId)
  } else {
    items = await getAll();
  }
  res.json(items);
});

dataController.post("/", hasUser(), async (req, res) => {
  try {
      //2. Initiate the CoinGecko API Client
  const CoinGeckoClient = new CoinGecko();
  console.log('')
  //3. Make calls
  var func = async() => {
    let data = await CoinGeckoClient.ping();
 
  };
  console.log(func)
  //   const data = Object.assign({ _ownerId: req.user._id }, req.body);
  //   const item = await create(data);
  //   res.json(item);
  } catch (error) {
    const message = parseError(error);
    res.status(400).json({ message });
  }
});

dataController.get("/:id", async (req, res) => {
  const item = await getById(req.params.id);
  res.json(item);
});

dataController.put("/:id", hasUser(), async (req, res) => {
  const item = await getById(req.params.id);
  if (req.user._id != item._ownerId) {
    return res.status(403).json({ message: "You cannot modify this record" });
  }
  try {
    const result = await edit(req.params.id, req.body);
    res.json(result);
  } catch (error) {
    const message = parseError(error);
    res.status(400).json({ message });
  }
});

dataController.delete("/:id", hasUser(), async (req, res) => {
  const item = await getById(req.params.id);
  if (req.user._id != item._ownerId) {
    return res.status(403).json({ message: "You cannot modify this record" });
  }

  try {
    await deleteItem(item);
    res.status(204).end();
  } catch (error) {
    const message = parseError(error);
    res.status(400).json({ message });
  }
});


dataController.get('/dadada/ne', (req, res) => {

 


  //2. Initiate the CoinGecko API Client
  const CoinGeckoClient = new CoinGecko();
  
  //3. Make calls
  var func = async() => {
    let data = await CoinGeckoClient.ping();
    console.log(data)
  };

})
module.exports = dataController;

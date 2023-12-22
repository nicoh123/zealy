require('dotenv').config();


require("@nomiclabs/hardhat-ethers");
// Save your API_URL and Private Key in a .env file. This line access the .env file to get the url and the key.
const { API_URL, PRIVATE_KEY } = process.env;



 //@type import('hardhat/config').HardhatUserConfig



module.exports = {

   solidity: "0.7.3",

   defaultNetwork: "goerli",

   networks: {

      hardhat: {},

      goerli: {

         url: API_URL,  //you also could directly insert the URL here.

         accounts: [`0x${PRIVATE_KEY}`] //you could directly insert the key here.

      }

   },

}
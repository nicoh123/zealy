// In the main function we finally are able to use our constructor to create the contract which includes the message "ZealyContract!"
async function main() {

   const ZealyContract = await ethers.getContractFactory("ZealyContract");


   // Start deployment, returning a promise that resolves to a contract object.

   const zealy_contract = await ZealyContract.deploy("ZealyContract!");

   console.log("Contract deployed to address:", zealy_contract.address);}


main()

  .then(() => process.exit(0))

  .catch(error => {

    console.error(error);

    process.exit(1);

  });
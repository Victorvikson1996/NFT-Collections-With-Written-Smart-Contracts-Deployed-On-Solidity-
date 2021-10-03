

const main = async () => {


    const nftContractFactory = await hre.ethers.getContractFactory("MyEpicNFT")
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();
    console.log("Contract deployedto:", nftContract.address);





    //call the function 

    let txn = await nftContract.makeAnEpicNFT()

    //wait another NFT for fun 


    txn = await nftContract.makeAnEpicNFT()
    await txn.wait()
};


const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

runMain();
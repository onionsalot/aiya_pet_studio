const PopularProduct = () => {
    const sampleImage = "https://i.etsystatic.com/24762991/r/il/9f62c0/3430721950/il_794xN.3430721950_4c7c.jpg"

    return (
        <div>
            <div className="flex max-w-6xl h-96 m-auto mt-4 shadow-[rgba(0,0,0,0.1)_0px_4px_12px]">
                <div className="w-96 h-96 mr-32 bg-blue-200">
                    <img src={sampleImage} className="h-96"/>
                </div>
                <div className="w-96 h-96">
                    <div className="h-14">
                        <h2 className="text-3xl pt-3">Christmas Sticker</h2>
                    </div>
                    <div className="h-14">
                        <h3 className="text-2xl pt-3">Price: $10</h3>
                    </div>
                    <div className="h-14">
                        <h5 className="text-xl pt-3">Description:</h5>
                        <p>Cat hugging Christmas Tree</p>
                    </div>
                    <input type="button" value="Add to Cart" className="bg-violet-400 text-white w-38 h-12 text-2xl p-2 mt-32 rounded-[5px]"></input>
                </div>
            </div>
        </div>
    )
}

export default PopularProduct
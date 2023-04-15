const FeaturedProductCard = ({ product }) => {
  const SAMPLEIMAGE = 'https://i.etsystatic.com/24762991/r/il/6f40cb/2951681622/il_794xN.2951681622_obfu.jpg'
  const handleMouseOver = (e) => {
    const insideCard = e.currentTarget.querySelector('.image-card');
    insideCard.style.transform = 'scale(1.1)';
    insideCard.style.transition = 'transform 2s';
  };

  const handleMouseOut = (e) => {
    const insideCard = e.currentTarget.querySelector('.image-card');
    insideCard.style.transform = 'scale(1)';
    insideCard.style.transition = 'transform 0.1s';
  };
  
  return (
    <div 
      className="flex flex-col cursor-pointer p-3 mx-7 w-full sm:w-1/2 sm:mx-0 md:w-1/4 md:p-1 lg:p-3"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="aspect-square w-full overflow-hidden">
        <div 
          style={{backgroundImage: `url(${SAMPLEIMAGE})`}}
          className="
            image-card
            h-full
            w-full
            rounded-md
            hover:shadow-lg
            bg-cover 
            bg-center
          "
        />
      </div>
      <div className="pt-4">
        <div className="text-left text-base text-client_primary font-semibold">{product.name}</div>
        <div className="text-left text-lg text-client_secondary font-bold">${product.price}</div>
      </div>
    </div>
  );
}
 
export default FeaturedProductCard;
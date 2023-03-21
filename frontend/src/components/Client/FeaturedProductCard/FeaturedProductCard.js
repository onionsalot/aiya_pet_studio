const FeaturedProductCard = ({ product }) => {
  const SAMPLEIMAGE = 'https://i.etsystatic.com/24762991/r/il/6f40cb/2951681622/il_794xN.2951681622_obfu.jpg'
  return (
    <div class="w-1/2 sm:w-1/4 aspect-square">
      <div 
        style={{backgroundImage: `url(${SAMPLEIMAGE})`}}
        class="
          m-2
          p-3
          h-5/6
          rounded-md
          hover:shadow-lg
          cursor-pointer
          lg:m-4
          bg-cover 
          bg-center
          transition
          duration-300"
      >
        {product.name}
      </div>
    </div>
  );
}
 
export default FeaturedProductCard;
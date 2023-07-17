import { AiTwotoneHeart, AiOutlineHeart, AiTwotoneStar } from "react-icons/ai";

const Card = ({ singleProduct }) => {
  return (
    <div className={`w-full cursor-pointer md:mb-6 mb-2 animate__animated animate__fadeIn`}>
      <div className="relative overflow-hidden">
        <div className="w-full h-full overflow-hidden cursor-pointer">
          {singleProduct.images[0] && singleProduct.images[0].url && (
            <img
              src={singleProduct.images && singleProduct.images[0] && singleProduct.images[0].url}
              alt={singleProduct.name}
              width="350"
              height={
                singleProduct.brand === "AQUA & ROCK"
                  ? "520"
                  : singleProduct.brand === "KAPRAAHA"
                  ? "570"
                  : singleProduct.brand === "DANIEL WELLINGTON"
                  ? "380"
                  : singleProduct.brand === "NIGH NIGH"
                  ? "520"
                  : "440"
              }
              // priority="true"
            />
          )}
          {singleProduct?.mrp != singleProduct?.price && (
            <div className="absolute top-2 right-2 whitespace-nowrap bg-off-tag text-white text-xxs md:text-xs h-6 px-1 flex items-center justify-center">
              {Math.round((1 - singleProduct?.price / singleProduct?.mrp) * 100)}% OFF
            </div>
          )}
        </div>
        <div className="absolute top-2 left-2 flex-col flex items-start">
          {singleProduct?.rating > 0 && (
            <div className="px-1.5 py-1 mb-2 whitespace-nowrap flex items-center bg-white  rounded-full">
              <AiTwotoneStar size={14} className="text-yellow-400 mr-1" />

              <span className="text-xs"> {singleProduct?.rating.toFixed(1)}</span>
            </div>
          )}
        </div>
      </div>
      <div className={`py-1.5 px-0`}>
        <div className="flex justify-between items-center mb-1">
          <div className="text-zinc-600 text-xxs">{singleProduct.brand}</div>
          <div className="flex text-xs items-center">
            {singleProduct?.productTag ? (
              singleProduct?.productTag && singleProduct?.productTag?.showDiscount ? (
                singleProduct?.mrp != singleProduct?.price ? (
                  <>
                    <div className="line-through text-zinc-600">
                      ${singleProduct.mrp.toFixed(2)}
                    </div>
                    <div className="ml-1 text-red-600">${singleProduct.price.toFixed(2)}</div>
                  </>
                ) : (
                  <div className="text-zinc-800">${singleProduct.price.toFixed(2)}</div>
                )
              ) : (
                <div className="text-zinc-800">${singleProduct.price.toFixed(2)}</div>
              )
            ) : singleProduct?.productTag && singleProduct?.productTag?.showDiscount ? (
              singleProduct?.mrp != singleProduct?.price ? (
                <>
                  <div className="line-through text-zinc-600">${singleProduct.mrp.toFixed(2)}</div>
                  <div className="ml-1 text-red-600">${singleProduct.price.toFixed(2)}</div>
                </>
              ) : (
                <div className="text-zinc-800">${singleProduct.price.toFixed(2)}</div>
              )
            ) : (
              <div className="text-zinc-800">${singleProduct.price.toFixed(2)}</div>
            )}
          </div>
        </div>

        <span className="text-sm text-zinc-800 mb-1">{singleProduct.name}</span>
        <div className="flex justify-between items-end">
          <div
            style={{
              color: singleProduct?.productTag
                ? singleProduct?.productTag?.color
                : singleProduct?.productTag?.color,
            }}
            className="text-xxs mt-1"
          >
            {singleProduct?.productTag
              ? singleProduct?.productTag?.name
              : singleProduct?.productTag?.name}
          </div>
          <div className="flex justify-between items-center">
            {singleProduct?.productTag
              ? singleProduct?.productTag && singleProduct?.productTag?.tagType === "NORMAL"
                ? singleProduct?.productTag &&
                  singleProduct?.productTag?.showOff &&
                  singleProduct?.mrp != singleProduct?.price && (
                    <div className="text-xxs font-normal">
                      {Math.round((1 - singleProduct?.price / singleProduct?.mrp) * 100)}% OFF
                    </div>
                  )
                : singleProduct?.productTag &&
                  singleProduct?.productTag?.checkoutOff && (
                    <div className="text-xxs text-green-500 font-normal">
                      EXTRA {singleProduct?.productTag?.checkoutOff}% AT CHECKOUT
                    </div>
                  )
              : singleProduct?.productTag && singleProduct?.productTag?.tagType === "NORMAL"
              ? singleProduct?.productTag?.showOff &&
                singleProduct?.mrp != singleProduct?.price && (
                  <div className="text-xxs font-normal">
                    {Math.round((1 - singleProduct?.price / singleProduct?.mrp) * 100)}% OFF
                  </div>
                )
              : singleProduct?.productTag &&
                singleProduct?.productTag?.checkoutOff && (
                  <div className="text-xxs text-green-500 font-normal">
                    EXTRA {singleProduct?.productTag?.checkoutOff}% AT CHECKOUT
                  </div>
                )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

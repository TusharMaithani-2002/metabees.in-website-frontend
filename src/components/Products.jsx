import { useState } from 'react'
import SimpleImageSlider from 'react-simple-image-slider'
export default function Products() {
  const [imageNum, setImageNum] = useState(1)
  const sliderImages = [
    {
      url: 'https://img.freepik.com/free-photo/wide-angle-shot-singletree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg',
    },
    {
      url: 'https://thumbs.dreamstime.com/b/lone-tree-meadow-sunriseidyllic-fabulous-landscapes-39659821.jpg',
    },
    {
      url: 'https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcSprPgYofGmXXPfuEDcZ_XI294n0bME5dTX9TGvINmPiA&s',
    },
    {
      url: 'https://i.pinimg.com/474x/81/ca/47/81ca47eaae35615ba9a9bb57560aaa3c.jpg',
    },
    {
      url: 'https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcTof2fniv0mZzN8DByLmb6ILU4MvV_SGr_wptMeAut_dPaYMBkeHnHhD5egzU7MB0GSqE&usqp=CAU',
    },
  ]
  return (
    <div className="mt-10 relative w-full h-full flex flex-col items-center overflow-x-hidden">
      <h1 className="text-3xl font-bold mb-5 text-[#864bc9]">
        Products We Offer
      </h1>
      <SimpleImageSlider
        className="w-full h-full mt-5 "
        width={500}
        height={250}
        images={sliderImages}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        onStartSlide={(index, length) => {
          setImageNum(index)
        }}
        autoPlayDelay={2}
      />
      <div className="text-[#ae7fe4] text-xl font-bold mt-5">
        The Current Image Slide Number Is {imageNum}
      </div>
    </div>
  )
}

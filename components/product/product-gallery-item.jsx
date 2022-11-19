import Image from 'next/image';
import imageLoader from "@/helpers/imageLoader";

export default function ProductGalleryItem({ img, handleClick }) {
  return (
    <li onClick={handleClick}>
      <div>
        <Image src={img} alt='product' width={70} height={70} loader={imageLoader} />
        
      </div>
    </li>
  );
}

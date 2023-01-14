import { useCustomSelector } from "../../hooks/redux";
import ProductTrolley from "../../components/ProductTrolley";
type Props = {}

const CardPage = (props: Props) => {

  const { auth } = useCustomSelector((state) => state);
  
  return (
    <>
      <div className="  bg-white">
        <ProductTrolley />
      </div>
    </>
  )
}

export default CardPage
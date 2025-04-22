import useFetch from "../components/hooks/useFetch";
import ProductList from "../components/ProductList";

export default function DealPage({ url }) {
  const { data } = useFetch(url);

  const deals =
    data?.products?.filter((product) => product.discountPercentage > 10) || [];

  return <ProductList url={url} title="Ofertas" customProducts={deals} />;
}

// ProductList.tsx
import { useQuery } from "@tanstack/react-query";
import axiosConfig from "./AxiosConfig";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Grid,
  CircularProgress,
  Typography,
} from "@mui/material";
import ProductCard from "./component/ProductCard";

type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

const fetchProducts = async (): Promise<ProductType[]> => {
  const response = await axiosConfig.get("/products");
  return response.data;
};

function ProductList() {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" mt={5}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Typography color="error" textAlign="center" mt={5}>
        Failed to load products.
      </Typography>
    );
  }

  return (
    <Box p={2}>
      <Grid container spacing={3}>
        {data?.map((product) => (
          <Grid size={{ xs: 12, sm: 6, md: 4,lg:3}} key={product.id}>
            <ProductCard
              product={product}
              onClick={() =>
                navigate(`/ecommerce/products/product-list/${product.id}`)
              }
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
export default ProductList;

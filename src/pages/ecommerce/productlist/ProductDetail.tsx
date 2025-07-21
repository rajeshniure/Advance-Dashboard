// ProductDetail.tsx
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axiosConfig from "./AxiosConfig";
import {
  Box,
  Typography,
  CircularProgress,
  Button,
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

const fetchProductById = async (id: string): Promise<ProductType> => {
  const response = await axiosConfig.get(`/products/${id}`);
  return response.data;
};

function ProductDetail() {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id!),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" mt={5}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError || !data) {
    return (
      <Typography color="error" textAlign="center" mt={5}>
        Failed to load product details.
      </Typography>
    );
  }

  return (
    <Box p={3} maxWidth={500} mx="auto">
      <ProductCard
        product={data}
        showDescription={true}
        descriptionMaxLines={10}
        sx={{ height: "20rem" }}
        action={
          <Button
            variant="contained"
            color="primary"
            onClick={() => window.history.back()}
          >
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default ProductDetail;

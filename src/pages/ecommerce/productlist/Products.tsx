import { useQuery } from "@tanstack/react-query";
import axiosConfig from "./AxiosConfig";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  CircularProgress,
  Chip,
} from "@mui/material";

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

function Products() {
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
          <Grid size={{ xs: 12, sm: 6, md: 4,lg:3 }} key={product.id}>
            <Card
              sx={{
                height: "100%",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                },
              }}
              elevation={1}
            >
              <CardMedia
                component="img"
                height="220"
                image={product.image}
                alt={product.title}
                sx={{
                  objectFit: "contain",
                  p: 2,
                  backgroundColor: "#f9f9f9",
                }}
              />
              <CardContent>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  gutterBottom
                  noWrap
                >
                  {product.title}
                </Typography>

                <Chip
                  label={product.category}
                  size="small"
                  sx={{ mb: 1 }}
                  color="primary"
                />

                <Typography variant="h6" color="success.main">
                  ${product.price.toFixed(2)}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  mt={1}
                  sx={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2,
                    overflow: "hidden",
                  }}
                >
                  {product.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Products;

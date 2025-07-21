

import type { Theme } from "@emotion/react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Box,
  type SxProps,
} from "@mui/material";
import type{ ReactNode } from "react";

type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

type ProductCardProps = {
  product: ProductType;
  onClick?: () => void;
  showDescription?: boolean;
  descriptionMaxLines?: number;
  action?: ReactNode;
  sx?: SxProps<Theme>;
};

const ProductCard = ({
  product,
  onClick,
  showDescription = false,
  descriptionMaxLines = 3,
  action,
  sx,
}: ProductCardProps) => {
  return (
    <Card
      onClick={onClick}
      sx={{
        height: "100%",
        cursor: onClick ? "pointer" : "default",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": onClick && {
          transform: "translateY(-5px)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
        },
       
      }}
      
      elevation={1}
    >
      <CardMedia
        component="img"
        height="210"
        image={product.image}
        alt={product.title}
        sx={{
          objectFit: "contain",
          p: 2,
          backgroundColor: "#f9f9f9",
           ...sx,
        }}
      />
      <CardContent>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom noWrap>
          {product.title}
        </Typography>
        <Chip
          label={product.category}
          size="small"
          sx={{ mb: 1 }}
          color="primary"
        />
        {showDescription && (
          <Typography
            variant="body2"
            sx={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: descriptionMaxLines,
              overflow: "hidden",
              mb: 1,
            }}
          >
            {product.description}
          </Typography>
        )}
        <Typography variant="h6" color="success.main">
          ${product.price.toFixed(2)}
        </Typography>

        {action && <Box mt={2}>{action}</Box>}
      </CardContent>
    </Card>
  );
};

export default ProductCard;

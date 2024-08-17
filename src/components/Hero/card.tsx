import {
  Card,
  Typography,
  CardActionArea,
  CardMedia,
  CardContent,
  Box,
} from "@mui/material";

type ProductCardProps = {
  header: string;
  description: string;
  color: string;
};

export default function ProductCard(props: ProductCardProps) {
  return (
    <Card sx={{ backgroundColor: "#2d2d2d", borderRadius: "10px" }}>
      <CardActionArea sx={{ display: "flex", flexDirection: "column" }}>
        <CardMedia
          component="img"
          height="240"
          image="https://via.placeholder.com/400x140"
          alt="Placeholder Image"
        />
        <CardContent sx={{ color: props.color, mt: "1rem" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold" }}
          >
            {props.header}
          </Typography>
          <Typography variant="body2">{props.description}</Typography>
          <Typography
            variant="body2"
            sx={{ color: "secondary.main", mt: "1rem" }}
          >
            Learn more &rarr;
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

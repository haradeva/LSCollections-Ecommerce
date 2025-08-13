import React from "react";
import {
  AccountCircleOutlined,
  CurrencyBitcoinOutlined,
  MoreVert,
  ProductionQuantityLimitsOutlined,
  TrendingUp,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

const salesData = [
  {
    stats: "245k",
    title: "Sales",
    color: "primary",
    icon: <TrendingUp sx={{ fontSize: "1.75rem" }} />,
  },
  {
    stats: "12.5k",
    title: "Customers",
    color: "success",
    icon: <AccountCircleOutlined sx={{ fontSize: "1.75rem" }} />,
  },
  {
    stats: "1.5k",
    title: "Products",
    color: "warning",
    icon: <ProductionQuantityLimitsOutlined sx={{ fontSize: "1.75rem" }} />,
  },
  {
    stats: "88k",
    title: "Revenue",
    color: "info",
    icon: <CurrencyBitcoinOutlined sx={{ fontSize: "1.75rem" }} />,
  },
];
const renderStats = () => {
  return salesData.map((item, index) => (
    <Grid item xs={12} sm={3} key={index}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2, // Adds space between Avatar and text
        }}
      >
        <Avatar
          variant="rounded"
          sx={{
            width: 50,
            height: 50,
            boxShadow: 1, // Reduced box shadow
            backgroundColor: (theme) => theme.palette[item.color].main, // Use MUI theme colors
          }}
        >
          {item.icon}
        </Avatar>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="caption" color="text.secondary">
            {item.title}
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            {item.stats}
          </Typography>
        </Box>
      </Box>
    </Grid>
  ));
};

const MonthlyOverview = () => {
  return (
    <Card sx={{ minHeight: "100%", display: "flex", flexDirection: "column" }}>
      <CardHeader
        title="Monthly Overview"
        action={
          <IconButton size="small">
            <MoreVert />
          </IconButton>
        }
        subheader={
          <Typography variant="body2">
            <Box
              component="span"
              sx={{ fontWeight: 600, color: "text.primary" }}
            >
              Total 48.5% growth
            </Box>{" "}
            this month
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: "2rem !important",
            letterSpacing: ".15px !important",
          },
        }}
      />
      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Grid container spacing={[5, 0]}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MonthlyOverview;

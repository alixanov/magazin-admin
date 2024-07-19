import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardMedia,
  Button,
  Avatar,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Стилизованная карточка
const StyledCard = styled(Card)(({ theme }) => ({
  width: 350,
  height: 450,
  borderRadius: 16,
  boxShadow: theme.shadows[5],
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: theme.shadows[10],
  },
}));

// Стилизованное изображение
const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 200,
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
}));

// Стилизованная кнопка
const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
  },
}));

const Report = ({ products, deleteProduct }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <Grid container spacing={4} justifyContent="center">
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <StyledCard>
              <StyledCardMedia
                component="img"
                image={product.img[0]?.trim() || 'https://via.placeholder.com/350x200?text=No+Image'}
                alt={product.titleProduct}
              />
              <CardContent>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar src={product.umumiyicon} alt={product.titleProduct} />
                  <Typography variant="h5" component="div" gutterBottom style={{ marginLeft: '10px' }}>
                    {product.titleProduct}
                  </Typography>
                </div>
                <Typography variant="body2" color="textSecondary">
                  {product.mahsulotnomi}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {product.nameproduct}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Цена: ${product.price}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {product.productinfo}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Количество оставшихся: {product.nechtaqolgani}
                </Typography>
                <StyledButton
                  variant="contained"
                  onClick={() => deleteProduct(product.id)}
                >
                  Удалить
                </StyledButton>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Report;

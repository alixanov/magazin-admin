import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Typography,
  Container,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProductForm = ({ addProduct }) => {
  const [formData, setFormData] = useState({
    id: '',
    titleProduct: '',
    mahsulotnomi: '',
    swiperuchun: '',
    img: [],
    nameproduct: '',
    price: '',
    productinfo: '',
    nechtaqolgani: '',
  });

  const [newImageUrl, setNewImageUrl] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setNewImageUrl(e.target.value);
  };

  const handleAddImage = () => {
    if (newImageUrl.trim()) {
      setFormData({
        ...formData,
        img: [...formData.img, newImageUrl.trim()],
      });
      setNewImageUrl('');
    }
  };

  const handleRemoveImage = (index) => {
    setFormData({
      ...formData,
      img: formData.img.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(formData);
    toast.success('Продукт успешно добавлен!');
    setFormData({
      id: '',
      titleProduct: '',
      mahsulotnomi: '',
      swiperuchun: '',
      img: [],
      nameproduct: '',
      price: '',
      productinfo: '',
      nechtaqolgani: '',
    });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Добавить новый продукт
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="ID"
              name="id"
              value={formData.id}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Название продукта"
              name="titleProduct"
              value={formData.titleProduct}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Имя продукта"
              name="mahsulotnomi"
              value={formData.mahsulotnomi}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Икон для слайдера"
              name="swiperuchun"
              value={formData.swiperuchun}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Добавить URL изображения"
              value={newImageUrl}
              onChange={handleImageChange}
              fullWidth
            />
            <Button onClick={handleAddImage} variant="contained" color="primary" style={{ marginTop: '10px' }}>
              Добавить изображение
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Ссылки на изображения:</Typography>
            {formData.img.map((url, index) => (
              <Grid container spacing={1} alignItems="center" key={index}>
                <Grid item xs={10}>
                  <Typography>{url}</Typography>
                </Grid>
                <Grid item xs={2}>
                  <IconButton onClick={() => handleRemoveImage(index)}>
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Название продукта"
              name="nameproduct"
              value={formData.nameproduct}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Цена"
              name="price"
              value={formData.price}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Информация о продукте"
              name="productinfo"
              value={formData.productinfo}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Количество оставшихся"
              name="nechtaqolgani"
              value={formData.nechtaqolgani}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Добавить продукт
            </Button>
          </Grid>
        </Grid>
      </form>
      <ToastContainer />
    </Container>
  );
};

export default AddProductForm;

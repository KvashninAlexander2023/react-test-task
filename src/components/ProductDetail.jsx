import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct, getProductColor, getSizes } from '../services/api';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [sizes, setSizes] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    getProduct(id).then((data) => {
      setProduct(data);
      setSelectedColor(data.colors[0]);
    });
    getSizes().then((data) => setSizes(data));
  }, [id]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setCurrentImageIndex(0);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (selectedColor && selectedSize) {
      const item = {
        productId: product.id,
        colorId: selectedColor.id,
        sizeId: selectedSize.id,
        name: product.name,
        color: selectedColor.name,
        size: selectedSize.label,
        price: selectedColor.price,
        image: selectedColor.images[0],
      };
      // Добавление в корзину (реализуем позже)
      console.log('Added to cart:', item);
    }
  };

  if (!product || !selectedColor) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <div>
        <img src={selectedColor.images[currentImageIndex]} alt={product.name} />
        <button onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? 1 : 0))}>
          Переключить изображение
        </button>
      </div>
      <div>
        <h3>Цвета:</h3>
        {product.colors.map((color) => (
          <button key={color.id} onClick={() => handleColorChange(color)}>
            {color.name}
          </button>
        ))}
      </div>
      <div>
        <h3>Размеры:</h3>
        {sizes.map((size) => (
          <button
            key={size.id}
            onClick={() => handleSizeChange(size)}
            disabled={!selectedColor.sizes.includes(size.id)}
          >
            {size.label}
          </button>
        ))}
      </div>
      <button onClick={handleAddToCart} disabled={!selectedSize}>
        Добавить в корзину
      </button>
    </div>
  );
};

export default ProductDetail;
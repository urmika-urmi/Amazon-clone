import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

<React.StrictMode>
  <AuthProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </AuthProvider>
</React.StrictMode>

function moeda(valor) {
  return Number(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function getCart() {
  try { return JSON.parse(localStorage.getItem('espumaCart') || '[]'); }
  catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem('espumaCart', JSON.stringify(cart));
}

function addToCart(product, quantity = 1) {
  const cart = getCart();
  const qtd = Math.max(1, Number(quantity) || 1);
  const existing = cart.find(item => item.id === product.id);
  if (existing) existing.quantity += qtd;
  else cart.push({ ...product, quantity: qtd });
  saveCart(cart);
}

function clearCart() { localStorage.removeItem('espumaCart'); }

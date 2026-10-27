# ShopCart

Plataforma de comercio electrónico de nivel productivo.
Diseñado para el Tech Challenge 360° presentado por Don Arturo/Grupo Petandra.

## Contexto y problema a resolver

Una cadena de tiendas vende hoy solo en sus puntos físicos y quiere lanzar su tienda en línea. Necesita una plataforma propia donde los clientes compren desde el navegador y el equipo interno administre catálogo, inventario, promociones y pedidos.

El flujo principal es el de cualquier comercio electrónico: el cliente navega el catálogo, agrega productos al carrito, aplica cupones, confirma dirección y envío, paga y da seguimiento a su pedido. Del lado interno, el equipo prepara y despacha los pedidos, controla existencias y analiza las ventas.

El negocio tiene preocupaciones concretas que la plataforma debe resolver:

- No vender productos sin existencia, aunque varios clientes compren la última unidad al mismo tiempo.
- Respetar el precio y el descuento que el cliente vio al confirmar la compra, aunque cambien después.
- No cobrar ni crear pedidos duplicados si el cliente presiona dos veces el botón de pagar o falla la conexión.
- Conocer ventas, productos más vendidos y carritos abandonados sin esperar reportes manuales.
- Tener trazabilidad completa de quién modificó precios, existencias y pedidos.
- Contar con trazabilidad clara de entradas, salidas y ajustes de inventario.
- Los montos se manejan en quetzales y los precios publicados incluyen IVA del 12 %.

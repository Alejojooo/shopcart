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

## Roadmap

El trabajo será realizado utilizando la técnica de **balas trazadoras**: se agrega funcionalidad de extremo a extremo, tocando la mayoría de capas del sistema para comprobar que la solución funciona en conjunto. Las decisiones de arquitectura y diseño se difieren hasta que no puedan evadirse. El objetivo de esta metodología es generar feedback rápido de lo que funciona, lo que debe mejorarse y lo que se debe descartar de la solución final.

El flujo, a grandes rasgos es:

1. Completar la funcionalidad requerida en los requerimientos funcionales, de forma correcta y con aserciones básicas, como método de exploración.
2. Reforzar la validación de casos bordes y cumplimiento de requisitos no funcionales.
3. Durante todo el proceso, tener en cuenta los requerimientos técnicos obligatorios para la toma de decisiones.

Los módulos están ordenados según la importancia dentro del negocio (qué se necesita primero y qué después), la complejidad (qué tantas decisiones necesitamos) y el riesgo inherente (en caso de que falle, qué tanto debemos reescribir).

- [ ] Catálogo de productos
- [ ] Autenticación y control de acceso
- [ ] Bitácora
- [ ] Inventario
- [ ] Carrito de compras
- [ ] Checkout y pago
- [ ] Gestión de pedidos y devoluciones
- [ ] Cupones y promociones
- [ ] Dashboard y reportes

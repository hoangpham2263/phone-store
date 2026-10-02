# Phone Store

A full-stack e-commerce store for phones, tablets and laptops, built with a React frontend and a Node.js / Express / Sequelize REST API on MySQL.

## Features

**Customer**
- Home page with banner slider and product blocks by category
- Category pages for phones (iPhone, Samsung), tablets (iPad, Samsung) and laptops (MacBook), with filtering by category, brand and version, sorting and pagination
- Product detail page by slug and live product search in the header
- Registration, login and logout with a JWT stored in an HTTP-only cookie
- Shopping cart saved per user in the database
- Checkout with shipping address (city / district lookup) and two payment options: cash on delivery or PayPal
- Order confirmation email sent through Nodemailer (Gmail), plus a contact form that emails the store
- Order history page with pagination and order cancellation
- Profile page to update personal details, address and avatar image

**Admin** (`/admin/*`)
- Dashboard layout with CRUD management screens for users, groups, roles, group-role assignments, products, categories and brands
- Product and user images uploaded to Cloudinary
- Role-based access control: every admin endpoint is protected by JWT and a permission check that matches the request path against the roles assigned to the user's group

## Tech stack

- **Frontend:** React 18, React Router 6, Redux Toolkit, Axios, Sass (CSS modules), Bootstrap 5, Tailwind CSS, `@paypal/react-paypal-js`, `jwt-decode`, react-toastify, built with Create React App via `react-app-rewired`
- **Backend:** Node.js, Express 4 (Babel / ES modules), Sequelize 6 with `sequelize-cli`, JSON Web Tokens, bcryptjs, cookie-parser, Cloudinary SDK, Nodemailer, slugify, nodemon
- **Database:** MySQL (via `mysql2`)

## Project structure

```text
phone-store/
├── api/                      Express REST API
│   ├── .env.example          Environment variable template
│   ├── .sequelizerc          sequelize-cli paths (config, models, migrations, seeders)
│   ├── Dockerfile            Production image (Babel build)
│   └── src/
│       ├── server.js         App entry point
│       ├── config/           Sequelize config and database connection
│       ├── routes/           apiUser (/api/v1) and apiAdmin (/api/v1/admin) routers
│       ├── controllers/      Request handlers per resource
│       ├── services/         Business logic and database queries
│       ├── middleware/       JWT verification and permission check
│       ├── models/           Sequelize models (User, Group, Role, Product, Cart, Order, ...)
│       ├── migrations/       Table definitions
│       ├── seeders/          Initial groups, roles, users, brands, categories, products, cities, districts
│       └── utility/          Cloudinary upload and email helpers
└── web/                      React frontend
    ├── .env.example          Environment variable template
    ├── Dockerfile            Production build served with `serve`
    └── src/
        ├── Pages/            Customer pages (Home, category pages, HomeDetail, Cart, CheckOut, Order, Profile, ...)
        ├── PageAdmin/        Admin pages (User, Groups, Roles, GroupRole, Products, Categories, Brand, ...)
        ├── layout/           Default, Admin, Headless and No layouts plus shared components
        ├── services/         API clients for user and admin endpoints
        ├── redux/            Redux store and cart / checkout slice
        ├── routes/           Route table mapping paths to pages and layouts
        └── custom/           Axios instance (base URL and credentials)
```

## Getting started

### Prerequisites

- Node.js and npm
- A running MySQL server with an empty database (default name in `.env.example`: `db_ecommerce`)

### Environment variables

Copy the templates and fill in your own values:

```bash
cp api/.env.example api/.env
cp web/.env.example web/.env
```

`api/.env` holds the API port, frontend URL, JWT settings and MySQL connection (`DB_USERNAME`, `DB_PASSWORD`, `DB_DATABASE_NAME`, `DB_HOST`, `DB_PORT`, `DB_DIALECT`). `web/.env` sets `REACT_APP_BACKEND_URL` to the API address (default `http://localhost:8000`).

Cloudinary, Gmail (Nodemailer) and PayPal settings are configured directly in `api/src/utility/` and `web/src/Pages/CheckOut/CheckOut.js`; replace them with your own accounts.

### Database setup

From the `api/` folder, after `npm install`, create the tables and load the seed data:

```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

### Run

Start the API and the web app in two terminals:

```bash
# Terminal 1 - API on http://localhost:8000
cd api
npm install
npm start
```

```bash
# Terminal 2 - web app on http://localhost:3000
cd web
npm install
npm start
```

## Author

**Hoang Pham** — [Portfolio](https://hoangpham2263.github.io) · [GitHub](https://github.com/hoangpham2263)

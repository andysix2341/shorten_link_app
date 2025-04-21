# Basic Shorthen Link Application

Just put the link inside of the box and the shorthen link generate that automaticaly. If you had click submit and generate doesn't happen, you can refresh the page.

### Backend (Node.js/Express)
- **Prisma ORM** for PostgreSQL/MySQL/SQLite

## Technologies
- **Backend**:
  - Node.js
  - Express
  - Prisma

### Prerequisites
- Node.js (v18+)
- npm (v9+)
- Database (MySQL)

### Backend Setup
1. Navigate to backend directory:
    ```bash
   cd backend  
2. Install dependencies:
    ```bash
    npm install
3. Configure environment variables (create .env file):
    ```bash
    DATABASE_URL="your_database_url"
4. Run Prisma migrations:
    ```bash
    npx prisma migrate dev
5. Start server:
    ```bash
    npm run devStart

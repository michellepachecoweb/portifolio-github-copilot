import { DataSource } from "typeorm";

 const dataBaseService = new DataSource({ 
        "type": "sqlite",
        "database": "src/infrastructure/db/database.sqlite",
        "synchronize": true,
        "logging": false,
        "entities": [
            "src/entities/**/*.ts"
        ],
        "migrations": [
            "src/infrastructure/migrations/**/*.ts"
        ],
        "subscribers": [
            "src/infrastructure/subscribers/**/*.ts"
        ]
});

export default dataBaseService;
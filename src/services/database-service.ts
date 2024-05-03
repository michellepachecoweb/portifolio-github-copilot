import { DataSource } from "typeorm";

 const dataBaseService = new DataSource({ 
        "type": "sqlite",
        "database": "src/infrastructure/db/database.sqlite",
        "synchronize": true,
        "logging": false,
        "entities": [
            "src/entity/**/*.ts"
        ],
        "migrations": [
            "src/infrastructure/migration/**/*.ts"
        ],
        "subscribers": [
            "src/infrastructure/subscriber/**/*.ts"
        ]
        // "cli": {
        //     "entitiesDir": "src/entity",
        //     "migrationsDir": "src/infrastructure/migration",
        //     "subscribersDir": "src/subscriber"
        // }
});

export default dataBaseService;
import { MigrationInterface, QueryRunner } from "typeorm";

export class Feed1717619394690 implements MigrationInterface {
    name = 'Feed1717619394690'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "feed" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar NOT NULL, "uri" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "feed"`);
    }

}

import { MigrationInterface, QueryRunner } from "typeorm";

export class FeedId1717625252359 implements MigrationInterface {
    name = 'FeedId1717625252359'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_feed" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar NOT NULL, "uri" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_feed"("id", "title", "uri") SELECT "id", "title", "uri" FROM "feed"`);
        await queryRunner.query(`DROP TABLE "feed"`);
        await queryRunner.query(`ALTER TABLE "temporary_feed" RENAME TO "feed"`);
        await queryRunner.query(`CREATE TABLE "temporary_feed" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "uri" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_feed"("id", "title", "uri") SELECT "id", "title", "uri" FROM "feed"`);
        await queryRunner.query(`DROP TABLE "feed"`);
        await queryRunner.query(`ALTER TABLE "temporary_feed" RENAME TO "feed"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "feed" RENAME TO "temporary_feed"`);
        await queryRunner.query(`CREATE TABLE "feed" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar NOT NULL, "uri" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "feed"("id", "title", "uri") SELECT "id", "title", "uri" FROM "temporary_feed"`);
        await queryRunner.query(`DROP TABLE "temporary_feed"`);
        await queryRunner.query(`ALTER TABLE "feed" RENAME TO "temporary_feed"`);
        await queryRunner.query(`CREATE TABLE "feed" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar NOT NULL, "uri" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "feed"("id", "title", "uri") SELECT "id", "title", "uri" FROM "temporary_feed"`);
        await queryRunner.query(`DROP TABLE "temporary_feed"`);
    }

}

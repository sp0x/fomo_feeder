import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Feed {
    @PrimaryGeneratedColumn()
    id: string;
    @Column()
    title: string;
    @Column()
    uri: string;

    constructor(id: string, title: string, uri: string) {
        this.id = id;
        this.title = title;
        this.uri = uri;
    }
}
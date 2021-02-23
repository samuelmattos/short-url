import {
  BaseEntity,
  Entity,
  Unique,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@Unique(['short'])
export class Url extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, type: 'varchar', length: 10 })
  short: string;

  @Column({ nullable: false, type: 'varchar', length: 300 })
  originalLink: string;

  @Column({ type: 'date', default: () => 'CURRENT_TIMESTAMP' })
  expireDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  hashFnv32a(str) {
    var i, l,
      hval = 0x811c9dc5;

    for (i = 0, l = str.length; i < l; i++) {
      hval ^= str.charCodeAt(i);
      hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
    }
    return ("000000000" + (hval >>> 0).toString(16)).substr(-8);
  }
}
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
  }
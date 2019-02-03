import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table( {
  timestamps: true,
  paranoid: true
} )
export class User extends Model<User>
{
  @Column( { type: DataType.TEXT, unique: true, allowNull: false } )
  public username!: string;

  @Column( { type: DataType.TEXT, allowNull: false } )
  public password!: string;

  @Column( { type: DataType.TEXT, allowNull: false } )
  public salt!: string;
}

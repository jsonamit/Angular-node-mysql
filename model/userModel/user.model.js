

const user = (sequelize, DataTypes) => {
     sequelize.define('address', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
        }

    });
    //return schema
    user.sync({force: true}).then(() => {
        // Table created
        return user.create({
            name: 'John',
            email: 'Hancock',
            pass: 'Hancock'

        });
    });

};

module.exports=user;
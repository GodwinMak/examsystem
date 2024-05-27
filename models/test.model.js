

module.exports= (sequelize, DataTypes) => {
    const Test = sequelize.define("test", {
        test_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        test_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        test_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        test_duration: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        passGrade: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        test_total_marks: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    });
    return Test;
}
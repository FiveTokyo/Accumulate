'use strict';
/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('manage_user', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: '主键'
    },
    name: {
      type: DataTypes.STRING(36),
      allowNull: false,
      defaultValue: '',
      comment: '姓名'
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '年龄'
    },
    phone: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: '电话'
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1',
      comment: '状态(0: 禁用，1: 正常，-99:删除)'
    },
    Avatar: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: '头像'
    },
    identity_card: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: '身份证'
    },
    authority_ids: {
      type: DataTypes.STRING(36),
      allowNull: false,
      defaultValue: '1',
      comment: '权限id'
    },
    create_person: {
      type: DataTypes.STRING(36),
      allowNull: false,
      defaultValue: 'developers',
      comment: '创建人'
    },
    update_person: {
      type: DataTypes.STRING(36),
      allowNull: true,
      defaultValue: 'developers',
      comment: '更新人'
    },
    deleted_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: '删除时间'
    },
    delete_person: {
      type: DataTypes.STRING(36),
      allowNull: true,
      defaultValue: 'developers',
      comment: '删除人'
    }
  }, {
    tableName: 'manage_user',
    timestamps: true,
    createdAt: 'created_time',
    updatedAt: 'updated_time'
  });

  Model.associate = function() {

  }

  return Model;
};

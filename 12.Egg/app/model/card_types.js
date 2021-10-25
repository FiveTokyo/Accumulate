'use strict';
/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('card_types', {
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
      comment: '卡名称'
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '卡类型'
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: '编码'
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '1',
      comment: '状态(0: 禁用，1:正常 ，-99: 删除)'
    },
    created_person: {
      type: DataTypes.STRING(36),
      allowNull: true,
      defaultValue: 'developers',
      comment: '创建人'
    },
    updated_person: {
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
    deleted_person: {
      type: DataTypes.STRING(36),
      allowNull: true,
      defaultValue: 'developers',
      comment: '删除人'
    }
  }, {
    tableName: 'card_types',
    timestamps: true,
    createdAt: 'created_time',
    updatedAt: 'updated_time'
  });

  Model.associate = function() {

  }

  return Model;
};

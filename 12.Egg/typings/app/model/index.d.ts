// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdmins = require('../../../app/model/Admins');
import ExportBooks = require('../../../app/model/Books');
import ExportClasses = require('../../../app/model/Classes');
import ExportPwds = require('../../../app/model/Pwds');
import ExportStudents = require('../../../app/model/Students');
import ExportCardTypes = require('../../../app/model/card_types');
import ExportInitModels = require('../../../app/model/init-models');
import ExportUsers = require('../../../app/model/users');

declare module 'egg' {
  interface IModel {
    Admins: ReturnType<typeof ExportAdmins>;
    Books: ReturnType<typeof ExportBooks>;
    Classes: ReturnType<typeof ExportClasses>;
    Pwds: ReturnType<typeof ExportPwds>;
    Students: ReturnType<typeof ExportStudents>;
    CardTypes: ReturnType<typeof ExportCardTypes>;
    InitModels: ReturnType<typeof ExportInitModels>;
    Users: ReturnType<typeof ExportUsers>;
  }
}

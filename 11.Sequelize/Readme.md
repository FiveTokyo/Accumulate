## sequelize

1. [中文文档]https://www.sequelize.com.cn/core-concepts/getting-started
2. 是一个基于node的ORM框架（关系型对象映射框架）
3. 我的理解就是以**操作对象**的形式操作数据库表中的信息
4. 可以在模型中编写模型运行，映射到数据库中。生成表信息，也可以利用**seuqelize-auto, egg-sequelize-auto(已经很久没更新了，有的comment并不会注入，需要自己拉下代码改一下)**直接把数据表中的信息拉去下来直接生成模型；
5. 他其中自己也封装了很多操作数据方法，免了自己写sql语句，不过我只在一些创建简单、查询、中使用，复杂的查询还是用sql语句；

var mongoose = require('mongoose');
/**
 * 创建产品的shcema
 * @type {mongoose}
 */
var ProductSchema = new mongoose.Schema({
  info       : {
    id       : String,
    name     : String
  },
  version    : String,
  codeVersion: String,
  desc       : String,
  status     : Number,
  author     : String,
  fs_name    : String,
  url        : String,
  fs_path    : String,
  meta       : {
    createAt : {
      type      : Date,
      default   : Date.now()
    },
    updateAt : {
      type      : Date,
      default   : Date.now()
    }
  }
})
/**
 * 给save方法添加预处理
 */
ProductSchema.pre('save',function(next){
  if(this.isNew){
    this.meta.createAt = this.meta.updateAt = Date.now();
  }else{
    this.meta.updateAt = Date.now();
  }
  next();
})
/**
 * 绑定静态方法
 * @type {Object}
 */
ProductSchema.statics = {
  fetch : function(cb){
    return this
      .find({})
      .sort('meta.updateAt')
      .exec(cb);
  },
  findBy : function(id,cb){
    return this
      .find({_id:id})
      .sort('meta.updateAt')
      .exec(cb);
  },
  findByAuthor : function(id,cb){
    return this
      .find({author:id})
      .sort('meta.updateAt')
      .exec(cb);
  },
  findByListId : function(key,cb){
    return this
      .find({'info.id':key})
      .sort('meta.updateAt')
      .exec(cb);
  },
  findNewPr : function(key,cb){
    return this
      .find({'info.id':key,status:1})
      .sort('meta.updateAt')
      .exec(cb);
  },
  userFindByListId : function(user,key,cb){
    return this
      .find({'info.id':key,author:user})
      .sort('meta.updateAt')
      .exec(cb);
  }
}

module.exports = ProductSchema;

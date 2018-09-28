# 产品原型(HTML)管理工具

一个产品原型(HTML)管理工具基于nodejs&mongodb&redis，
支持axure 和 墨刀原型。



### 安装

#### 环境配置

基础环境：node、git、brew(其他平台请参照其他包管理工具)、ruby(brew依赖)

1. 安装redis并启动服务

2. 安装mongodb并启动服务

3. 安装7z并添加到环境变量: 
    > On Linux - https://sourceforge.net/projects/p7zip
    > On Windows - http://www.7-zip.org/download.html
    > On Mac OSX - http://rudix.org/packages/p7zip.html
      

#### 加载启动

1. `git clone https://github.com/yuanwen0327/PrototypeManagement.git`

2. `npm install`

3. `node app`


### 备注

1. 可能需要修改mongodb连接地址，请在app.js中修改

2. 数据库字段配置请参照schemas目录文件

3. 上传工具使用的webuploader(fex团队出品，Ps.希望官方文档能写的好一点...看着心累)

### 涉及技能

- jade
- node
- express
- formdata
- unzip
- mongodb
- redis

### 缺陷

- 未做录入表单数据格式验证
- 后台流程未整理
- 其他未知问题

### PR说明
- 欢迎各种PR
- 提交代码一定要说清楚修改哦~

### 下阶段开发计划
- 等待补充


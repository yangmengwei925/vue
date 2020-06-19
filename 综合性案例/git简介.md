####   git简介

> git是一个开源的分布式版本控制系统，可以有效、高速的处理很小到非常大的项目版本管理。==代码管理工具==

> 版本控制是什么？

    版本控制是一种记录一个或若干个文件内容变化，以便将来查阅特定版本修订情况的系统

>版本管理工具的发展

![image](https://github.com/Wzybnzy/image/blob/master/image/1.png?raw=true)

>什么情况需要用到版本控制？
- 备份文件 （例如用u盘去备份我们的代码）
- 记录历史 （那天那个时间谁修改了那些代码）
- 回到过去 
- 多段共享（公司的电脑写了东西，提交了之后，回到家在家里的电脑拉取下来）
- 团队协作



> 类似的版本管理系统还有svn，它们最主要的区别是：==svn是集中式==的，==git是分布式==的

1.  svn每个文件夹都有一个文件.svn 需要一台中央服务器。版本记录（历史修改记录）是集中存放在服务器上的，如果网络不好，会影响工作，或者服务宕掉，没办法恢复。
    

2. git速度比svn快 只有一个文件夹 .git，
版本记录（历史修改记录）服务器和自己的电脑上都存在，如果网络不好，不会影响工作，或者服务器宕掉，可以通过自己的版本库来恢复。

- 集中式

![image](https://raw.githubusercontent.com/typeofYh/bookpic/master/git-1.png)

- 分布式

![image](https://raw.githubusercontent.com/typeofYh/bookpic/master/git-2.png)



---

> linux命令


指令 | 作用
---|---
pwd | print working directory 打印工作目录
rm 文件名 | 删除文件
rm -rf 文件夹名 | 强制递归删除全部目录及子目录
mkdir 目录名 | 创建目录
cd 目录（可直接拖动文件）| 切换目录
clear | 清屏
ls -a | 显示目录下所有的文件（包含隐藏文件）
ls  | 显示目录下所有文件（补包含隐藏文件）
touch 文件名 | 创建文件
cat 文件名 | 打开文件
vi 文件名 | 按下i（insert）修改 
i(按下键盘的上的i)   |  进入编辑状态 
esc 退出编辑模式 | :q 退出 :q! 强制退出 :wq 保存退出






---
>git命令

命令 | 说明
---|---
git init  | 初始化git仓库
git add . | 把工作区所有的修改都提交到暂存区
git add 指定文件名 | 把工作区指定的文件添加到暂存区
git status | 查看工作区和暂存区的状态
git commit -m "描述" | 把修改从暂存区提交到本地版本库的当前分支
git commit -a -m "提交信息" | 跳过暂存区 已经跟踪过的文件暂存起来一并提交
git log | 查看历史记录
git reflog | 查看所有的历史记录
git log --graph | 打印图谱
git diff | 查看工作区的具体修改
git diff --cached | 查看暂存区具体的修改
git checkout -- 文件名 | 撤销工作区的修改
git clone 仓库地址 | 克隆仓库
ssh-keygen | 生成公钥和秘钥
git push origin master | 向远程master分支推送代码
git pull origin master | 从远程master分支拉取代码
git fetch origin master | 从远程master分支拉取代码，但是不和本地的合并
git branch dev（分支名） | 新建分支
git branch | 查看本地所有的分支
git branch -a | 查看本地和远程所有的分支
git branch -r | 查看远程的分支
git checkout dev(分支名) | 切换分支
git checkout -b 分支名 | 创建并切换分支
git merge origin/master | 合并代码
git branch -d 分支名 | 删除本地分支
git push origin --delete 分支名 | 删除远程分支
git tag v1.0 | 打标签
git tag -d v1.0 | 删除标签

##### 撤销

1》撤销工作区的修改

    git checkout -- 文件名
    
2》撤销暂存区的修改

    第一步：git reset 文件名  把暂存区的修改撤销回工作区
    
    第二步：git checkout -- 文件名
    
    撤销工作区的修改
3》回退版本

    git reset --hard HEAD^ HEAD^^ HEAD~3 回退版本
    
    windows版本下，使用CMD下会出现more，解决办法是：
    1.git reset --hard "HEAD^" 
    2.git reset --hard HEAD~1
        
    git reset --hard commit_id（5aefba5dfdfc6f54b4cbcfcf1be6752429813a0b）



#### github  gitlab   码云

github是一个面向**开源**及**私有**的项目托管平台。
    
github支持两种协议：ssh https

ssh协议：需要配置公钥和秘钥

https协议：需要输入用户名和密码

- 从远程拉取代码：

1》git pull origin master

2》

第一步：git fetch origin master
    
第二步：git merge origin/master

git pull = git fetch + git merge

- 本地仓库和远程仓库关联的两种方法：

1》git clone 仓库地址

2》git init ---》git remote add origin 仓库地址  ---》git push origin master

git remote -v  查看关联的远程仓库

> 修改远端关联的仓库
    
    git remote set-url origin 仓库地址 


> 第一次拉取如果失败的话，需要添加 
    
    git pull origin master --allow-unrelated-histories








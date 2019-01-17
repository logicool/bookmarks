# git 相关

## 给已经存在的项目添加 git

::: tip 前提
先在 git 上创建了工程
:::

1. 初始化 git

   ```js
   git init
   ```

2. 把工程所有文件都添加到该仓库中

   ```js
   git add .
   ```

3. 把工程文件提交到本地仓库

   ```js
   git commit -m "Initial commit"
   ```

4. 添加远程仓库地址

   ```js
   git remote add origin + 你的仓库地址
   ```

   如果出现`fatal: remote origin already exists.`说明你已经添加过远程仓库了，输入以下命令删除远程仓库：`git remote rm origin`，然后再次执行第 4 步。

5. 把文件提交到远程仓库
   ```js
   git push -u origin master
   ```
6. 假如第 5 步失败的话再执行`git pull --rebase origin master`命令，然后再执行`git push -u origin master`即可上传成功。

7. 完事后假如还是不能拉代码的话再重启项目执行`git branch –set-upstream master origin/master`即可。

## git 配置代理 proxy

1. 全局代理
   ```js
   git config --global http.proxy 'http://127.0.0.1:1080'
   git config --global https.proxy 'https://127.0.0.1:1080'
   ```
2. 工程代理
   ```js
   git config http.proxy 'http://127.0.0.1:1080'
   git config https.proxy 'https://127.0.0.1:1080'
   ```
3. 删除代理
   ```js
   git config --global --unset http.proxy
   git config --global --unset https.proxy
   ```

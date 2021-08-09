react17 + antd + webpack5 + sass 打造的微前端 service层
用 vuera 作为中间件， 磨平 react 与 vue之间的差异。

1. git clone ...

2. cd ...

3. 安装依赖 yarn 

4. 启动 yarn start  
访问入口 http://ip:8081/mtk/

5. 打包  
开发 yarn dev  
测试 yarn test  
生产 yarn build 


6.  node 版本v10.0以上  

7.  相关文档  
ajax库 axios  https://www.kancloud.cn/yunye/axios/234845  

注意:开发时npm start启动默认为dev环境，需要请求test、pro接口请手动个性utils/config  
文件中的env参数，打包为自动更改api host无修手动修改

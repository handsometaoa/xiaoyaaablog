# Spring 集成 ES

## 1. 首先创建一个SpringBoot项目

![image-20220921200914965](./assets/image-20220921200914965.png)

点击Next

![image-20220921201208845](./assets/image-20220921201208845.png)

点击Finsh，完成项目创建。

![image-20220921201412224](./assets/image-20220921201412224.png)

## 2. 修改Yaml 配置文件

![image-20220921205458058](./assets/image-20220921205458058.png)

## 3.创建User类与UserMapper接口

1. 创建User类

```java
@Data
@Document(indexName = "user-demo")  //指明类所对应的索引
public class User {
    
    @Id //注意一定要，标明ID
    private String id;
    private String username;
    private String address;
    private Integer age;
    private String gender;
}

```

![image-20220921205802143](./assets/image-20220921205802143.png)

2. 创建UserMapper接口：

```java
public interface UserMapper extends ElasticsearchRepository<User, String> {

}
```



![image-20220921210107804](./assets/image-20220921210107804.png)

## 4.进行测试

1. 增

   ![image-20220921210451614](./assets/image-20220921210451614.png)

2. 删

   ![image-20220921210707839](./assets/image-20220921210707839.png)

   ![image-20220921210839823](./assets/image-20220921210839823.png)

   

3. 改

   这里注意，ES没有修改，而是直接将数据覆盖，所以我们使用save进行保存。

4. 查

   ```java
   public interface UserMapper extends ElasticsearchRepository<User, String> {
   
       List<User> findByUsername(String username);
   
       List<User> findByGender(String gender);
   
       List<User> findByAddressLikeIgnoreCase(String addressLikeIgnoreCase);
   }
   
   ```

   ![image-20220921212426560](./assets/image-20220921212426560.png)
   ![image-20220921212445549](./assets/image-20220921212445549.png)


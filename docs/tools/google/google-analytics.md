# 谷歌分析

## 修改过滤器

`管理` => `数据视图` => `过滤器`

### FULL URL

过滤器类型选择为**自定义**。

字段 A 设置：主机名 => `(.*)`

字段 B 设置：请求 URI => `(.*)`

输出至设置：请求 URI => `$A1$B1`

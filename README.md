# vercel-check-ip

在 vercel 上部署一个用于 curl 获取 ip 的小东西。

fork 本仓库，在 vercel 中 import，直接 deploy，中国大陆建议使用自己的域名，解析如下：

```
cname-china.vercel-dns.com
```

用法：

```bash
curl https://<your-domain>
```

返回样例：

```
{"ip":"xxx.xxx.xxx.xxx"}
```

当然，直接浏览器访问 https://<your-domain> 也不是不可以

Ciallo (∠・ω )⌒★

![](https://raw.githubusercontent.com/d2-projects/repo-email-feedback/master/doc/image/banner.png)

# 两步配置

## Step 1: 配置用户和签名

### 1.1 签名获取

请添加管理员微信 `liyang1711467488` 备注 `邮件申请`

### 1.2 配置签名到 GitHub

在拿到管理员给您的 `FEEDBACK_USERNAME` 和 `FEEDBACK_SIGN` 之后，访问 `https://github.com/您的用户名/仓库名称/settings/secrets`，或者在您的仓库首页点击 **Settings**，然后从侧边栏找到 **Secrets** 选项，然后通过 **Add a new secret** 按钮创建两个密文：

**密文的 Name 和 Value 必须严格按照下表设置**

| Name | Value |
| --- | --- |
| `FEEDBACK_USERNAME` | 由管理员发放给您 |
| `FEEDBACK_SIGN` | 由管理员发放给您 |

最后应该看起来类似这样：

![](https://qiniucdn.fairyever.com/20191208114811.png)

> secret 一旦创建不可修改，无法再次查看内容，如果您创建错误或者需要修改，请删除后重新添加即可。您也无需自己保存签名内容，一个签名只在一个指定仓库有效，如发生丢失可联系管理员找回。

## Step 2: 创建 GitHub action 文件

在您的仓库中建立文件 `.github/workflows/feedback.yml` 内容如下：

> feedback.yml 的文件名可以由您自己决定，但一定要保证是 .yml 文件

### 分支 1: 使用通用邮件模板

``` yml
name: feedback
on: [fork, watch, issues]
jobs:
  feedback:
    runs-on: ubuntu-latest
    steps:
    - name: feedback
      id: feedback
      uses: d2-projects/repo-email-feedback@v1.3
      with:
        username: ${{ secrets.FEEDBACK_USERNAME }}
        sign: ${{ secrets.FEEDBACK_SIGN }}
        wxpusher: ${{ secrets.FEEDBACK_WXPUSHER_UID }}
        template: repo-feedback
        repo: ${{ github.repository }}
        actor: ${{ github.actor }}
        token: ${{ secrets.GITHUB_TOKEN }}
```

### 分支 2: 使用定制邮件

如果你选择了定制邮件，您就可以自由决定邮件的内容，您可以放入自己的联系方式，二维码，或者其它文字和图片内容。

这个过程需要您和管理员交流，等待管理员制作好您专用的邮件模板后，您就可以使用。

``` yml
name: feedback
on: [fork, watch, issues]
jobs:
  feedback:
    runs-on: ubuntu-latest
    steps:
    - name: feedback
      id: feedback
      uses: d2-projects/repo-email-feedback@v1.3
      with:
        username: ${{ secrets.FEEDBACK_USERNAME }}
        sign: ${{ secrets.FEEDBACK_SIGN }}
        wxpusher: ${{ secrets.FEEDBACK_WXPUSHER_UID }}
        template: ${{ github.repository }}
        repo: ${{ github.repository }}
        actor: ${{ github.actor }}
        token: ${{ secrets.GITHUB_TOKEN }}
```

操作完成上面的步骤之后，将最新的代码提交到您的仓库，即完成整个所有工作。

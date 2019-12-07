在项目 star 或者 fork 时自动发送邮件给触发者

[GitHub Action](https://github.com/d2-projects/repo-email-feedback)

# 使用

在仓库中建立文件 `.github/workflows/feedback.yml` 内容如下：

## 针对一般项目

### 通用

``` yml
name: feedback

on: [fork, watch, issues]

jobs:
  feedback:

    runs-on: ubuntu-latest

    steps:
    - name: feedback
      id: feedback
      uses: d2-projects/repo-email-feedback@v1.1
      with:
        template: repo-feedback
        repo: ${{ github.repository }}
        actor: ${{ github.actor }}
        token: ${{ secrets.GITHUB_TOKEN }}
```

## 配置了专用模板的项目

``` yml
name: feedback

on: [fork, watch, issues]

jobs:
  feedback:

    runs-on: ubuntu-latest

    steps:
    - name: feedback
      id: feedback
      uses: d2-projects/repo-email-feedback@v1.1
      with:
        repo: ${{ github.repository }}
        actor: ${{ github.actor }}
        token: ${{ secrets.GITHUB_TOKEN }}
```

## 触发条件

`fork` 仓库时触发：

``` yml
on:
  fork
```

`star` 仓库时触发：

``` yml
on:
  watch
    types: [started]
```

问题操作时触发：

``` yml
on:
  issues:
    types: [opened, edited, milestoned]
```

由多个事件触发：

``` yml
on: [fork, watch, issues]
```

参考 [GitHub Actions | 触发工作流程的事件](https://help.github.com/cn/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows)
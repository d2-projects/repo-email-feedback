在项目 star 或者 fork 时自动发送邮件给触发者

[GitHub Action](https://github.com/d2-projects/repo-email-feedback)

# 使用

## 触发条件

由 `fork` / `star` / `issue` 事件触发邮件操作

``` yml
on: [fork, watch, issues]
```

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

参考 [GitHub Actions | 触发工作流程的事件](https://help.github.com/cn/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows)

## 针对一般项目

### 通用

.github/workflows/feedback.yml

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

.github/workflows/feedback.yml

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

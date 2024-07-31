# Information

This repository contains the source code ReactJS.

## Download

The code snapshots are organized in multiple **branches** that corresponding with each of projects

For example:

![Click on the branch dropdown and then select the appropriate branch for the project you're looking for](./Select-branch.png)

You can download all the content of a branch via the "Code" button on Github. You can then either [clone](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) the repository or simply download the selected branch content as a ZIP file.

**Important:** You always download the **entire branch content!**

## Run code

You can use the attached code simply to compare it to yours. But you can also run it.

To run code, navigate into a specific code snapshot folder via the `cd` command in your command prompt or terminal first.

Then run `npm install` to install all required dependencies (this will create a `/node_modules` folder).

**Important:** If you're using the code for a module that requires API keys or a backend (e.g. the module about sending Http requests), you'll have to use **your backend URLs** or API keys.

#Note

## Optimize:

Control component: ít dữ liệu, dùng vs state

Uncontrol component: thường vs form nhiều dữ liệu, dùng thư viện: react hook form, formik, antd form

### With nextjs:

Add progress bar: có thể dùng next nprogress bar

SSG: generate sẵn file html từ server để ko phải đợi load lâu

Revalidate data + router.refresh: update data để hiển thị vs SSG

Handle error: **error:** áp dụng cho các file page, **global-error:** áp dụng cho file layout, **not-found:** tương tự

Middleware: thường dùng check req, res để chuyển hướng trang

Loading

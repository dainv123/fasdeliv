This project employee list management app, includes 2 sub-projects, including:
* `fasdeliv-admin` 
* `fasdeliv-consumer`

# Fasdeliv Admin

This sub-project is admin site, used to manage employee list taken from [Dummy Page](dummy.restapiexample.com)

## Folder Structure

After creation, your project should look like this:

```
fasdeliv-admin/
  README.md
  pages/
    index.js
    style.js
    config.js
    utility.js
    constants.js
    components/
        Loader.js
        TheFooter.js
        TheHeader.js
        ItemComponent.js
        ListComponent.js
        DetailComponent.js
        ActionBarComponent.js
```
Note: To change the configuration, you can edit the `config.js` file

## Available Scripts

In the project directory, you can run:

### `npm install`

Install packages to setup app

### `npm run dev`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

## Supported Browsers
The ideal environment to run the application: 
* Google Chrome v83.0.4103.106
* Windows 10

By default, the generated project uses the React v16.13.1, Next.js v9.4.4.
You can refer [to the Reac documentation](https://reactjs.org/docs/react-dom.html#browser-support) for more information about supported browsers.

## Result 

This is the initial interface of the page

![page](https://i.ibb.co/0rCjdC5/page.png)

This is the page's interface after selecting an employee

![page-selected](https://i.ibb.co/CQ0HRNg/page-selected.png)

`Export` function, after you click the export button, the application will export you a `template.json` file. This is the template file used in the import function, which contains the data configuration of the current screen.

![export](https://i.ibb.co/GMQtFCD/export.png)

And in the `import` function, after clicking the import button, the application will display an input used to import the sample file. After you import this file, the application will reload the page, displaying the screen configured in the file.

![import](https://i.ibb.co/5nvP56C/import.png)

To edit employee information, you will have several main functions:
* `Save` always available, save the current state.
* `Undo` is an activity that brings the application to an earlier state with a jump of 1: S [n] → S [n-1] →… → S [1] → S [0]. This means that you can only perform Undo when you are in S [i] state, with i> 0.
* `Redo` is an activity that brings the application to a newer state with a step of 1: S [0] → S [1] →… → S [n-1] → S [n]. This means that you can only perform Redo when you are in S [i] state with i <n.
* `Drag-Drop` in this function, the application allows you to drag and drop the position of the input (in the personal information section) as you like.

Note: the new status will be operations related to data changes or drag-drop the Inputs.

![alt text](https://i.ibb.co/G08YMg8/detail-functions.png)
![alt text](https://i.ibb.co/JvVvmZG/drag-and-drop-moved.png)

# Fasdeliv Consumer

This sub-project is the consumer site, used to present the employee list taken from [Dummy Page](dummy.restapiexample.com)

## Folder Structure

After creation, your project should look like this:

```
fasdeliv-consumer/
  README.md
  src/
    pages/
    Home/
        Home.vue
        home.scss
    components/
        Loader.vue
        TheFooter.vue
        TheHeader.vue
        LikeComponent.vue
        ListComponent.vue
        ItemComponent.vue
        DetailComponent.vue
```
Note: to change the configuration, you can edit the`Home.vue` file:

```vue
data() {
    return {
      config: {
        siteName: "FasDeliv Consumer",
        siteDescription: "This is Consumer Page - Use Vue (My Template)",
        ...
      }
    };
}
```

## Available Scripts

In the project directory, you can run:

### `npm install`

Install packages to setup app

### `npm run serve`

Compiles and hot-reloads for development.
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

### `npm run build`

Compiles and minifies for production in `dist/`

### `npm run lint`

Lints and fixes files

## Supported Browsers
By default, the generated project uses the Vue v2.6.11.

## Result 

This is the initial interface of the page

![page](https://i.ibb.co/Htv0FFS/consumer-page.png)

This is the page's interface after selecting an employee

![page-selected](https://i.ibb.co/mSxS3sh/consumer-selected.png)

Interact with the employees by Like button

![like](https://i.ibb.co/P1jYyX9/consumer-like.png)

## Plan out estimation

| Task  | Time | Start Day  | End Day |
| ------------- | ------------- | ------------- | ------------- |
| Analyze, design mockups  | 4h | 06/19/2020 | 19/06/2020 |
| Admin - Setup app, install packages  | 1h  | 19/06/2020 | 19/06/2020 |
| Admin - Create component layouts  | 4h  | 20/06/2020 | 20/06/2020 |
| Admin - Integrated list management function | 3h  | 20/06/2020 | 20/06/2020 |
| Admin - Integrated drag drop function  | 2.5h  | 20/06/2020 | 20/06/2020 |
| Admin - Optimize source code  | 3h  | 21/06/2020 | 21/06/2020 |
| Consumer - Setup app, install packages  | 0.5h  | 19/06/2020 | 19/06/2020 |
| Consumer - Create component layouts  | 2h  | 21/06/2020 | 21/06/2020 |
| Consumer - Integrated empoyees function | 0.5h  | 21/06/2020 | 21/06/2020 |
| Consumer - Like button  | 0.5h  | 21/06/2020 | 21/06/2020 |
| Consumer - Optimize source code  | 1h  | 21/06/2020 | 21/06/2020 |

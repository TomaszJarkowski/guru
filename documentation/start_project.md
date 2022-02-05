---
order: 98
---

# Start Project :computer:	

See the program operation in the link below or download the project, download it to your computer. Then follow the instructions. (Instead of downloading the project, you can also use the **git clone** command)

## Installing :open_file_folder:

Create an "**.env**" file in the project's root directory, then copy the entire contents of the "**.env.tpl**" file and paste it into "**.env**" and replace "**URL**" with the correct paths

To initiate the project, enter in the terminal:

```
npm install
```

Build the client, enter in the terminal:

```
npm run build
```

To start a live server, enter in the terminal:

```
npm start
```

Start project by **Docker**

```
docker build -t guru .
```

```
docker run -p 8000:8080 guru
```
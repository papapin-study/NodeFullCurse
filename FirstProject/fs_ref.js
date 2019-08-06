const fs = require('fs');
const path = require('path')

//File System

//How to create folder
// fs.mkdirSync(path.join(__dirname, 'notes'), (err) => {
//     if (err) throw new Error(err)


//     console.log('folder have been created')
// })

//Create
fs.writeFile(path.join(__dirname, 'notes', 'mynotes.txt'),
            'Hello world',
            (err) => {
                if (err) throw new Error(err)
                console.log('file have been created')
            }
)

//Update
fs.appendFile(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    'Fromm append function',
    (err) => {
        if (err) throw new Error(err)
        console.log('file have been updated')
    }

)

//Read
fs.readFile(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    'utf-8',
    (err, data) => {
        if (err) throw new Error(err)
        console.log(Buffer.from(data).toString())
        console.log('-------------')
        console.log(data)
    }
)


//rename

fs.rename(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    path.join(__dirname, 'notes', 'notes.txt'),
    (err) => {
        if (err) throw new Error(err)
        console.log('file have been renamed')
    }
)


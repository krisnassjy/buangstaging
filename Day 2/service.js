import db from "./db.js"

const changePassword = (newPassword, index) => {
    db[index].password = newPassword
    return 'You have successfully changed password!'
}

const changeName = (newName, index) => {
    db[index].fullname = newName
    return 'You have successfully changed name!'
}

const changeAge = (newAge, index) => {
    db[index].age = parseInt(newAge)
    return 'You have successfully changed Age!'
}

const chooseMenu = (menu, index) => {
    console.log(menu)
    switch (menu) {
        case 1:
            let newPassword = prompt('Enter new password!')
            return changePassword(newPassword, index)
            break
        case 2:
            let newName = prompt('Enter new name!')
            return changeName(newName, index)
            break
        case 3:
            let newAge = prompt('Enter new age!')
            return changeAge(newAge, index)
        default:
            break
    }
}

const simpan = () => {
    let data = {
        id: parseInt(db[db.length - 1].id + 1),
        email: '',
        password: '',
        age: '',
        fullname: '',
        verified: true
    }
    data.email = prompt('Please enter your email')
    data.password = prompt('Please enter your password')
    data.fullname = prompt('Please enter your name')
    data.age = prompt('Please enter your age')
    for (let i = 0; i < db.length; i++) {
        if (db[i].email === data.email) {
            return 'Email has been used!';
        }
    }
    db.push(data)
    return 'data berhasil ditambahkan'
}

const list = () => {
    let text = ''
    db.map((item, i)=> {
        text+= `\nUser ke ${i}\n`
        text+= `Email: ${item.email}\n`
        text+= `Fullname: ${item.fullname}\n`
        text+= `Age: ${item.age}\n`
        text+= `Password: ${item.password}\n`
        text+= `Verified: ${item.verified}\n`
    })
    return text
}

const edit = () => {
    let emailLogin = prompt('Please enter your email')
    let passwordLogin = prompt('Please enter your password')
    let getIndex = db.findIndex(db => {
        return db.email === emailLogin.toLowerCase() && db.password === passwordLogin
    })
    if (Boolean(getIndex)) {
        return 'Email & password is wrong'
    } else {
        let menu = prompt('What do you wanna choose? \n1: Change password, 2: Change name, 3: Change age')
        return chooseMenu(parseInt(menu), getIndex)
    }
}

const hapus = () => {
    let emailLogin = prompt('Please enter your email')
    let passwordLogin = prompt('Please enter your password')
    let getIndex = db.findIndex(db => {
        return db.email === emailLogin.toLowerCase() && db.password === passwordLogin
    })
    db = db.filter((item, i) => i !== getIndex)
}

const start = () => {
    let fitur = prompt('Anda baru saja memulai program user: \n1. Register user baru\n2. Check list user\n3. Edit user\n4. Delete User')
    switch (parseInt(fitur)) {
        case 1:
            alert(simpan())
            break
        case 2:
            alert(list())
            break
        case 3:
            alert(edit())
            break
        case 4:
            alert(hapus())
            break
        default:
            break
    }
}

export default start
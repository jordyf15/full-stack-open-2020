const mongoose=require('mongoose');
const supertest=require('supertest')
const app=require('../app');
const api=supertest(app);
const User=require('../models/user');
const helper=require('./test_helper');
const bcrypt=require('bcrypt');

beforeEach(async()=>{
    await User.deleteMany();
    const saltRounds=10;
    const passwordHash=await bcrypt.hash('testpass',saltRounds);
    const initialUser= new User({
        username: "testmen",
        name:'test',
        password: passwordHash
    })
    await initialUser.save();
})
describe('invalid user creation',()=>{
    test('no username inputted',async()=>{
        const initialDB=await helper.usersInDB();
        const newUser={
            name: 'fail',
            password: 'failpass'
        }
        await api.post('/api/users')
        .send(newUser)
        .expect(400)
    
        const endDB=await helper.usersInDB();
        expect(endDB).toHaveLength(initialDB.length);
    })

    test('username already exist',async()=>{
        const initialDB=await helper.usersInDB();
        const newUser={
            susername: "testmen",
            name:'test',
            password: 'testpass'
        }
        await api.post('/api/users')
        .send(newUser)
        .expect(400)
        const endDB=await helper.usersInDB();
        expect(endDB).toHaveLength(initialDB.length)
    })

    test('username less than 3',async()=>{
        const initialDB=await helper.usersInDB();
        const newUser={
            username:'te',
            name: 'test',
            password: "testpass"
        }
        await api.post('/api/users')
        .send(newUser)
        .expect(400)

        const endDB=await helper.usersInDB();
        expect(endDB).toHaveLength(initialDB.length)
    })

    test('password is not inputted',async()=>{
        const initialDB=await helper.usersInDB()
        const newUser={
            username:'failman',
            name: 'fail'
        }
        await api.post('/api/users')
        .send(newUser)
        .expect(400)

        const endDB=await helper.usersInDB()
        expect(endDB).toHaveLength(initialDB.length)
    })

    test('password less than 3',async()=>{
        const initialDB=await helper.usersInDB()
        const newUser={
            username:'failman',
            name:'fail',
            password: 'fa'
        }
        await api.post('/api/users')
        .send(newUser)
        .expect(400)

        const endDB=await helper.usersInDB()
        expect(endDB).toHaveLength(initialDB.length)
    })
})




afterAll=((done)=>{
    mongoose.connection.close()
    done();
})
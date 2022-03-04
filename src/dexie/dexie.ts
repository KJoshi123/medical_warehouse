import React from 'react';
import Dexie, { DBCoreRangeType } from 'dexie';

let mainDatabaseObject : any;

export const createDB = () => {
    Dexie.exists('warehouse').then((exists)=>{
        if(!exists){
            let database = new Dexie('warehouse');
            database.version(1).stores({
                users : "++id, name, username, password, storeId"
            });

            database.open().catch((err)=>{
                console.error("db cretion error , ",err);
            });
            database.table('users').add({
                name : 'kaustubh k joshi',
                username : 'user1',
                password : 'password',
                storeId : 'a'
            }).then(()=>{console.log('data added for user1')})
            .catch((err)=>console.log('user 1 error',err));
        }
    })
}

export const checkLogin = (username : string, password : string) => {
    const response = new Dexie('warehouse').open().then(async (db)=>{
        //const find = await db.table('users').where(["username","password"]).equals([username,password])
        const result = await db.table('users').get({username : username, password : password});
        if(result){
            return true;
        }
        else{
            return false;
        }
    }).catch((e) => {console.error("error connect with database while login : ",e); return false});
    return response
}
//module.exports = [createDB]